import { CreateUserDto, DTO, User, UserRepository } from '@lib/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private repo: UserRepository) {}
  async getUsers(): Promise<User[]> {
    const users = await this.repo.getUsers();
    return users;
  }
  async getUser(id: number): Promise<User> {
    const user = await this.repo.getUser(id);
    return user;
  }
  async addUser(payload: CreateUserDto) {
    const user = await this.repo.createUser(payload);
    return user;
  }
  async updateUser(id: number, payload: DTO.UserUpdateInput) {
    const user = await this.repo.updateUser(id, payload);
    return user;
  }
  async deleteUser(id: number) {
    const user = await this.repo.deleteUser(id);
    return user;
  }
}
