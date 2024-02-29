'use server'
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import jwt from 'jsonwebtoken'

export const encrypt = (input: object): string => {
    const encrypt_string = jwt.sign(input, process.env.JWT_SECRET)
    return encrypt_string;
}

export const decrypt = (encrypt_session: string): any => {
    try {
        const decrypt_data = jwt.verify(encrypt_session, process.env.JWT_SECRET)
        return decrypt_data;
    } catch (err: any) {
        return {
            message: err.message,
            status: 501
        }
    }

}

const register = async (prevState: any, formData: FormData) => {
    const cookieStore = cookies();

    const user = {
        firstName: formData.get('firstName')?.toString(),
        lastName: formData.get('lastName')?.toString(),
        email: formData.get('email')?.toString(),
        password: formData.get('password')?.toString()
    }

    try {
        for (let field in user) {
            if (user[field] == '') {
                throw new Error(`Please add this field. Because ${field} is empty.`)
            }
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v3/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        if (!response.ok) throw new Error("Failed to register user")

        const { data, message, status } = await response.json();

        if(status == 200){
            console.log(data);
            const encryption_session = encrypt(data);
            // make a session
            cookieStore.set('session', encryption_session, {
                httpOnly: true,
                path: '/',
                secure: process.env.NODE_ENV == 'production',
                maxAge: 60 * 60 * 24 * 1
            })
        }
        
        return {
            message: message,
            status: status
        }

    } catch (err: any) {
        return {
            message: err.message,
            status: 401
        }
    }

}

const signIn = async (prevState: any, formData: FormData) => {
    const cookieStore = cookies();
    const user = {
        email: formData.get('email')?.toString(),
        password: formData.get('password')?.toString()
    }

    if (user.email == '' || user.password == '') {
        return {
            message: 'Fill all the fields',
            status: 401,
        }
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v3/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })

    if (!response.ok) throw new Error("Failed to Login.")

    const { data, message, status } = await response.json();

    if(status == 200){
        const encrypt_data = encrypt(data);
        cookieStore.set('session', encrypt_data, {
            httpOnly: true,
            secure: process.env.NODE_ENV == 'production',
            maxAge: 60 * 60 * 24 * 1,
            path: '/',
        })
    }

    return {
        message: message,
        status: status
    }
}


const signOut = async () => {
    const cookieStore = cookies();
    console.log('SignOut the user')
    cookieStore.delete('session');
    redirect('/')
}

const getSession = () => {
    const cookieStore = cookies();
    const encryptedSessionData = cookieStore.get('session')?.value;
    if(!encryptedSessionData) return null;
    const data = decrypt(encryptedSessionData);
    return data;
}

export {register,signIn,signOut,getSession}