import { Module } from '@nestjs/common';
import { UserRepository } from './repositories';
import { DatabaseService } from './database.service';

@Module({
  controllers: [],
  providers: [UserRepository, DatabaseService],
  exports: [UserRepository],
})
export class DatabaseModule {}
