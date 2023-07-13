'use client';
import React, { FC, MouseEventHandler } from 'react';
import Image from 'next/image';

import { Product } from '@/types';
import { IconButton } from './iconButton';
import { Expand, ShoppingCart } from 'lucide-react';
import { Currency } from './currency';
import { useRouter } from 'next/navigation';
import usePreviewModal from '@/hooks/usePreviewModal';
import useCart from '@/hooks/useCart';

interface ProductCardProps {
  data: Product;
}
export const ProductCard: FC<ProductCardProps> = ({ data }) => {
  const previewModal = usePreviewModal();
  const cart = useCart();

  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };
  return (
    <div
      onClick={handleClick}
      className='bg-white cursor-pointer group rounded-xl border p-3 space-y-4 '
    >
      {/* images and actions */}
      <div className='aspect-square rounded-xl bg-gray-100 relative'>
        <Image
          alt='Image'
          src={data?.images?.[0]?.url}
          fill
          className='aspect-square object-cover rounded-md'
        />
        <div className='opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5'>
          <div className='flex gap-x-6 justify-center'>
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} />}
              className='text-gray-600'
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} />}
              className='text-gray-600'
            />
          </div>
        </div>
      </div>
      {/* description */}
      <div>
        <p className='font-semibold text-lg'>{data.name}</p>
        <p className='text-sm text-gray-500'>{data.category.name}</p>
      </div>
      {/* Price */}
      <div className='flex items-cente justify-between'>
        <Currency value={data.price} />
      </div>
    </div>
  );
};
