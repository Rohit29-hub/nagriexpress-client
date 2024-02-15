"use client"
import React from 'react'
import { Search } from 'lucide-react'
import {useRouter} from 'next/navigation'
const SearchBar = () => {
    const router = useRouter();
    const formAction = (e: FormData) => {
        const search = e.get('search')?.toString();
        router.push(`/search?q=${search}`,{scroll: true})
    }
    return (
        <form action={formAction} className='flex w-auto items-center relative overflow-hidden rounded-full h-full'>
            <input
                type='text'
                name='search'
                placeholder='Search NagriExpress'
                className='w-full h-10 md:h-full px-4 text-black bg-white  focus:outline-none'
            />
            <button  type='submit' className='absolute right-0  px-3 h-full flex items-center justify-center'>
                <Search color='black' />
            </button>
        </form>
    )
}

export default SearchBar    