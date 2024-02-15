import { Search, ShoppingCart, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

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
            <div className='flex w-auto items-center relative overflow-hidden rounded-full h-full'>
              <input
                type='text'
                placeholder='Search NagriExpress'
                className='w-full h-10 md:h-full px-4 text-black bg-white  focus:outline-none'
              />
              <div className='absolute right-0  px-3 h-full flex items-center justify-center'>
                <Search color='black'/>
              </div>
            </div>
          </div>
          {/* user login and dashboard */}
          <div className='w-auto h-full'>
            <div className='w-full h-full flex items-center gap-x-2'>
              <User/>
              <div className='lg:block hidden'>
                <h1 className='text-sm font-medium'>Sign in</h1>
                <h1 className='text-sm font-medium'>Account & List</h1>
              </div>
            </div>
          </div>
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