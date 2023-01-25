import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_QUERY_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'user-query',
            brokers: ['134.209.108.174:9092'],
          },
          consumer: {
            groupId: 'user-query-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
