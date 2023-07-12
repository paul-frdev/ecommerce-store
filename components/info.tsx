'use client'

import { Product } from '@/types'
import React, { FC } from 'react'
import { Currency } from './ui/currency'
import { Button } from './ui/button'
import { ShoppingCart } from 'lucide-react'


interface InfoProps {
  data: Product
}
export const Info: FC<InfoProps> = ({ data }) => {
  return (
    <div>
      <h2 className='text-3xl font-bold text-gray-900'>{data.name}</h2>
      <div className='mt-3 flex flex-col items-start justify-between'>
        <div className='text-2xl text-gray-900'>
          <Currency value={data.price} />
        </div>
        <hr className='my-4' />
        <div className='flex flex-col gap-y-6'>
          <div className='flex items-stretch gap-4'>
            <h3 className='font-semibold text-black'>Size</h3>
            <div>{data.size.value}</div>
          </div>
          <div className='flex items-stretch gap-4'>
            <h3 className='font-semibold text-black'>Color</h3>
            <div className='h-6 w-6 rounded-full border border-gray-600'
              style={{ backgroundColor: data.color.value }}
            />
          </div>
        </div>
        <div className='mt-10 flex items-center justify-center gap-x-3'>
          <Button className='flex items-center justify-between gap-x-2'>
            Add to Card
            <ShoppingCart size={20}/>
          </Button>
        </div>
      </div>
    </div>
  )
}
