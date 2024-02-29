'use client'

import React from 'react'
import { Input } from '../ui/input'
import { useFormState, useFormStatus } from 'react-dom'
import { signIn } from '@/src/actions/admin'
import toast from 'react-hot-toast'

const AdminFormButton = () => {
    const {pending} = useFormStatus();
    return (
        <button type='submit' aria-disabled={pending} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-500 hover:border-blue-700 rounded">
            {pending? 'Loading....' : 'Submit'}
        </button>
    )
}
const initialState = {
    message: '',
    status: null
}
const AdminForm = ({secretKey}: {
    secretKey: string
}) => {
    const myFormAnction = signIn.bind(null,secretKey);
    const [formState,formAction] = useFormState(myFormAnction,initialState);
    if(formState.message != ''){
        if(formState.status == 200){
            toast.success(formState.message);
        }else{
            toast.error(formState.message);
        }
    }
  return (
    <form className='w-96 h-full m-auto space-y-3 mt-4' action={formAction}>
        <Input name='email' placeholder='Enter a your email' type='email'/>
        <Input name='password' placeholder='Enter a your password' type='password'/>
        <input type="hidden" name="secretKey" value={19770977} />
        <AdminFormButton/>
    </form>
  )
}

export default AdminForm