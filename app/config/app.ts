import * as dotenv from 'dotenv';
dotenv.config({ path: '../.env' })

export const TIMEZONE: String = process.env.TIMEZONE || 'Asia/Ho_Chi_Minh';

export const PORT: Number = (process.env.PORT !== undefined) ? parseInt(process.env.PORT) : 3000;