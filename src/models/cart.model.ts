import { Schema,model } from "mongoose";

const cartSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    productQuantity: {
        type: Number,
        required: true
    },
    productCategory: {
        type: String,
        required: true
    },
    shippingAddress: {
        type: Schema.Types.ObjectId,
        ref: 'Address'
    }
},{
    timestamps: true
})

export default model('Cart',cartSchema);