import { Module } from '@nestjs/common';
import { Ms2Controller } from './ms2.controller';
import { Ms2Service } from './ms2.service';
import { RmqModule, RmqService } from 'shared';
import { TasksModule } from './Tasks/task.module';
import { LooggerModule } from 'shared/Logger/logger.module';

@Module({
  imports: [
    TasksModule,
    LooggerModule,
    RmqModule.register({ name: 'ACTIONS_SERVICE', queue: 'actions' })
  ],
  controllers: [Ms2Controller],
  providers: [Ms2Service],
})
export class Ms2Module { }
