import { createLogger, format, transports } from 'winston';
import path from 'path';
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `[${label}] ${level}: ${message} ${date} ${hours}:${minutes}:${seconds}`;
});

const successLogger = createLogger({
    level: 'info',
    format: combine(
        label({ label: 'University Success' }),
        timestamp(),
        myFormat
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: path.join(process.cwd(), 'logs', 'winston', 'success.log'), level: 'info' }),
    ],
});
const errorLogger = createLogger({
    level: 'info',
    format: combine(
        label({ label: 'University error' }),
        timestamp(),
        myFormat
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: path.join(process.cwd(), 'logs', 'winston', 'error.log'), level: 'error' }),
    ],
});

export {
    successLogger,
    errorLogger
};