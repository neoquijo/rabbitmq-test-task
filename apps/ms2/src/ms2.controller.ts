import { Controller } from '@nestjs/common';
import { Ms2Service } from './ms2.service';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { RmqService } from 'shared';

@Controller()
export class Ms2Controller {
  constructor(
    private readonly ms2Service: Ms2Service,
    private readonly rmqService: RmqService
  ) { }



  @MessagePattern('create')
  async createTask(@Payload() data: any, @Ctx() context: RmqContext) {
    const response = this.ms2Service.createTask(data)


    return response
  }


  @MessagePattern('delete')
  async delete(@Payload() data) {
    return this.ms2Service.deleteTask(data)
  }
}
