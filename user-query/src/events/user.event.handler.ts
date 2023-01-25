import { Injectable } from '@nestjs/common';
import { memdb } from 'src/db/fixtures/memory';
import { User } from 'src/db/fixtures/user';
import { UserCreatedEvent } from './user-created.event';

@Injectable()
export class UserEventHandler {
    handleUserCreated(userCreatedEvent: UserCreatedEvent){
        // Update data here
        console.log(userCreatedEvent)
        memdb.push(new User(
            userCreatedEvent.firstname,
            userCreatedEvent.lastname,
            userCreatedEvent.email,
            userCreatedEvent.password
        ))
    }
}
