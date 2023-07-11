import { User } from '../models';
import { Injectable } from '@nestjs/common';
import { DTO, CreateUserDto } from '../dtos';
import { DatabaseService } from '../database.service';

@Injectable()
export class UserRepository {
  constructor(private db: DatabaseService) {}
  async getUser(id: number): Promise<User | null> {
    const user = await this.db.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  }

  async createUser(data: CreateUserDto): Promise<User> {
    const user = await this.db.user.create({
      data,
    });
    return user;
  }
  async getUsers(): Promise<User[]> {
    const users = await this.db.user.findMany();
    return users;
  }
  async updateUser(id: number, data: DTO.UserUpdateInput): Promise<User> {
    const user = await this.db.user.update({
      data,
      where: { id },
    });
    return user;
  }
  async deleteUser(id: number): Promise<User> {
    const user = await this.db.user.delete({
      where: { id },
    });
    return user;
  }
}
