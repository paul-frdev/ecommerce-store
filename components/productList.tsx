import { Product } from '@/types';
import React, { FC } from 'react'
import { NoResults } from './ui/noResults';
import { ProductCard } from './ui/productCard';


interface ProductListProps {
  title: string;
  items: Product[]
}
export const ProductList: FC<ProductListProps> = ({ title, items }) => {
  return (
    <div className='space-y-4'>
      <h3 className='text-3xl font-bold'>{title}</h3>
      {!items.length && <NoResults />}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {items.map((item) => (
          <ProductCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}
