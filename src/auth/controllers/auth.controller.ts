import { Controller, Get, Post, UseGuards, Req } from '@nestjs/common';
import { AuthenticatedGuard, LocalAuthGuard } from '../utils/Guards';

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req) {
    return req.user;
  }

  @UseGuards(AuthenticatedGuard)
  @Get('protected')
  getProtected() {
    return "You're on a protected route ";
  }
}
