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
    <div className='department-item'>
      departmentItem
      {routes.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
        >
          <div className="ml-4">
            <Image alt='Iamge' fill className='object-cover object-center' src={item.imageUrl} />
            <p className="text-sm font-medium text-gray-900">
              {item.label}
            </p>
          </div>
        </a>
      ))}
    </div>
  )
}
