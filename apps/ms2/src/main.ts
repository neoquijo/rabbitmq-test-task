import { NestFactory } from '@nestjs/core';


import { RmqService } from 'shared';
import { Ms2Module } from './ms2.module';


async function bootstrap() {
  const app = await NestFactory.create(Ms2Module);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.options('actions'));
  await app.startAllMicroservices();
}
bootstrap();