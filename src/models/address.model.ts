import { Schema,model } from "mongoose"

const addressSchema = new Schema({
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
},{timestamps: true})


export default model('Address',addressSchema);