import { Controller, Get } from '@nestjs/common';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Controller()
export class ApiController {
  constructor(private apiService: ApiService) {}

  @Get('site-info')
  getSiteInfo() {
    return this.apiService.getSiteInfo();
  }

  @Get('categories')
  getCategories() {
    return this.apiService.getCategories();
  }

  // @Get('categories-accounts')
  // getCategoriesAccounts() {
  //   return this.apiService.getCategoriesAccounts();
  // }

  @Get('users-login')
  getUsersLogin() {
    return this.apiService.getUsersLogin();
  }

  @Get('sloby-menu-bar')
  getSlobyMenuBar() {
    return this.apiService.getSlobyMenuBar();
  }

  @Get('sloby-tools')
  getSlobyTools() {
    return this.apiService.getSlobyTools();
  }
  @Get('footer')
  getFooter() {
    return this.apiService.getFooter();
  }

  @Get('users-create-account')
  getUsersCreateAccount() {
    return this.apiService.getUsersCreateAccount();
  }

  @Get('admin-page')
  getAdminPage() {
    return true;
  }

  @Get('header-categories')
  getHeaderCategories() {
    return this.apiService.getHeaderCategories();
  }
}
