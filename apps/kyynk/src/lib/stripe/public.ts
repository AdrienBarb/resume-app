'use client';

import { loadStripe, Stripe } from '@stripe/stripe-js';

let _stripePromise: Promise<Stripe | null> | null = null;

export function getStripePromise() {
  const key = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY;
  if (!key) {
    console.error('Missing NEXT_PUBLIC_STRIPE_PUBLIC_KEY');
    throw new Error('Stripe public key not configured');
  }
  if (!_stripePromise) {
    _stripePromise = loadStripe(key);
  }
  return _stripePromise;
}
