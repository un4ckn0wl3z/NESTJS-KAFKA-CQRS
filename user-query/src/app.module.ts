import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserEventHandler } from './events/user.event.handler';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,UserEventHandler],
})
export class AppModule {}
