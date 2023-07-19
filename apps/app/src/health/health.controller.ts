import { DatabaseService } from '@lib/database';
import { Controller, Get } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckService,
  PrismaHealthIndicator,
} from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private db: PrismaHealthIndicator,
    private prismaClient: DatabaseService
  ) {}
  @Get()
  @HealthCheck()
  check() {
    return this.health.check([() => this.db.pingCheck('database', this.prismaClient)]);
  }
}
