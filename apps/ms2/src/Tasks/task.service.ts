import { Injectable } from "@nestjs/common";
import { Task } from "domain/Tasks/models/ITask";
import { LoggerService } from "shared/Logger/logger.service";

@Injectable()
export class TaskService {
    constructor(
        private readonly logger: LoggerService
    ) {

    }

    createTask(task: Task) {
        this.logger.info('task created')
    }

    creationError(tasl: Task) {
        this.logger.error('error')
    }
}