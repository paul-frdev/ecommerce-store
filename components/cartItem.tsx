'use client';

import { Product } from '@/types';
import Image from 'next/image';
import React, { FC } from 'react';
import { IconButton } from './ui/iconButton';
import { X } from 'lucide-react';
import useCart from '@/hooks/useCart';
import { Currency } from './ui/currency';

interface CartItemProps {
  item: Product;
}
export const CartItem: FC<CartItemProps> = ({ item }) => {
  const cart = useCart();
  return (
    <li className='flex py-6 border-b'>
      <div className='relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48'>
        <Image
          fill
          alt='image'
          src={item.images[0].url}
          className='object-cover object-center'
        />
      </div>
      <div className='relative flex flex-1 flex-col ml-4 justify-between sm:ml-6'>
        <div className='absolute z-10 right-0 top-0'>
          <IconButton
            icon={<X size={15} />}
            onClick={() => cart.removeItem(item.id)}
          />
        </div>
        <div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0'>
          <div className='flex justify-between'>
            <p className='text-lg font-semibold text-black'>{item.name}</p>
          </div>

          <div className='mt-1 flex text-sm'>
            <p className='text-gray-500'>{item.color.name}</p>
            <p className='text-gray-500 ml-4 border-1 border-gray-200 pl-4'>
              {item.size.name}
            </p>
          </div>
          <Currency price={item.price} />
        </div>
      </div>
    </li>
  );
};
