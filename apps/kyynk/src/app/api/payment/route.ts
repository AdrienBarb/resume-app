import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe/client';
import { getPackById } from '@/constants/creditPackages';
import { prisma } from '@/lib/db/client';
import { TransactionStatus } from '@prisma/client';

export async function POST(req: NextRequest) {
  const { packageId, userId } = await req.json();
  const pack = getPackById(Number(packageId));
  if (!pack) {
    return NextResponse.json({ error: 'Invalid package' }, { status: 400 });
  }

  const idempotencyKey = `${userId}:${pack.id}:${Date.now()}`;

  const intent = await stripe.paymentIntents.create(
    {
      amount: pack.price,
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
      metadata: {
        userId,
        packageId: String(pack.id),
        packageName: pack.name,
        credits: String(pack.credits),
        bonus: String(pack.bonus),
      },
    },
    { idempotencyKey },
  );

  await prisma.creditTransaction.create({
    data: {
      userId,
      amountCents: pack.price,
      packageId: pack.id,
      currency: 'usd',
      credits: pack.credits,
      stripePaymentIntentId: intent.id,
      status: TransactionStatus.PROCESSING,
    },
  });

  return NextResponse.json({ clientSecret: intent.client_secret });
}
