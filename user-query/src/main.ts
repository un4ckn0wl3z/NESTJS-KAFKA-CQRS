import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { Transport } from '@nestjs/microservices/enums';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule, 
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['134.209.108.174:9092'],
        },
        consumer: {
          groupId: 'user-query-consumer',
        }
      }
    }
  );
  await app.listen();
}

async function bootstrapGateway() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3003);
}

bootstrap();
bootstrapGateway();

