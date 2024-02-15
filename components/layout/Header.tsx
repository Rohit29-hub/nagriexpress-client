import {ShoppingCart} from 'lucide-react'
import Image from 'next/image'
import SearchBar from '../ui/SearchBar'
import React from 'react'
import Signup from '../ui/Signup'

const Header = () => {
  return (
    <div className='w-full py-2 sm:py-0 md:h-14 h-auto bg-slate-100'>
      <div className='flex sm:flex-row flex-col sm:gap-y-0 gap-y-2 items-center w-full h-full gap-x-4 px-3'>
        {/* main logo of website */}
        <div className='w-auto h-full flex items-center'>
          <Image
            src={'/main-logo.svg'}
            width={180}
            height={180}
            alt='NagriExpress'
          />
        </div>
        <div className='w-full h-full flex items-center gap-x-4'>
          {/* search bar field */}
          <div className='w-auto h-full flex-1 py-1.5'>
            <SearchBar/>
          </div>
          {/* user login and dashboard */}
          <Signup/>
          {/* user cart and orders */}
          <div className='w-auto h-full'>
            <div className='w-full h-full flex items-center gap-x-2'>
              <div className='lg:block hidden'>
                <h1 className='text-sm font-medium'>Orders</h1>
                <h1 className='text-sm font-medium'>&return</h1>
              </div>
              <ShoppingCart/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header