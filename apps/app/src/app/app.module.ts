import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../user/user.module';
import { DatabaseModule } from '@lib/database';
import { AuthModule } from '../auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import {AuthenticationModule} from '@lib/authentication'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UserModule,
    AuthModule,
    AuthenticationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
