import { connectToMongoDB } from '@/src/config/database'
import HeroSlider from '../components/utils/HeroSlider';
export default async function Home() {
  await connectToMongoDB();
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL!}/api/v1/products/`,{
    next: { 
      tags: ['products']
    }
  })
  const {data} = await response.json();
  
  return (
    <>
      <HeroSlider/>
    </>
  );
}
