import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Task } from 'domain/Tasks/models/ITask';
import { Observable, catchError, firstValueFrom, lastValueFrom, tap } from 'rxjs';
import { LoggerService } from 'shared/Logger/logger.service';

@Injectable()
export class Ms1Service {
  constructor(
    @Inject('ACTIONS_SERVICE') private client: ClientProxy,
    private readonly logger: LoggerService
  ) { }

  private async send(to: string, data: Task): Promise<any> {
    try {
      await this.client.connect()
      const request: Observable<any> = this.client.send(to, data)
      const response = await lastValueFrom(request)
      await this.client.close()
      return response
    } catch (error) {
      this.logger.error('error fetching data')
    }
  }


  createTask() {
    return this.send('create', { id: 'noseque', createdAt: new Date(), type: 'create' })
  }

  deleteTask() {
    return this.send('create', { id: 'noseque', createdAt: new Date(), type: 'create' })
  }
}
