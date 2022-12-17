import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from '../../types';
import { plainToClass } from 'class-transformer';
import { CreateUserDto } from '../dto/CreateUser.dto';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  private readonly users: User[];

  getUsers() {
    return this.users.map((user) => new SerializedUser(user));
  }

  getUserByUsername(username: string) {
    return this.users.find((u) => u.username === username);
  }

  getUserById(id: number) {
    return this.users.find((u) => u.id === id);
  }

  createUser(createUserDto: CreateUserDto) {}

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
