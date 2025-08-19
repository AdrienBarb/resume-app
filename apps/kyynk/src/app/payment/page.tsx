'use client';

import React, { useState, useEffect } from 'react';
import {
  useStripe,
  useElements,
  PaymentElement,
  Elements,
} from '@stripe/react-stripe-js';
import {
  useQueryStates,
  parseAsString,
  parseAsInteger,
  useQueryState,
} from 'nuqs';
import { toast } from 'react-hot-toast';
import { ArrowLeft } from 'lucide-react';

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
import { useRouter } from 'next/navigation';

interface ErrorScreenProps {
  message: string;
  onRetry: () => void;
}

function ErrorScreen({ message, onRetry }: ErrorScreenProps) {
  return (
    <div className="max-w-md mx-auto text-center space-y-4">
      <div className="text-6xl">😞</div>
      <h2 className="text-xl font-semibold">Oops! Something went wrong</h2>
      <p className="text-gray-600">{message}</p>
      <Button onClick={onRetry} className="w-full">
        Try Again
      </Button>
    </div>
  );
}
interface CheckoutFormProps {
  amountLabel: string;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

function CheckoutForm({ amountLabel, onSuccess, onError }: CheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    const { error: submitError } = await elements.submit();
    if (submitError) {
      setLoading(false);
      const errorMessage = submitError.message ?? 'Payment form incomplete.';
      toast.error(errorMessage);
      onError?.(errorMessage);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
    });

    setLoading(false);

    if (error) {
      const errorMessage = error.message ?? 'Payment failed.';
      toast.error(errorMessage);
      onError?.(errorMessage);
      return;
    }

    toast.success('Payment succeeded! Your credits will be added shortly.');
    onSuccess?.();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement options={{ layout: 'tabs' }} />
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

interface PackageSelectionProps {
  selectedPackageId: number | null;
  onSelectPackage: (id: number) => void;
  onBuy: () => void;
  isCreating: boolean;
  t: any;
}

function PackageSelection({
  selectedPackageId,
  onSelectPackage,
  onBuy,
  isCreating,
  t,
}: PackageSelectionProps) {
  return (
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
                onClick={() => onSelectPackage(pkg.id)}
              >
                <h3 className="text-lg font-bold">{pkg.name}</h3>
                <p>
                  {t('paymentModalPrice')}: {(pkg.price / 100).toFixed(2)} $
                </p>
                <p>
                  {t('paymentModalCoins')}: {pkg.credits}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="flex justify-center">
        <Button
          className="w-full max-w-md"
          disabled={isCreating || selectedPackageId === null}
          isLoading={isCreating}
          onClick={onBuy}
        >
          Buy
        </Button>
      </div>
    </>
  );
}

const PaymentPage = () => {
  const t = useTranslations();
  const router = useRouter();
  const [clientSecret, setClientSecret] = useQueryStates({
    clientSecret: parseAsString,
    selectedPackage: parseAsInteger,
  });
  const [userId, setUserId] = useQueryState('userId');
  const [redirectUrl, setRedirectUrl] = useQueryState('redirectUrl');

  const prevUrl = redirectUrl || process.env.NEXT_PUBLIC_APP_URL;

  const [creating, setCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const selectedPack = clientSecret.selectedPackage
    ? getPackById(clientSecret.selectedPackage)
    : null;

  const handleSelectPackage = (packageId: number) => {
    setClientSecret({ selectedPackage: packageId });
  };

  const handleBuy = async () => {
    if (!clientSecret.selectedPackage) return;
    setCreating(true);
    setError(null);

    try {
      const res = await fetch('/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          packageId: clientSecret.selectedPackage,
          userId: userId,
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json?.error || 'Failed to create payment intent');
      }
      setClientSecret({
        selectedPackage: clientSecret.selectedPackage,
        clientSecret: json.clientSecret,
      });
    } catch (e: any) {
      const errorMessage = e.message;
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setCreating(false);
    }
  };

  const handleBack = () => {
    if (isOnPaymentForm) {
      setClientSecret(null);
    } else if (userId && prevUrl) {
      window.location.href = prevUrl;
    }
  };

  const handlePaymentSuccess = () => {
    if (userId) {
      window.location.href = prevUrl!;
    } else {
      router.push('/');
    }
  };

  const handlePaymentError = (errorMessage: string) => {
    setError(errorMessage);
  };

  const handleRetryError = () => {
    setError(null);
  };

  if (error) {
    return (
      <div className="w-full">
        <header className="fixed right-0 left-0 top-0 z-10 p-4 flex justify-between align-center bg-secondary-dark border-b border-custom-black/20 h-[68px]">
          <span></span>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
          </div>
        </header>
        <main className="mt-[68px] container mx-auto p-6">
          <ErrorScreen message={error} onRetry={handleRetryError} />
        </main>
      </div>
    );
  }

  const isOnPaymentForm = !!clientSecret.clientSecret;
  const headerTitle =
    isOnPaymentForm && selectedPack
      ? `You're going to pay $${(selectedPack.price / 100).toFixed(2)}`
      : t('paymentModalBuyCredits');
  const headerSubtitle = isOnPaymentForm
    ? `${selectedPack?.credits} credits for ${selectedPack?.name} package`
    : t('paymentModalSelectPackage');

  return (
    <div className="w-full">
      <header className="fixed right-0 left-0 top-0 z-10 p-4 flex justify-between align-center bg-secondary-dark border-b border-custom-black/20 h-[68px]">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleBack}
            className="mr-2"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
        </div>
      </header>

      <main className="mt-[68px] container mx-auto p-6">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-2xl font-bold mb-2">{headerTitle}</h1>
          <p className="text-gray-600">{headerSubtitle}</p>
        </div>

        {!isOnPaymentForm && (
          <PackageSelection
            selectedPackageId={clientSecret.selectedPackage}
            onSelectPackage={handleSelectPackage}
            onBuy={handleBuy}
            isCreating={creating}
            t={t}
          />
        )}

        {isOnPaymentForm && selectedPack && clientSecret.clientSecret && (
          <div className="max-w-md mx-auto mt-8 space-y-4">
            <Elements
              stripe={getStripePromise()}
              options={{
                clientSecret: clientSecret.clientSecret,
                appearance: { labels: 'floating' },
              }}
            >
              <CheckoutForm
                amountLabel={`$${(selectedPack.price / 100).toFixed(2)} USD`}
                onSuccess={handlePaymentSuccess}
                onError={handlePaymentError}
              />
            </Elements>
          </div>
        )}
      </main>
    </div>
  );
};

export default PaymentPage;
