import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserRequestDto } from './dtos/create-user-request.dto';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createUser(@Body() body: CreateUserRequestDto): string {
    return this.appService.createUser(body);
  }
}
