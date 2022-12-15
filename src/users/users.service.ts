import { Injectable } from '@nestjs/common';
import { User } from '../utils/types';

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

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
