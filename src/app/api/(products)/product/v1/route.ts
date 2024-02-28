import { NextRequest,NextResponse} from 'next/server'
import productModel from '@/src/models/product.model'

export async function GET(req: NextRequest, res: NextResponse) {
    try{
        const products = await productModel.find({}) || [];
        if(products.length != 0){
            return NextResponse.json({
                message: 'Data fetch successfully.',
                data: products,
                status: 200
            })
        }

        return NextResponse.json({
            message: 'No data found.',
            data: [],
            status: 404
        })
        
    }catch(err: any){
        return NextResponse.json({
            message: err.message,
            data: [],
            status: 401
        })
    }
}

export async function POST(req: NextRequest, res: NextResponse){
    const data = await req.json();
    try{
        const product = await new productModel({
            title: data.title,
            category: data.category,
            brand: data.brand,
            description: data.description,
            color: data.color,
            size: data.size,
            price: data.price,
            discount: data.discount,
            images: data.images,
            stock: data.stock,
            ratings: data.ratings,
            reviews: data.reviews,
            tags: data.tags,
            shipping_info: data.shipping_info,
            model_info: data.model_info
        })

        await product.save();

        return NextResponse.json({
            message: 'Product add successfully',
            data: [],
            status: 200,
        })

    }catch(err: any){
        return NextResponse.json({
            message: err.message,
            status: 401
        })
    }
}