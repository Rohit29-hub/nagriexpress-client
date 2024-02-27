'use client'

import React from 'react'
import { register } from '@/src/actions/auth'
import { useFormState, useFormStatus } from 'react-dom'
import toast from 'react-hot-toast'

const initialState = {
    message: "",
    status: null
};

const ButtonRegister = () => {
    const { pending } = useFormStatus();
    return <button className='py-2 mt-4 px-3 bg-blue-600 text-white rounded' type='submit' aria-disabled={pending}>
        {pending ? 'Loading....' : 'Submit'}
    </button>
}

const UserData = () => {
    const [state, formAction] = useFormState(register, initialState);
    if (state.message != '') {
        if (state.status == 200) {
            toast.success(state.message);
        } else {
            toast.error(state.message);
        }
    }
    return (
        <>
            <form action={formAction}>
                <input type="text" name='firstName' placeholder='firstName here..' />
                <input type="text" name='lastName' placeholder='lastName here..' />
                <input type="email" name='email' placeholder='email here..' />
                <input type="password" name='password' placeholder='password here..' />
                <ButtonRegister />
            </form>
        </>
    )
}

export default UserData