import { connectToMongoDB } from '@/src/config/database'
import HeroSlider from '../components/utils/HeroSlider';
import ProductCard from '../components/ui/customui/ProductCard';
export default async function Home() {
  await connectToMongoDB();
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL!}/api/product/v1/`,{
    next: {
      tags: ['products']
    }
  })
  
  const { data } = await response.json();
  
  return (
    <>
      <HeroSlider/>
      <div className='w-full h-full grid grid-cols-2 lg:grid-cols-4 lg:gap-4'>  
        {
          data.map((product: any) => {
            return (
              <div key={product._id} className='w-full col-span-1 h-full p-1'>
                  <ProductCard data={product}/>
              </div>
            )
          })
        }
      </div>
    </>
  );
}
