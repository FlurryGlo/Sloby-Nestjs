import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  UseFilters,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { SerializedUser } from '../../utils/types';
import { ParseIntPipe } from '@nestjs/common';
import { UserNotFoundException } from '../exceptions/UserNotFound.exception';
import { HttpExceptionFiler } from '../filters/HttpException.filter';
import { CreateUserDto } from '../dto/CreateUser.dto';
import { UsernameIsTakenException } from '../exceptions/UsernameIsTaken';
@Controller('users')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('')
  getUsers() {
    return this.usersService.getUsers();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/username/:username')
  getByUsername(@Param('username') username: string) {
    const user = this.usersService.getUserByUsername(username);
    if (user) return new SerializedUser(user);
    else throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @UseFilters(HttpExceptionFiler)
  @Get('id/:id')
  getById(@Param('id', ParseIntPipe) id: number) {
    const user = this.usersService.getUserById(id);
    if (user) return new SerializedUser(user);
    else throw new UserNotFoundException(null, null, id);
  }

  @Post('register')
  async createUser(@Body() createUserDto: CreateUserDto) {
    const isUserNameTaken = await this.usersService.isUserNameTaken(
      createUserDto.username,
    );
    console.log(isUserNameTaken);
    if (isUserNameTaken) return 'Username is already taken';
    return '';
  }
}
