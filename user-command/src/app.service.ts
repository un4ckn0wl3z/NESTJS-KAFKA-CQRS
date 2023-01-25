import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices/client';
import { CreateUserRequestDto } from './dtos/create-user-request.dto';
import { Events } from './events/events.enum';
import { UserCreatedEvent } from './events/user-created.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('USER_QUERY_SERVICE') private readonly querySideClient: ClientKafka
  ){
  }
  createUser(dto: CreateUserRequestDto): string {
    this.querySideClient.emit(Events.UserCreatedEvent, new UserCreatedEvent(
      dto.firstname,dto.lastname,dto.email,dto.password
    ));
    return 'OK'
  }
}
