import * as dotenv from 'dotenv';
dotenv.config({ path: '../.env' })

export const timezoned = () : string => {
    return (new Date().toLocaleString('en-UK', { timeZone: process.env.TIMEZONE })).replaceAll('/', '-');
}

export const ddMMyyyy = () : string => {
    let d = new Date();
    return `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;
}