import * as dotenv from 'dotenv';
dotenv.config({ path: '../.env' })

export const Timezone: String = process.env.TIMEZONE || 'Asia/Ho_Chi_Minh';

export const Port: Number = (process.env.PORT !== undefined) ? parseInt(process.env.PORT) : 3000;