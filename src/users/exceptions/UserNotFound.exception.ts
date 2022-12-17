import { HttpException, HttpStatus } from '@nestjs/common';

export class UserNotFoundException extends HttpException {
  constructor(msg?: string, status?: HttpStatus, notFoundId?: number) {
    super(
      msg || `User with the id ${notFoundId} was not found`,
      status || HttpStatus.BAD_REQUEST,
    );
  }
}
