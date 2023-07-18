'use client'

import { Category } from '@/types'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { FC } from 'react'


interface DepartmentItemProps {
  data: Category[]
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
    <div className='department-item w-[100px] h-[150px m-auto pt-8'>
      {routes.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="m-auto flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
        >
          <div className="m-auto flex flex-col justify-center items-center gap-y-4 p-4">
            <Image width={100} height={150} alt='Iamge' className='object-cover object-center' src={item.imageUrl} />
            <p className="text-sm font-medium text-gray-900">
              {item.label}
            </p>
          </div>
        </a>
      ))}
    </div>
  )
}
