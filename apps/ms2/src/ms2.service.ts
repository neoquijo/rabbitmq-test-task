import { Inject, Injectable } from '@nestjs/common';
import { Task } from 'domain/Tasks/models/ITask';
import { LoggerService } from 'shared/Logger/logger.service';

@Injectable()
export class Ms2Service {

  constructor(
    private readonly logger: LoggerService
  ) { }

  createTask(data: Task): Task | Error {

    const createdTask = new Task({ ...data })
    this.logger.info('task created')
    return createdTask

  }

  deleteTask(data: Task): Task {
    this.logger.info('deleted')
    return data
  }


}
