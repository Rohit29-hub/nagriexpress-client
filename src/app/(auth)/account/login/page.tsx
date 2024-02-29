"use client"
import { signIn } from '@/src/actions/auth'
import toast from 'react-hot-toast'
import React from 'react'
import { useFormState } from 'react-dom'
import Link from 'next/link'
import { Input } from '@/src/components/ui/input'

const initialState = {
    message: '',
    status: null
}
const LoginPage = () => {
    const [state, formAction] = useFormState(signIn, initialState);
    
    if (state.message != '') {
        if (state.status == 200) {
            toast.success(state.message);
        } else {
            toast.error(state.message);
        }
    }
  return (
    <div>
        <form action={formAction}>
            <Input type="email" name='email' placeholder='enter your email' />
            <Input type="password" name="password" id="password" placeholder='enter your password' />
            <button type='submit' className='py-2 mt-4 px-3 bg-blue-600 text-white rounded'>Login</button>
        </form>
        <Link href={'/account/register'} className='underline mt-3'>Don&apos;t have an account</Link>
        <Link href={'/account/admin'} className='underline mt-3'>Are you member</Link>
    </div>
  )
}

export default LoginPage