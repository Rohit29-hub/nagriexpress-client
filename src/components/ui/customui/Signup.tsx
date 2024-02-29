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
const Signup = ({ user }: {
    user: any
}) => {
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
                        <ul className="w-full h-auto p-2 flex flex-col gap-y-2">
                            <li className={`py-4 w-full h-full border-b border-solid ${user == null ? 'block' : 'hidden'}`}>
                                <h1 className='text-sm font-semibold pb-2'>Welcome,Guest</h1>
                                <Link href={'/account/login'} prefetch={true} className='p-2 rounded bg-blue-500 text-white '>Signup/Login</Link>
                            </li>
                            <Link href={`
                               ${(user != null) ? ((user.role == 'user') ? `/profile/${user.firstName + user.lastName}` : `/admin/${user && user.name}`) : '/profile/guest'}`
                            }>
                                <NavigationMenuLink className='flex items-center gap-x-3 '>
                                    <CircleUserRound strokeWidth={1} />
                                    <p className='text-sm font-medium'>Profile</p>
                                </NavigationMenuLink>
                            </Link>
                            <Link href={'/wishlist'}>
                                <NavigationMenuLink href='/wishlist' className='flex items-center gap-x-3 '>
                                    <Heart strokeWidth={1} />
                                    <p className='text-sm font-medium'>WishList</p>
                                </NavigationMenuLink>
                            </Link>
                            <Link href={'/orders'}>
                                <NavigationMenuLink className='flex items-center gap-x-3'>
                                    <Package strokeWidth={1} />
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