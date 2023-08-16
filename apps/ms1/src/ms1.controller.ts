import { Controller, Get } from '@nestjs/common';
import { Ms1Service } from './ms1.service';

@Controller()
export class Ms1Controller {
  constructor(private readonly ms1Service: Ms1Service) { }

  @Get()
  async main() {
    return await this.ms1Service.createTask()
  }

  @Get('/logs')
  getLogs() {
    return this.ms1Service.getLogs()
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
