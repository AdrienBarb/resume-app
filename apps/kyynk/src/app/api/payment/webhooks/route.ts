import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { prisma } from '@/lib/db/client';
import { TransactionStatus } from '@prisma/client';
export const runtime = 'nodejs'; // ensure Node runtime for raw body

export async function POST(req: NextRequest) {
  const sig = req.headers.get('stripe-signature')!;
  const rawBody = await req.text();

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch (err: any) {
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  if (event.type === 'payment_intent.succeeded') {
    const pi = event.data.object as any;
    const md = pi.metadata || {};
    const userId = md.userId as string | undefined;
    if (userId) {
      const credits = parseInt(md.credits ?? '0', 10);
      const bonus = parseInt(md.bonus ?? '0', 10);
      const packageId = parseInt(md.packageId ?? '0', 10);
      const packageName = (md.packageName as string) ?? 'Unknown';

      // upsert ledger & credit balance
      await prisma.$transaction([
        prisma.user.update({
          where: { id: userId },
          data: { creditBalance: { increment: credits } },
        }),
        prisma.creditTransaction.create({
          data: {
            userId,
            packageId,
            packageName,
            amountCents: pi.amount_received ?? pi.amount,
            currency: pi.currency,
            credits,
            bonus,
            stripePaymentIntentId: pi.id,
            status: 'succeeded',
          },
        }),
      ]);
    }
  }

  // (optional) handle cancel/failed to log attempts
  if (
    event.type === 'payment_intent.canceled' ||
    event.type === 'payment_intent.payment_failed'
  ) {
    const pi = event.data.object as any;
    const md = pi.metadata || {};
    const userId = md.userId as string | undefined;
    if (userId) {
      await prisma.creditTransaction.create({
        data: {
          userId,
          packageId: parseInt(md.packageId ?? '0', 10),
          packageName: (md.packageName as string) ?? 'Unknown',
          amountCents: pi.amount ?? 0,
          currency: pi.currency ?? 'usd',
          credits: parseInt(md.credits ?? '0', 10),
          bonus: parseInt(md.bonus ?? '0', 10),
          stripePaymentIntentId: pi.id,
          status:
            event.type === 'payment_intent.canceled'
              ? TransactionStatus.CANCELED
              : TransactionStatus.CANCELED,
        },
      });
    }
  }

  return NextResponse.json({ received: true });
}
