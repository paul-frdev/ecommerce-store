import getProducts from '@/actions/getProducts';
import getSliders from '@/actions/getSliders';

import { MainSliders } from '@/components/mainSliders';
import { ProductList } from '@/components/productList';
import { CarouselType } from '@/components/ui/carousel';
import { Container } from '@/components/ui/container';

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const productsSales = await getProducts({ isDiscount: true });

  console.log(productsSales);

  const sliders = await getSliders('249f4f8f-de18-4975-8a74-a72d2a4d6263');

  const filteredProductsSales = productsSales.filter(
    (product) => product.isDiscount === true
  );
  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <MainSliders data={sliders} />
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList title='Featured products' items={products} />
        </div>
        <h2 className='text-neutral-700 text-3xl font-semibold'>
          Sales and Discounts
        </h2>
        <CarouselType salesProducts={filteredProductsSales} />
      </div>
    </Container>
  );
};

export default HomePage;
