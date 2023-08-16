import { Controller, Get } from '@nestjs/common';
import { Ms1Service } from './ms1.service';
import { Ctx, MessagePattern, NatsContext, Payload } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Controller()
export class Ms1Controller {
  constructor(private readonly ms1Service: Ms1Service) { }

  @Get()
  async main() {
    return await this.crateTask()
  }

  @Get('/create')
  async crateTask() {
    return await this.ms1Service.createTask()
  }

  @Get('/delete')
  async deleteTask() {
    return await this.ms1Service.deleteTask()
  }

}