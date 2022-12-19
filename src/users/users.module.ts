import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UserController } from './controllers/users.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [UserController],
  providers: [UsersService, PrismaService],
  exports: [UsersService],
})
export class UsersModule {}
