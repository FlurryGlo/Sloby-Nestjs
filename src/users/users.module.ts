import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UserController } from './controllers/users.controller';

@Module({
  controllers: [UserController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
