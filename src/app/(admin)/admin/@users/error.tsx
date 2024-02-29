"use client"

import React from 'react'

export default function Error({
    error,
    reset
}: {
    error: Error | any,
    reset: () => void
}){
  return (
    <div>
        <p>{error.message}</p>
        <button onClick={reset} className='py-2 px-3 bg-violet-500 text-white rounded-md'>Reset</button>
    </div>
  )
}
