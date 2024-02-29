import React from 'react'
import UserData from '@/src/components/ui/customui/UserData';
import Link from 'next/link';


const Register = () => {
  return (
    <div>
      <UserData />
      <Link href={'/account/login'} className='underline mt-3'>Already have an account</Link>
      <Link href={'/account/admin'} className='underline mt-3'>Are you member</Link>
    </div>
  )
}

export default Register