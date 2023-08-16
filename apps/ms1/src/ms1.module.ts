import { Module } from '@nestjs/common';
import { Ms1Controller } from './ms1.controller';
import { Ms1Service } from './ms1.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RmqModule } from 'shared/RMQ/rmq.module';
import { LooggerModule } from 'shared/Logger/logger.module';

@Module({
  imports: [
    LooggerModule,
    ConfigModule.forRoot({ envFilePath: '../test/.env' }),
    RmqModule.register({ name: 'ACTIONS_SERVICE', queue: 'actions' })
  ],
  controllers: [Ms1Controller],
  providers: [
    Ms1Service,
    ConfigService
  ],
})
export class Ms1Module { }
