'use client';

import { Category } from '@/types';
import React, { FC } from 'react';
import { Button } from './ui/button';
import { DepartmentsPopover } from './DepartmentsPopover';
import { DepartmentItem } from './departmentItem';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface mainNavProps {
  data: Category[];
}

export const MainNav: FC<mainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = [
    {
      name: 'Sales',
      href: '/sales',
      active: pathname === '/sales',
    },
    {
      name: 'Contact us',
      href: '/contact-us',
      active: pathname === '/contact-us',
    },
    {
      name: 'About us',
      href: '/about-us',
      active: pathname === '/about-us',
    },
  ];
  return (
    <div className='flex justify-between items-center w-full px-8'>
      <DepartmentsPopover content={<DepartmentItem data={data} />}>
        <Button className='bg-transparent text-neutral-900 text-lg font-semibold uppercase hover:text-neutral-600 transition'>
          Departments
        </Button>
      </DepartmentsPopover>
      <nav>
        <ul className='flex justify-between items-center'>
          {routes.map((route) => (
            <li
              key={route.href}
              className='text-neutral-800 font-normal text-lg mr-8 hover:text-neutral-500 transition'
            >
              <Link href={route.href}>{route.name.toUpperCase()}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
