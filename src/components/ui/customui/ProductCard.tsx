"use client"

import Image from 'next/image'
import React from 'react'

interface Props {
  images: string[],
  price: number,
  description: string,
  title: string,
  discount: number
}

const ProductCard = ({ data }: {
  data: Props
}) => {
  return (
    <div className='w-full h-full border border-gray-400 rounded-lg p-2  dark:border-white hover:shadow-md transition-all duration-150 ease-linear'>
      <Image src={data.images[0]} alt={data.title} width={300} height={300} priority={true} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <div className='flex items-center justify-between'>
        <span>${data.price}</span>
        <span>{data.discount}%</span>
      </div>
    </div>
  )
}

export default ProductCard