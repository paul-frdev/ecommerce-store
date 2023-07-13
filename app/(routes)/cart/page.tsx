'use client';

import { CartItem } from '@/components/cartItem';
import { Summary } from '@/components/summary';
import { Container } from '@/components/ui/container';
import useCart from '@/hooks/useCart';

const CartPage = () => {
  const cart = useCart();

  return (
    <div className='bg-white'>
      <Container>
        <div className='px-4 py-16 sm:px-6 lg:px-8'>
          <h4 className='text-3xl font-bold text-black'>Shopping Cart</h4>
          <div className='mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12'>
            <div className='lg:col-span-7'>
              {!cart.items.length && (
                <p className='text-neutral-500'>No items added to cart</p>
              )}
              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
