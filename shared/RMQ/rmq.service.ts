import { Injectable } from "@nestjs/common";
import { RmqContext, RmqOptions, Transport } from "@nestjs/microservices";

@Injectable()
export class RmqService {
    options(queue: string): RmqOptions {
        return {
            transport: Transport.RMQ,
            options: {

                urls: ['amqp://rabbitmq:5672'],
                queue: queue,
                queueOptions: {
                    durable: false
                },
                persistent: true,

            }
        }
    }

}
