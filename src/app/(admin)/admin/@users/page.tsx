import AdminUserTable from '@/src/components/admin/AdminUserTable';
import React from 'react'

const AdminUserPage = async () => {
  const fetchUserData = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL!}/api/v3/user/`, {
    next: {
      tags: ['user']
    }
  });
  const {data} = await fetchUserData.json();
  return (
    <div>
      <AdminUserTable users={data}/>
    </div>
  )
}

export default AdminUserPage