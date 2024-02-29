'use server'
import { cookies } from "next/headers";
import { decrypt, encrypt } from "./auth";

export const signIn = async (secretKey:string,prevState:any,e: FormData) => {
    const cookieStore = cookies();

    const adminData = {
        email: e.get('email')?.toString(),
        password: e.get('password')?.toString(),
    }

    if (adminData.email == '' || adminData.password == '') return { messge: 'All fields is required !', status: 301 };
    if (secretKey != process.env.ADMIN_SECRET_KEY) return { message: 'Fobidden request', status: 403 }

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/v2/admin/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(adminData)
    })

    if (!response.ok) throw new Error("Failed to login")

    const { message, data, status } = await response.json();

    if (status == 200) {
        const encrypt_string = encrypt(data);
        cookieStore.set('session', encrypt_string, {
            httpOnly: true,
            path: '/',
            secure: process.env.NODE_ENV == 'production',
            maxAge: 60 * 60 * 1
        })
    }

    return {
        message: message,
        status: status
    }
}

export const signOut = async () => {
    const cookieStore = cookies();
    cookieStore.delete('session');
    
    return {
        message: 'Successfully logout',
        status: 200
    }
}