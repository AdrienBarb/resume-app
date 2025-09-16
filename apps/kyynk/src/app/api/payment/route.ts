import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe/client';
import { getPackById } from '@/constants/creditPackages';
import { prisma } from '@/lib/db/client';
import { TransactionStatus } from '@prisma/client';

export async function POST(req: NextRequest) {
  const { packageId, userId, discount } = await req.json();
  const pack = getPackById(Number(packageId));
  if (!pack) {
    return NextResponse.json({ error: 'Invalid package' }, { status: 400 });
  }

  // Validate discount eligibility if discount is provided
  let finalPrice = pack.price;
  if (discount) {
    if (typeof discount !== 'number' || discount < 0 || discount > 100) {
      return NextResponse.json(
        { error: 'Invalid discount value' },
        { status: 400 },
      );
    }

    // Check if user has any successful credit transactions
    const hasSuccessfulTransactions = await prisma.creditTransaction.findFirst({
      where: {
        userId,
        status: TransactionStatus.SUCCEEDED,
      },
    });

    if (hasSuccessfulTransactions) {
      return NextResponse.json(
        { error: 'Discount only available for first-time purchases' },
        { status: 400 },
      );
    }

    // Apply discount
    finalPrice = Math.round(pack.price * (1 - discount / 100));
  }

  const idempotencyKey = `${userId}:${pack.id}:${Date.now()}`;

  const intent = await stripe.paymentIntents.create(
    {
      amount: finalPrice,
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
      metadata: {
        userId,
        packageId: String(pack.id),
        packageName: pack.name,
        credits: String(pack.credits),
        bonus: String(pack.bonus),
        discount: discount ? String(discount) : undefined,
        originalPrice: String(pack.price),
      },
    },
    { idempotencyKey },
  );

  await prisma.creditTransaction.create({
    data: {
      userId,
      amountCents: finalPrice,
      packageId: pack.id,
      currency: 'usd',
      credits: pack.credits,
      stripePaymentIntentId: intent.id,
      status: TransactionStatus.PROCESSING,
    },
  });

  return NextResponse.json({ clientSecret: intent.client_secret });
}
