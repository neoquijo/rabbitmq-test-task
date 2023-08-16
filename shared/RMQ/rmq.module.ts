import { DynamicModule, Module } from "@nestjs/common";
import { RmqService } from "./rmq.service";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
    providers: [RmqService],
    exports: [RmqService]
})
export class RmqModule {
    static register({ name, queue }: { name: string, queue: string }): DynamicModule {
        return {
            module: RmqModule,
            imports: [
                ClientsModule.register([
                    {
                        name: name,
                        transport: Transport.RMQ,

                        options: {
                            urls: ['amqp://rabbitmq:5672'],
                            queue: queue,
                            queueOptions: {
                                durable: false
                            },
                            persistent: false,


                        },

                    },
                ]),
            ],
            exports: [ClientsModule],
        };
    }
}