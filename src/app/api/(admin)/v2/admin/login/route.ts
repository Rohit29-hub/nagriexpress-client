import adminModel from "@/src/models/admin.model";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const body = await req.json();
    try {
        const admin = await adminModel.findOne({
            email: body.email
        }) as any;

        if(!admin) return NextResponse.json({
            message: 'Admin not found',
            status: 301
        })

        const checkPassword = await admin.comparePassword(body.password);

        if(!checkPassword){
            return NextResponse.json({
                message: 'Login Failed, Invalid Credentials',
                status: 301
            })
        }

        return NextResponse.json({
            message: 'Login Successfully',
            data: {
                name: admin.name,
                email: admin.email,
                role: admin.role
            },
            status: 200
        })
    } catch (error: any) {
        return NextResponse.json({
            message: error.message,
            status: 500
        })
    }
}