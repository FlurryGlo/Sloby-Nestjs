import {
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Req,
  Body,
} from '@nestjs/common';
import { LocalAuthGuard } from './utils/Guards';

@Controller()
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Req() req) {
    return req.user;
  }

  @Get('protected')
  getProtected() {
    return "You're on a protected route ";
  }
}
