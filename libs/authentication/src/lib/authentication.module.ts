import { Module } from '@nestjs/common';
import { JwtStrategy } from './jwt.strategy';

@Module({
  controllers: [],
  providers: [JwtStrategy],
  exports: [JwtStrategy],
})
export class AuthenticationModule {}
