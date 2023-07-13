import getBillboard from '@/actions/getBillboard';
import getProducts from '@/actions/getProducts';

import { Billboard } from '@/components/billboard';
import { ProductList } from '@/components/productList';
import { Container } from '@/components/ui/container';

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });

  const billboard = await getBillboard('2a6b4e4e-e9d9-4807-864f-74921b37a6b3');

  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard} />
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList title='Featured products' items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
