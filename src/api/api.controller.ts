import { Controller, Get } from '@nestjs/common';
import { SiteInfo } from './models/data.interface';

@Controller()
export class ApiController {
  @Get('site-info')
  getSiteInfo(): string {
    return 'You are currently visiting the urls of site info';
  }
}
