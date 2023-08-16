import { NestFactory } from '@nestjs/core';
import { Ms1Module } from '../apps/ms1/src/ms1.module'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'


async function startMs1() {


  const app = await NestFactory.createMicroservice<MicroserviceOptions>(Ms1Module, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://rabbitmq:5672'],
      queue: 'cats_queue',
      queueOptions: {
        durable: false
      },
    },
  });

  return app
}

startMs1()