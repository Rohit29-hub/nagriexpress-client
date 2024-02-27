import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/src/components/ui/carousel'
import Image from 'next/image'
import data from '@/src/data/banner.json'
const HeroSlider = () => {
    return (
        <div className='flex items-center justify-center w-full h-auto p-2'>
            <Carousel opts={{
                loop: true,
            }} orientation="horizontal" className='w-full mb-10 lg:mb-0 lg:w-full flex items-center justify-center'>
                <CarouselContent className='w-full h-full' >
                    {
                        data.map((item) => (
                            <CarouselItem key={item.id} className='w-full h-auto'>
                                <div className='p-0'>
                                    <div className='flex h-auto md:h-auto items-center justify-center relative w-full lg:h-[550px]'>
                                        <Image src={item.image} width={1500} height={300} alt={`${item.id}`} priority={true} className=' dark:opacity-55'/>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))
                    }

                </CarouselContent>
                <CarouselPrevious className='border-none outline-none hover:bg-white dark:hover:bg-black'/>
                <CarouselNext className='border-none outline-none hover:bg-white dark:hover:bg-black'/>
            </Carousel >
        </div>
    )
}

export default HeroSlider