import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import {ValidationPipe} from '@nestjs/common';
import {NestExpressApplication} from '@nestjs/platform-express';
import * as express from 'express';
import {config} from 'dotenv';

config();
async function bootstrap() {
  const app: NestExpressApplication = await NestFactory.create(AppModule);

  app.use('/', express.static('src/public'));
  app.setGlobalPrefix('api/');
  app.useGlobalPipes(new ValidationPipe());

  app.useBodyParser('json', {limit: '20mb'});

  app.enableCors({
      origin: process.env.CORS_ORIGIN,
      credentials: true
  });

  app.use(
      session({
        secret: 'my-secret',
        resave: false,
        saveUninitialized: false,
      }),
  );

  await app.listen(Number(process.env.PORT) || 3000);
}

bootstrap();
