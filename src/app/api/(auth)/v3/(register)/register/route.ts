import userModel from "@/src/models/user.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json();
    try{
        const isPersent = await userModel.findOne({
            email: body.email
        })

        if(isPersent){
            return NextResponse.json({
                message: "User already register to this email.",
                status: 301,
                data: {
                    id: isPersent._id,
                }
            })
        }
        
        const newUser = await new userModel({
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            password: body.password
        })

        await newUser.save();

        return NextResponse.json({
            message: 'User registered successfully',
            data: {
               firstName: newUser.firstName,
               lastName: newUser.lastName,
               email: newUser.email,
               role: newUser.role
            },
            status: 200
        })

    }catch(err: any){
        return NextResponse.json({
            message: err.message,
            success: false,
            status: 401
        })
    }
}