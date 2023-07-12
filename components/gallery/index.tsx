'use client'

import { Image as ImageType } from '@/types'
import { Tab } from '@headlessui/react'
import { FC } from 'react'
import { GalleryTab } from './galleryTab'
import Image from 'next/image'

interface GalleryProps {
  images: ImageType[]
}
export const Gallery: FC<GalleryProps> = ({ images }) => {
  return (
    <Tab.Group as='div' className='flex flex-col-reverse'>
      <div className='mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none'>
        <Tab.List className='grid grid-cols-4 gap-6'>
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className='aspect-square w-full'>
        {images.map((image) => (
          <Tab.Panel key={image.id} >
            <div className='aspect-square relative h-full w-full sm:rounded-lg overflow-hidden'>
              <Image
                fill
                alt='Image'
                src={image.url}
                className='object-cover object-center'
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}