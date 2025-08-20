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

import { creditPackages, getPackById } from '@/constants/creditPackages';
import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/tailwind/cn';
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher from '@/components/layout/LanguageSwitcher';
import { getStripePromise } from '@/lib/stripe/public';
import { useRouter } from 'next/navigation';
import { useUser } from '@/hooks/users/useUser';

interface ErrorScreenProps {
  message: string;
  onRetry: () => void;
}

function ErrorScreen({ message, onRetry }: ErrorScreenProps) {
  const t = useTranslations();

  return (
    <div className="max-w-md mx-auto text-center space-y-4">
      <div className="text-6xl">😞</div>
      <h2 className="text-xl font-semibold">{t('paymentErrorTitle')}</h2>
      <p className="text-gray-600">{message}</p>
      <Button onClick={onRetry} className="w-full">
        {t('paymentErrorRetry')}
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
  const t = useTranslations();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    const { error: submitError } = await elements.submit();
    if (submitError) {
      setLoading(false);
      const errorMessage = submitError.message ?? t('paymentFormIncomplete');
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
      const errorMessage = error.message ?? t('paymentFailed');
      toast.error(errorMessage);
      onError?.(errorMessage);
      return;
    }

    toast.success(t('paymentSuccess'));
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
        {t('paymentPay')} {amountLabel}
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-7xl mx-auto mb-8">
        {creditPackages.map((pkg) => (
          <div
            key={pkg.id}
            className={cn(
              'relative p-6 border-2 rounded-xl flex flex-col items-center cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105',
              selectedPackageId === pkg.id
                ? 'border-primary bg-primary/5 shadow-lg'
                : 'border-gray-200 hover:border-primary/50',
              pkg.popular && 'border-orange-400 bg-orange-50',
              pkg.bestValue && 'border-green-400 bg-green-50',
            )}
            onClick={() => onSelectPackage(pkg.id)}
          >
            {pkg.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {t('paymentMostPopular')}
                </span>
              </div>
            )}
            {pkg.bestValue && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {t('paymentBestValue')}
                </span>
              </div>
            )}

            <div className="text-center mb-4">
              <div className="text-3xl font-bold text-black">
                ${(pkg.price / 100).toFixed(2)}
              </div>
              <div className="text-sm text-gray-500">
                ${(pkg.price / 100 / pkg.credits).toFixed(2)}{' '}
                {t('paymentPerCredit')}
              </div>
            </div>

            <div className="text-center mb-4">
              <div className="text-2xl font-bold">{pkg.credits}</div>
              <div className="text-sm text-gray-600">
                {t('paymentTotalCredits')}
              </div>
              {pkg.bonus > 0 && (
                <div className="mt-1">
                  <span className="text-sm text-gray-600">
                    {pkg.baseCredits} +
                  </span>
                  <span className="text-sm font-bold text-green-600 ml-1">
                    {pkg.bonus} {t('paymentBonus')}
                  </span>
                </div>
              )}
            </div>

            {pkg.savings > 0 && (
              <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold mb-2">
                {t('paymentSave')} {pkg.savings}%
              </div>
            )}

            <div className="text-center text-xs text-gray-500 mb-4">
              {pkg.id === 1 && t('paymentValueProp1')}
              {pkg.id === 2 && t('paymentValueProp2')}
              {pkg.id === 3 && t('paymentValueProp3')}
              {pkg.id === 4 && t('paymentValueProp4')}
              {pkg.id === 5 && t('paymentValueProp5')}
            </div>

            {selectedPackageId === pkg.id && (
              <div className="absolute top-4 right-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mb-6">
        <p className="text-sm text-gray-600">{t('paymentSocialProof')}</p>
      </div>

      <div className="flex justify-center">
        <Button
          className="w-full max-w-md py-4 text-lg font-semibold"
          disabled={isCreating || selectedPackageId === null}
          isLoading={isCreating}
          onClick={onBuy}
        >
          {selectedPackageId
            ? t('paymentGetCredits', {
                credits: creditPackages.find((p) => p.id === selectedPackageId)
                  ?.credits,
              })
            : t('paymentSelectPackage')}
        </Button>
      </div>
    </>
  );
}

const PaymentPage = () => {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const [clientSecret, setClientSecret] = useQueryStates({
    clientSecret: parseAsString,
    selectedPackage: parseAsInteger,
  });
  const { user } = useUser();
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
          userId: userId || user?.id,
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json?.error || t('paymentIntentFailed'));
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
                locale: locale as any,
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
