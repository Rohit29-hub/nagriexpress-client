import { NextRequest, NextResponse } from "next/server";
import adminModel from "@/src/models/admin.model";


export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const admins = await adminModel.find({})
        if (admins.length != 0) {
            return NextResponse.json({
                message: 'Data fetch successfully.',
                data: admins,
                status: 200
            })
        }

        return NextResponse.json({
            message: 'No admins found',
            data: [],
            status: 200
        })

    } catch (err: any) {
        return NextResponse.json({
            message: err.message,
            data: [],
            status: 401
        })
    }
}

export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.json();
    console.log(data);
    try {
        const isPersent = await adminModel.findOne({
            email: data.email
        })

        if (isPersent) {
            throw new Error("Admin already exits")
        }

        const newAdmin = await new adminModel({
            name: data.name,
            email: data.email,
            password: data.password,
            role: data.role,
        })

        await newAdmin.save();

        return NextResponse.json({
            message: 'Admin add successfully',
            data: newAdmin._id,
            status: 200
        })
    } catch (err: any) {
        return NextResponse.json({
            message: err.message,
            success: false
        })
    }
}