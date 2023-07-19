import { Module } from '@nestjs/common';

import { UserModule } from '../user/user.module';
import { DatabaseModule } from '@lib/database';
import { AuthModule } from '../auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { AuthenticationModule } from '@lib/authentication';
import { HealthModule } from '../health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UserModule,
    AuthModule,
    AuthenticationModule,
    HealthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
