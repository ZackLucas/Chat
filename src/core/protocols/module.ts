import { Module } from '@nestjs/common';

import { UserModule } from '../../user/protocols/module'

import { AppController } from './';

@Module({
  imports: [UserModule],
  controllers: [AppController],
})
export class AppModule {}
