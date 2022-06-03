import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { config } from 'dotenv';
import { json, urlencoded } from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';

import { AppModule } from '@/core/protocols';

import { LocalMemory } from '@/core/infra';
import { HttpExceptionFilter } from '@/core/protocols';

config();
const localMemory = LocalMemory.create()

async function bootstrap() {
  await mongoose.connect(process.env.MONGODB_URI, { dbName: 'chat' })
  console.log(`MongoDB Status ====> ${mongoose.ConnectionStates[mongoose.connection.readyState]}`)

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(helmet());
  app.use(json({ limit: '2mb' }));
  app.use(urlencoded({ extended: true, limit: '2mb' }));
  app.useGlobalFilters(new HttpExceptionFilter())

  await app.listen(process.env.APP_SERVER_PORT);
}
bootstrap();
