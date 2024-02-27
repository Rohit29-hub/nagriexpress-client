// src/config/database.ts

import mongoose from 'mongoose';

let isConnected = false;

export async function connectToMongoDB() {
    if (isConnected) {
        console.log('Already connected to MongoDB');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI!);
        isConnected = true;
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

export default connectToMongoDB;
