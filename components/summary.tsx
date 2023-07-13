'use client';

import React, { useEffect } from 'react';
import { Currency } from './ui/currency';
import { Button } from './ui/button';
import useCart from '@/hooks/useCart';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get('Success')) {
      toast.success('Payment competed');
      removeAll();
    }

    if (searchParams.get('Canceled')) {
      toast.error('Something went wrong');
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((acc, cur) => {
    return (acc += Number(cur.price));
  }, 0);

  const onCheckOut = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
      }
    );

    window.location = response.data.url;
  };

  return (
    <div className='mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'>
      <h5 className='text-lg font-medium text-gray-800'>Order Summary</h5>
      <div className='mt-6 space-y-4'>
        <div className='flex items-center justify-between border-t border-gray-200 pt-4'>
          <p className='text-base font-medium text-gray-900'>Order total</p>
          <Currency value={totalPrice.toString()} />
        </div>
      </div>
      <Button onClick={onCheckOut} className='w-full mt-6'>
        Check out
      </Button>
    </div>
  );
};
