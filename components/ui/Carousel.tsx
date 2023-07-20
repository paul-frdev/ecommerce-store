'use client';

import React, { FC } from 'react';

import { Product } from '@/types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import { ProductCard } from './productCard';

interface CarouselProps {
  salesProducts: Product[];
  deviceType?: any;
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
export const CarouselType: FC<CarouselProps> = ({
  deviceType,
  salesProducts,
}) => {
  console.log('salesProducts', salesProducts);

  return (
    <Carousel
      swipeable={true}
      draggable={false}
      showDots={false}
      arrows={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={false}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition='all .5'
      transitionDuration={500}
      containerClass='carousel-container'
      removeArrowOnDeviceType={['tablet', 'mobile']}
      deviceType={deviceType}
      dotListClass='custom-dot-list-style'
      itemClass='carousel-item-padding-40-px'
    >
      {salesProducts.map((product) => (
        <ProductCard data={product} key={product.id} />
      ))}
    </Carousel>
  );
};
