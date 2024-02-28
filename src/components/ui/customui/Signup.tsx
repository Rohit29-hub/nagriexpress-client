"use client"
import React from 'react'
import { CircleUserRound, Heart, Package, User } from 'lucide-react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/src/components/ui/navigation-menu"
import Link from 'next/link'
const Signup = () => {
    return (
        <NavigationMenu className='w-auto h-full'>
            <NavigationMenuList className='w-full h-full'>
                <NavigationMenuItem className="w-full h-full " >
                    <NavigationMenuTrigger className='w-full h-full '>
                        <div className='w-full h-full flex items-center gap-x-2'>
                            <User />
                            <div className='lg:block hidden text-start'>
                                <h1 className='text-sm font-medium'>Sign in</h1>
                                <h1 className='text-sm font-medium'>Account & List</h1>
                            </div>
                        </div>
                    </NavigationMenuTrigger>
                        <NavigationMenuContent className=''>
                            <ul className="w-28 h-auto p-2 flex flex-col gap-y-2">
                                <Link href={'/profile/1234'}>
                                    <NavigationMenuLink className='flex items-center gap-x-3 '>
                                        <CircleUserRound strokeWidth={1}/>
                                        <p className='text-sm font-medium'>Profile</p>
                                    </NavigationMenuLink>
                                </Link>
                                <Link href={'/wishlist'}>
                                    <NavigationMenuLink href='/wishlist' className='flex items-center gap-x-3 '>
                                        <Heart strokeWidth={1}/>
                                        <p className='text-sm font-medium'>WishList</p>
                                    </NavigationMenuLink>
                                </Link>
                                <Link href={'/orders'}>
                                    <NavigationMenuLink className='flex items-center gap-x-3'>
                                        <Package strokeWidth={1}/>
                                        <p className='text-sm font-medium'>Orders</p>
                                    </NavigationMenuLink>
                                </Link>
                            </ul>
                        </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default Signup