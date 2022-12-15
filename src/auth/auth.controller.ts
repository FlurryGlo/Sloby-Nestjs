import { Controller, Get, Post } from '@nestjs/common';

@Controller()
export class AuthController {
  @Post('login')
  login() {
    return 'Logging in';
  }

  @Get('protected')
  getProtected() {
    return "You're on a protected route ";
  }
}
