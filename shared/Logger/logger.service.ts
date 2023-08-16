import { Injectable } from "@nestjs/common";
import * as path from "path";
import * as winston from 'winston';

@Injectable()
export class LoggerService {

    private logger: winston.Logger;

    constructor() {
        this.logger = winston.createLogger({
            level: 'info',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json()
            ),
            transports: [
                new winston.transports.Console(),
                new winston.transports.File({ filename: 'logs.log', dirname: path.resolve(__dirname, '..', '..', 'logs',) })
            ],
        });
    }

    info(message: string, context?: string) {
        console.log(path.resolve(__dirname, '..', '..', 'logs'))
        this.logger.info(message, { context });
    }

    error(message: string, context?: string) {
        this.logger.error(message, { context });
    }
}
