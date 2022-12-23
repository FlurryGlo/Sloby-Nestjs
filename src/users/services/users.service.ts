import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from '../../utils/types';
import { plainToClass } from 'class-transformer';
import { CreateUserDto } from '../dto/CreateUser.dto';
import { PrismaService } from '../../prisma.service';
import { create } from 'domain';
import { encodePassword } from '../../auth/utils/bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  private readonly users: User[];

  getUsers() {
    return this.prisma.user.findMany();
  }

  getUserByUsername(username: string) {
    return this.users.find((u) => u.username === username);
  }

  getUserById(id: number) {
    return this.users.find((u) => u.id === id);
  }

  async isUserNameTaken(username: string) {
    const users = await this.getUsers();
    const isTaken = users.map((user) => {
      return user.username === username;
    });
    if (isTaken[0]) return true;
    return false;
  }

  async isEmailTaken(email: string) {
    const users = await this.getUsers();
    const isTaken = users.map((user) => {
      return user.email === email;
    });
    if (isTaken[0]) return true;
    return false;
  }

  createUser(createUserDto: CreateUserDto) {
    const password = encodePassword(createUserDto.password);

    console.log(password);
    return this.prisma.user.create({
      data: {
        username: createUserDto.username,
        email: createUserDto.email,
        password,
      },
    });
  }

  findUserByUsername(username: string) {
    return this.prisma.user.findUnique({ where: { username } });
  }

  findUserById(id: number) {
    return this.prisma.user.findUnique({ where: { user_id: id } });
  }
}
