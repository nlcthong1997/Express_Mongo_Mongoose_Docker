import { timezoned, ddMMyyyy } from '../utils/date';
import { createLogger, format, transports, Logger } from 'winston';
import { ErrorRequestHandler, NextFunction, Response } from 'express';
const { combine, timestamp, label, printf } = format;

export const setLogFile = (filename: string = 'error'): string => {
    return `../logs/${filename}_${ddMMyyyy()}.log`;
}

const myFormat = printf(({ level, message, label, timestamp }: any): string => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

export const logger = (path: string, labelerr: string = 'Internal server'): Logger => {
    return createLogger({
        format: combine(
            label({ label: labelerr }),
            timestamp({ format: timezoned }),
            myFormat
        ),
        transports: [
            new transports.File({ filename: path })
        ]
    });
}

const response = (err: any, res: Response, next: NextFunction): void => {
    res.status(500).send({
        error: true,
        message: 'Server error!'
    });
}

export const error: ErrorRequestHandler = (err, req, res, next): void => {
    let log = logger(setLogFile());
    log.error(err.stack);
    response(err, res, next);
}