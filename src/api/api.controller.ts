import { Controller, Get } from '@nestjs/common';
import { SiteInfo } from './models/data.interface';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { SiteInfoEntity } from './models/data.entity';

@Controller()
export class ApiController {
  constructor(private apiService: ApiService) {}

  @Get('site-info')
  getSiteInfo() {
    return this.apiService.getSiteInfo();
  }
}
