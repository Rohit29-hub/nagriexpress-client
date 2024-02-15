import React from 'react'
interface Props{
    searchParams: {
        q: string
    }
}
const SearchPage = ({searchParams: {q}}:Props) => {
  return (
    <div className=''>
        <h1>Hello from Search Page</h1>
        <p>Search Query: {decodeURIComponent(q)}</p>
    </div>
  )
}

export default SearchPage