'use client';
import { MainSliders as MainSlidersType } from '@/types';
import React, { FC } from 'react';
import Carousel from 'react-multi-carousel';

interface MainSlidersProps {
  data: MainSlidersType;
}
export const MainSliders: FC<MainSlidersProps> = ({ data }) => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024
          },
          items: 1
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0
          },
          items: 1
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464
          },
          items: 1
        }
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {data && data.images.map((item) => (
        <div key={item.id} className='pt-2 rounded-xl overflow-hidden'>
          <div
            style={{ backgroundImage: `url(${item?.url})` }}
            className='rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover'
          >
            <div className='absolute top-20 left-20 h-full w-full'>
              <p className='font-bold text-white text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs whitespace-nowrap'>
                {data?.title}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};
