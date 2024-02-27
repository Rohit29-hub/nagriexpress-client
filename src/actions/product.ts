"use server"
import { revalidateTag } from "next/cache";

export const  addProduct = async (formData: FormData) => {
    const productData: any = {};
    for (let [key, value] of formData.entries()) {
        productData[key] = value.toString().trim();
    }

    try{

        for(let field in productData){
            if(productData[field] == ''){
                throw new Error(`Please add this field. Because ${field} is empty.`)
            }
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productData),
        });

        if(!response.ok) throw new Error("Failed to add product")

        revalidateTag('products')
        return {
            message: 'Product add successfully',
            status: 200
        }
    }catch(err: any){
        return {
            message: 'Something is worng here.',
            status: 501
        }
    }
}