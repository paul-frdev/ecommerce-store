import getBillboard from '@/actions/getBillboard';
import getProducts from '@/actions/getProducts';
import { Billboard } from '@/components/billboard';
import { ProductList } from '@/components/productList';
import { Container } from '@/components/ui/container';

const HomePage = async () => {

  const products = await getProducts({ isFeatured: true })

  const billboard = await getBillboard('f2734475-3ab3-47b3-8c98-8fc777914e20');

  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard} />
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList title='Featured products' items={products} />
        </div>
      </div>
    </Container>
  )
}

export default HomePage;