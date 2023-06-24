/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<any> {
    await this.appService.seed();
    // return this.appService.getEmployeeById(1);
    return this.appService.deleteEmployee(1);

  }
}
