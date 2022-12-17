import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from '../utils/types';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      userId: 1,
      name: 'Johnatan',
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      name: 'Maria',
      username: 'maria',
      password: 'guess',
    },
  ];

  getUsers() {
    return this.users.map((user) => plainToClass(SerializedUser, user));
  }

  getUserByUsername(username: string) {
    return this.users.find((u) => u.username === username);
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
