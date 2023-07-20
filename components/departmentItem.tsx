'use client';

import { Category } from '@/types';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { FC } from 'react';

interface DepartmentItemProps {
  data: Category[];
}
export const DepartmentItem: FC<DepartmentItemProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    imageUrl: route.imageUrl,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <div className='department-item grid grid-cols-3 grid-rows-2 items-center gap-4 max-w-[350px] w-full mt-auto mb-auto mr-auto'>
      {routes.map((item) => (
        <div key={item.href} className='w-[120px] h-[150px] m-auto'>
          <a
            href={item.href}
            className='m-auto flex items-center rounded-lg p-2 transition duration-150 ease-in-out'
          >
            <span className='m-auto flex flex-col justify-center items-center gap-y-2 p-3 border border-gray-100 rounded-md'>
              <Image
                width={100}
                height={150}
                alt='Iamge'
                className='object-cover object-center  p-1'
                src={item.imageUrl}
              />
              <span className='text-sm text-left font-medium text-gray-900'>
                {item.label.length > 10
                  ? item.label.slice(0, 10) + '...'
                  : item.label}
              </span>
            </span>
          </a>
        </div>
      ))}
    </div>
  );
};
