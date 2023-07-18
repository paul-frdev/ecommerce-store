import React from 'react';
import Link from 'next/link';

import getCategories from '@/actions/getCategories';

import { Container } from './ui/container';
import { NavbarActions } from './navbarActions';
import { MainNav } from './mainNav';

const NavBar = async () => {
  const categories = await getCategories();

  return (
    <div className='border-b'>
      <Container>
        <div className='relative px-4 sm:px-6 lg:px-8 flex h-16 items-center'>
          <Link href='/' className='ml-4 flex lg:ml-0 gap-x-2'>
            <p className='font-bold text-xl uppercase'>Store</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
