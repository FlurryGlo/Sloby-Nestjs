import { Controller, Get } from '@nestjs/common';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Controller()
export class ApiController {
  constructor(private apiService: ApiService) {}

  @Get('site-info')
  getSiteInfo() {
    return 'SiteInfo';
  }
}
