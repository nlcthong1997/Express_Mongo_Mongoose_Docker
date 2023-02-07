import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config({ path: '../.env' })

const connectDB = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await mongoose.connect(process.env.DATABASE_URI || '');
        console.log('Connected DB.');
        next();
    } catch (error) {
        throw new Error('Connect DB failed!');
    }
}

export = connectDB;