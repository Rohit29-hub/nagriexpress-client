import { NextRequest, NextResponse } from "next/server";
import adminModel from "@/src/models/admin.model";
export async function PUT(req: NextRequest, { params }: { params: { adminId: string } }){
    const adminId = params.adminId;
    const data = await req.json();
    try{
        const admin = await adminModel.findOneAndUpdate(
            {_id: id},
            {$set: data}
        )

        if (!admin) {
            throw new Error("Admin not found !");
        }

        return NextResponse.json({
            message: "Update Admin successfully.",
            data: {
                adminId
            },
            status: 200
        })

    }catch(err: any){
        return NextResponse.json({
            message: err.message,
            status: 501,
        })
    }
}

export async function DELETE(req: NextRequest,{ params }: { params: { adminId: string } }){
    const adminId = params.adminId
    try{
        
        const admin = await adminModel.findByIdAndDelete({
            _id: adminId
        })
        
        if(!admin){
            throw new Error("Admin not found !")
        }

        return NextResponse.json({
            message: "Delete admin successfully",
            data: null,
            status: 200
        })
        
    }catch(err: any){
        return NextResponse.json({
            message: err.message,
            success: false,
            status: 501
        })
    }
}