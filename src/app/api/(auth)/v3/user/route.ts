import userModel from "@/src/models/user.model";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req:NextRequest) => {
    try{
        const users = await userModel.find({});
        return NextResponse.json({
            message: 'User fetched successfully',
            data: users,
            status: 200
        })
    }catch(err: any){
        return NextResponse.json({
            message: err.message,
            status: 501
        })
    }
}