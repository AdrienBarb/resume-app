'use client';

import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/Carousel';
import { creditPackages } from '@/constants/creditPackages';
import { Button } from '@/components/ui/Button';
import useApi from '@/hooks/requests/useApi';
import { cn } from '@/utils/tailwind/cn';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/layout/LanguageSwitcher';
import LoginWrapper from '@/components/auth/LoginWrapper';

const PaymentPage = () => {
  const { usePost } = useApi();
  const [selectedPackageId, setSelectedPackageId] = useState<number | null>(
    null,
  );
  const t = useTranslations();

  const { mutate: buyCredit, isPending } = usePost('/api/payment', {
    onSuccess: (data: { forwardUrl: string }) => {
      window.location.href = data.forwardUrl;
    },
  });

  const handleBuy = () => {
    if (selectedPackageId !== null) {
      buyCredit({
        packageId: selectedPackageId,
        currentUrl: window.location.href,
      });
    }
  };

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

        <Carousel
          opts={{
            align: 'start',
          }}
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
                    {t('paymentModalPrice')}: {pkg.price / 100} €
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
            disabled={isPending || selectedPackageId === null}
            isLoading={isPending}
            onClick={handleBuy}
          >
            {t('buy')}
          </Button>
        </div>
      </main>
    </div>
  );
};

export default PaymentPage;
