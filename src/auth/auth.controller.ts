import {
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Req,
  Body,
} from '@nestjs/common';
import { AuthenticatedGuard, LocalAuthGuard } from './utils/Guards';

@Controller()
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Req() req) {
    return req.user;
  }

  @UseGuards(AuthenticatedGuard)
  @Get('protected')
  getProtected() {
    return "You're on a protected route ";
  }
}
