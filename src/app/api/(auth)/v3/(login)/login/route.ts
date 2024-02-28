import {NextRequest, NextResponse}  from 'next/server'
import userModel from '@/src/models/user.model'
export async function POST(req:NextRequest){
    const body = await req.json();
    try{
        const user = await userModel.findOne({
            email: body.email
        }) as any

        if(!user){
            return NextResponse.json({
                message: 'User not exists',
                status: 401
            })
        }

        const verifyPassword = await user.comparePassword(body.password);
        
        if(!verifyPassword){
            return NextResponse.json({
                message: 'Invalid Credentials',
                status: 401
            })
        }

        return NextResponse.json({
            message: 'Loggin Successfully',
            data: {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role
            },
            status: 200
        })
    }catch(err: any){
        return NextResponse.json({
            message: err.message,
            status: 501
        })
    }
}