'use client';
import { calculateDiscountedPrice, cn, formattedPrice } from '@/lib/utils';
import React, { FC, useEffect, useState } from 'react';

interface CurrencyProps {
  price: string;
  discount?: string;
  isDiscount?: boolean;
}

export const Currency: FC<CurrencyProps> = ({
  price,
  discount,
  isDiscount,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [productWithDiscount, setProductWithDiscount] = useState<number | null>(
    null
  );

  const priceToNumber = parseFloat(price);
  const discountToNumber = parseFloat(discount as string);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isNaN(priceToNumber) || isNaN(discountToNumber)) {
      setProductWithDiscount(null);
      return;
    }
    const calculatedDiscountedPrice = calculateDiscountedPrice(
      priceToNumber,
      discountToNumber
    );
    setProductWithDiscount(calculatedDiscountedPrice);
  }, [discountToNumber, priceToNumber]);

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
        {formattedPrice.format(priceToNumber)}
      </p>
      {isDiscount && productWithDiscount !== null && (
        <p className='text-3xl font-bold text-gray-600 pb-2'>
          {formattedPrice.format(productWithDiscount)}
        </p>
      )}
    </div>
  );
};
