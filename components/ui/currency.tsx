'use client';
import { cn, formattedPrice } from '@/lib/utils';
import { Product } from '@/types';
import React, { FC, useEffect, useState } from 'react';

interface CurrencyProps {
  data?: Product;
  isDiscount?: boolean;
}
export const Currency: FC<CurrencyProps> = ({ data, isDiscount }) => {
  const [isMounted, setIsMounted] = useState(false);

  const discountAmount = (+data!.price - +data!.priceDiscount) / 100;
  const productWithDiscount = +data!.price - discountAmount;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className='flex justify-between items-center'>
      <p
        className={cn(
          `text-lg font-semibold text-black mr-2`,
          isDiscount && 'line-through'
        )}
      >
        {formattedPrice.format(+data!.price)}
      </p>
      {isDiscount && (
        <p className='text-3xl font-bold text-gray-600 pb-2'>
          {formattedPrice.format(+productWithDiscount)}
        </p>
      )}
    </div>
  );
};
