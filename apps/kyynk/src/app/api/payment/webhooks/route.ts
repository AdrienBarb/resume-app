import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db/client';
import Stripe from 'stripe';
import { TransactionStatus } from '@prisma/client';
import { stripe } from '@/lib/stripe/client';

export const runtime = 'nodejs'; // raw body access

export async function POST(req: NextRequest) {
  const signature = req.headers.get('stripe-signature');
  if (!signature) {
    return new NextResponse('Missing stripe-signature', { status: 400 });
  }

  const rawBody = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch (err: any) {
    return new NextResponse(
      `Webhook signature verification failed: ${err.message}`,
      { status: 400 },
    );
  }

  try {
    switch (event.type) {
      case 'payment_intent.succeeded': {
        const pi = event.data.object as Stripe.PaymentIntent;

        const existing = await prisma.creditTransaction.findFirst({
          where: { stripePaymentIntentId: pi.id },
        });

        if (!existing) {
          break;
        }

        await prisma.$transaction([
          prisma.user.update({
            where: { id: existing.userId },
            data: { creditBalance: { increment: existing.credits } },
          }),
          prisma.creditTransaction.update({
            where: { id: existing.id },
            data: {
              status: TransactionStatus.SUCCEEDED,
            },
          }),
        ]);

        break;
      }

      case 'payment_intent.payment_failed': {
        const pi = event.data.object as Stripe.PaymentIntent;

        const existing = await prisma.creditTransaction.findFirst({
          where: { stripePaymentIntentId: pi.id },
        });

        if (existing) {
          await prisma.creditTransaction.update({
            where: { id: existing.id },
            data: {
              status: TransactionStatus.CANCELED,
            },
          });
        }
        break;
      }

      case 'payment_intent.canceled': {
        const pi = event.data.object as Stripe.PaymentIntent;

        const existing = await prisma.creditTransaction.findFirst({
          where: { stripePaymentIntentId: pi.id },
        });

        if (existing) {
          await prisma.creditTransaction.update({
            where: { id: existing.id },
            data: {
              status: TransactionStatus.CANCELED,
            },
          });
        }
        break;
      }

      default:
        break;
    }

    return NextResponse.json({ received: true });
  } catch (err: any) {
    return new NextResponse(`Webhook handler error: ${err.message}`, {
      status: 500,
    });
  }
}
