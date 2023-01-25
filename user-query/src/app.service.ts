import { Injectable } from '@nestjs/common';
import { memdb } from './db/fixtures/memory';
import { User } from './db/fixtures/user';

@Injectable()
export class AppService {
  getUsers(): User[] {
    return memdb;
  }
}
