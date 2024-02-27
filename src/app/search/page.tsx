import React from 'react'

interface Props{
    searchParams: {
        q: string
    }
}
const SearchPage = async ({searchParams: {q}}:Props) => {

  return (
    <div className=''>
        {
          decodeURIComponent(q)
        }
    </div>
  )
}

export default SearchPage