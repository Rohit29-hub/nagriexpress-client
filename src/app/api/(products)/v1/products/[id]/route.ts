import { NextRequest, NextResponse } from "next/server";
import productModel from "@/src/models/product.model";

export async function PUT(req: NextRequest, { params }: { params: { id: string } }){
    const id = params.id
    const data = await req.json();
    
    try{
        const product = await productModel.findOneAndUpdate(
            {_id: id},
            {$set: data}
        )

        if (!product) {
            throw new Error("Product not found !");
        }

        return NextResponse.json({
            message: "update product successfully.",
            data: {
                id
            },
            status: 200
        })
        
    }catch(err: any){
        return NextResponse.json({
            message: err.message,
            status: 401
        })
    }
}

export async function DELETE(req:NextRequest,{ params }: { params: { id: string } }){
    const id = params.id
    try{
        const product = await productModel.findByIdAndDelete({
            _id: id
        })

        if(!product) throw new Error("Product not find");

        return NextResponse.json({
            message: 'Product Delete Successfully',
            status: 200
        })

    }catch(err: any){
        return NextResponse.json({
            message: err.message,
            status: 401, 
        })
    }
}