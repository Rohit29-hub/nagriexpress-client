import React from 'react'
import { useSession } from '@/src/actions/auth'
import UserData from '@/src/components/ui/customui/UserData';
import Link from 'next/link';



const Register = () => {
  const user = useSession();
  return (
    <div>
      <UserData />
      <Link href={'/account/login'} className='underline mt-3'>Already have an account</Link>
    </div>
  )
}

export default Register