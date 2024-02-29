import AdminForm from '@/src/components/admin/AdminLoginForm'
import React from 'react'
const AdminLoginForm = () => {
  return (
    <div>
      <AdminForm secretKey={process.env.ADMIN_SECRET_KEY}/>
    </div>
  )
}

export default AdminLoginForm