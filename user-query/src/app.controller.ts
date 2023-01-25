import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices/decorators';
import { AppService } from './app.service';
import { User } from './db/fixtures/user';
import { Events } from './events/events.enum';
import { UserEventHandler } from './events/user.event.handler';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService, private readonly eventHandler: UserEventHandler) {}

  @Get()
  getUsers(): User[] {
    return this.appService.getUsers();
  }

  @EventPattern(Events.UserCreatedEvent)
  handleUserCreated(data: any){
    this.eventHandler.handleUserCreated(data)
  }
}
