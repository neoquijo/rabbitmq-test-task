import { Injectable, NestMiddleware } from '@nestjs/common';

import { Request, Response, NextFunction } from 'express';
import { LoggerService } from './logger.service';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
    constructor(private readonly loggingService: LoggerService) { }

    use(req: Request, res: Response, next: NextFunction) {
        const startTime = new Date();
        const { method, originalUrl } = req;

        res.on('finish', () => {
            const endTime = new Date();
            const responseTime = endTime.getTime() - startTime.getTime();
            this.loggingService.info(
                `${method} ${originalUrl} ${res.statusCode} ${responseTime}ms`
            );
        });

        next();
    }
}
