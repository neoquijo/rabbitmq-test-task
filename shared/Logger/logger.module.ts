import { Module } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { LoggingMiddleware } from './logger.middleware';


@Module({
    providers: [LoggerService, LoggingMiddleware],
    exports: [LoggerService, LoggingMiddleware],
})
export class LooggerModule { }