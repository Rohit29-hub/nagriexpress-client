import React from 'react'
import AdminProductTable from '@/src/components/admin/AdminProductTable';
const AdminProductPage = async () => {
  const fetchProductData = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL!}/api/product/v1/`, {
    next: {
      tags: ['products']
    }
  });

  const {data} = await fetchProductData.json();

  return (
    <div className='w-full h-full'>
      <AdminProductTable products={data}/>
    </div>
  )
}

export default AdminProductPage