import React from 'react'

const AdminDashboardLayout = ({children,products,users}: {
    children: React.ReactNode
    products: React.ReactNode
    users: React.ReactNode
}) => {
  return (
    <div>
        {children}
        {products}
        {users}
    </div>
  )
}

export default AdminDashboardLayout