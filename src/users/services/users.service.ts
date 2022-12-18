import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from '../../types';
import { plainToClass } from 'class-transformer';
import { CreateUserDto } from '../dto/CreateUser.dto';
import { PrismaService } from '../../prisma.service';
import { create } from 'domain';

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

  createUser(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto });
  }

  findUserByUsername(username: string) {
    return this.prisma.user.findUnique({ where: { username } });
  }
}
