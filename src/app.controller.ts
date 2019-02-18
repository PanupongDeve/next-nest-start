import { Controller, Get, Render, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('Index')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('cats/:id')
  @Render('Cat')
  show(@Param() params: Params) {
    return `Request By ${params.id}`
  }
}

interface Params {
  id: string
}
