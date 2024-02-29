import React from 'react'

interface Props{
    params: {
      adminName: string
    }
}
const AdminPage = ({params: {adminName}}: Props) => {
  return (
    <div>
        Admin Page {decodeURIComponent(adminName)}
    </div>
  )
}

export default AdminPage