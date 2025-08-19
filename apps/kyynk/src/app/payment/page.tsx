'use client';

import React, { useState } from 'react';
import {
  useStripe,
  useElements,
  PaymentElement,
  Elements,
} from '@stripe/react-stripe-js';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/Carousel';
import { creditPackages, getPackById } from '@/constants/creditPackages';
import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/tailwind/cn';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/layout/LanguageSwitcher';
import { getStripePromise } from '@/lib/stripe/public';

// --- Simple inline checkout form using PaymentElement ---
function CheckoutForm({
  amountLabel,
  onDone,
}: {
  amountLabel: string;
  onDone?: () => void;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    // (Stripe docs) validate Element + collect wallets before confirm
    const { error: submitError } = await elements.submit();
    if (submitError) {
      setLoading(false);
      setErrorMsg(submitError.message ?? 'Payment form incomplete.');
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
      // If you prefer full redirect flow, pass confirmParams.return_url here
    });

    setLoading(false);

    if (error) {
      setErrorMsg(error.message ?? 'Payment failed.');
      return;
    }

    setSuccessMsg('Payment succeeded! Your credits will be added shortly.');
    onDone?.();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement options={{ layout: 'tabs' }} />
      {errorMsg && <p className="text-sm text-red-600">{errorMsg}</p>}
      {successMsg && <p className="text-sm text-green-700">{successMsg}</p>}
      <Button
        type="submit"
        disabled={!stripe || !elements || loading}
        isLoading={loading}
        className="w-full"
      >
        Pay {amountLabel}
      </Button>
    </form>
  );
}

const PaymentPage = () => {
  const t = useTranslations();

  // 1) user picks a package
  const [selectedPackageId, setSelectedPackageId] = useState<number | null>(
    null,
  );

  // 2) after Buy, create PaymentIntent and store clientSecret
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);

  const selectedPack = selectedPackageId
    ? getPackById(selectedPackageId)
    : null;

  const handleBuy = async () => {
    if (!selectedPackageId) return;
    setCreating(true);
    setCreateError(null);

    try {
      const res = await fetch('/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ packageId: selectedPackageId }),
      });
      const json = await res.json();
      if (!res.ok)
        throw new Error(json?.error || 'Failed to create payment intent');
      setClientSecret(json.clientSecret); // show PaymentElement now
    } catch (e: any) {
      setCreateError(e.message);
    } finally {
      setCreating(false);
    }
  };

  const resetCheckout = () => setClientSecret(null);

  return (
    <div className="w-full">
      <header className="fixed right-0 left-0 top-0 z-10 p-4 flex justify-between align-center bg-secondary-dark border-b border-custom-black/20 h-[68px]">
        <span></span>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
        </div>
      </header>

      <main className="mt-[68px] container mx-auto p-6">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-2xl font-bold mb-2">
            {t('paymentModalBuyCredits')}
          </h1>
          <p className="text-gray-600">{t('paymentModalSelectPackage')}</p>
        </div>

        {/* If no clientSecret yet: show packs picker */}
        {!clientSecret && (
          <>
            <Carousel
              opts={{ align: 'start' }}
              className="w-full max-w-44 md:max-w-md mx-auto mb-8"
            >
              <CarouselContent>
                {creditPackages.map((pkg) => (
                  <CarouselItem
                    key={pkg.id}
                    className="basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <div
                      className={cn(
                        'p-4 border rounded-lg flex flex-col items-center cursor-pointer',
                        selectedPackageId === pkg.id && 'border-primary',
                      )}
                      onClick={() => setSelectedPackageId(pkg.id)}
                    >
                      <h3 className="text-lg font-bold">{pkg.name}</h3>
                      <p>
                        {t('paymentModalPrice')}: {(pkg.price / 100).toFixed(2)}{' '}
                        $
                      </p>
                      <p>
                        {t('paymentModalCoins')}: {pkg.credits}
                        {pkg.bonus ? ` (+${pkg.bonus} bonus)` : ''}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

            {createError && (
              <p className="text-sm text-red-600 text-center mb-2">
                {createError}
              </p>
            )}

            <div className="flex justify-center">
              <Button
                className="w-full max-w-md"
                disabled={creating || selectedPackageId === null}
                isLoading={creating}
                onClick={handleBuy}
              >
                Buy
              </Button>
            </div>
          </>
        )}

        {/* If clientSecret present: render Stripe Elements */}
        {clientSecret && selectedPack && (
          <div className="max-w-md mx-auto mt-8 space-y-4">
            <Elements
              stripe={getStripePromise()}
              options={{
                clientSecret,
                appearance: { labels: 'floating' },
                // locale: 'auto', // or map from next-intl if you want
              }}
            >
              <CheckoutForm
                amountLabel={`$${(selectedPack.price / 100).toFixed(2)} USD`}
                onDone={() => {
                  // Optionally refresh balance or navigate
                }}
              />
            </Elements>
          </div>
        )}
      </main>
    </div>
  );
};

export default PaymentPage;
