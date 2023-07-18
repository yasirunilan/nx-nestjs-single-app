import { Module } from '@nestjs/common';

import { UserModule } from '../user/user.module';
import { DatabaseModule } from '@lib/database';
import { AuthModule } from '../auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { AuthenticationModule } from '@lib/authentication';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UserModule,
    AuthModule,
    AuthenticationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
