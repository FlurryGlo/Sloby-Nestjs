import { HttpException, HttpStatus } from '@nestjs/common';

export class UsernameIsTakenException extends HttpException {
  constructor(msg?: string, statusCode?: number) {
    super(
      msg || 'Username is already taken',
      statusCode || HttpStatus.BAD_REQUEST,
    );
  }
}
