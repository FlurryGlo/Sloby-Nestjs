import { Controller, Get } from '@nestjs/common';

@Controller()
export class AuthController {
  @Get('login')
  login() {
    return 'Logging in';
  }
}
