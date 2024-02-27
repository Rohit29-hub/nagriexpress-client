"use client"
import { signIn } from '@/src/actions/auth'
import toast from 'react-hot-toast'
import React from 'react'
import { useFormState } from 'react-dom'
import Link from 'next/link'

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
            <input type="email" name='email' placeholder='enter your email' />
            <input type="password" name="password" id="password" placeholder='enter your password' />
            <button type='submit' className='py-2 mt-4 px-3 bg-blue-600 text-white rounded'>Login</button>
        </form>
        <Link href={'/register'} className='underline mt-3'>Don't have an account</Link>
    </div>
  )
}

export default LoginPage