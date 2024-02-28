import { ShoppingCart } from 'lucide-react'
import SearchBar from '../ui/customui/SearchBar'
import React from 'react'
import Signup from '../ui/customui/Signup'
import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='w-full sticky top-0 backdrop-blur-[10px]  z-10 py-2 sm:py-0 md:h-14 h-auto dark:bg-[#ffffff98] bg-[#ffffff98]'>
      <div className='flex sm:flex-row flex-col sm:gap-y-0 gap-y-2 items-center w-full h-full gap-x-4 px-3'>
        <Link href={'/'} className='w-auto h-full flex items-center'>
          <Image
            className={`dark:invert`}
            src={'/main-logo.svg'}
            width={180}
            height={180}
            alt='NagriExpress'
          />
        </Link>
        <div className='w-full h-full flex items-center gap-x-4'>
          <div className='w-auto h-full flex-1 py-1.5'>
            <SearchBar />
          </div>
          <Signup />
          {/* user cart and orders */}
          <div className='w-auto h-full'>
            <div className='w-full h-full flex items-center gap-x-2'>
              <div className='lg:block hidden'>
                <h1 className='text-sm font-medium'>Orders</h1>
                <h1 className='text-sm font-medium'>&return</h1>
              </div>
              <ShoppingCart />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header