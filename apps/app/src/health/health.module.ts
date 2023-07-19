import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { TerminusModule } from '@nestjs/terminus';
import { DatabaseService } from '@lib/database';

@Module({
  imports: [TerminusModule],
  controllers: [HealthController],
  providers: [DatabaseService]
})
export class HealthModule {}
