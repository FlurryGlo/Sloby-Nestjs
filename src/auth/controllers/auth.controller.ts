import { Controller, Get, Post, UseGuards, Req, Res } from '@nestjs/common';
import { AuthenticatedGuard, LocalAuthGuard } from '../utils/Guards';
import { Response, Request } from 'express';
@Controller('auth')
export class AuthController {
  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Req() req) {
    return req.user;
  }

  @Get('status')
  @UseGuards(AuthenticatedGuard)
  async status(@Req() req: Request, @Res() res: Response) {
    res.send(req.user);
  }
}
