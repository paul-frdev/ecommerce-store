'use client'
import { formattedPrice } from '@/lib/utils';
import React, { FC, useEffect, useState } from 'react'

interface CurrencyProps {
  value: string;
}
export const Currency: FC<CurrencyProps> = ({ value }) => {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className='font-semibold'>
      {formattedPrice.format(+value)}
    </div>
  )
}
