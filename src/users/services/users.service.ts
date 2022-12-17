import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from '../../types';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      id: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  getUsers() {
    return this.users.map((user) => new SerializedUser(user));
  }

  getUserByUsername(username: string) {
    return this.users.find((u) => u.username === username);
  }

  getUserById(id: number) {
    return this.users.find((u) => u.id === id);
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
