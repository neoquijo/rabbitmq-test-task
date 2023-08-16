import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Task } from 'domain/Tasks/models/ITask';
import { Observable, lastValueFrom, tap } from 'rxjs';
import { LoggerService } from 'shared/Logger/logger.service';
import * as fs from 'fs/promises'
import * as path from 'path';

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

  async getLogs() {
    try {
      const filePath = path.resolve(__dirname, '..', '..', 'logs')
      const fileContent = await fs.readFile(filePath + '/logs.log', 'utf-8');
      return fileContent;
    } catch (error) {
      throw new Error(error);
    }
  }


  createTask() {
    return this.send('create', { id: 'noseque', createdAt: new Date(), type: 'create' })
  }

  deleteTask() {
    return this.send('delete', { id: 'noseque', createdAt: new Date(), type: 'create' })
  }
}
