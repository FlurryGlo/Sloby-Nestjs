import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { from, Observable } from 'rxjs';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ApiService {
  constructor(private prisma: PrismaService) {}

  getSiteInfo() {
    return this.prisma.siteInfo.findMany();
  }

  getCategories() {
    return this.prisma.navbarCategories.findMany();
  }

  getUsersLogin() {
    return 'users login';
  }

  getSlobyMenuBar() {
    return this.prisma.dashboardMenuBar.findMany();
  }

  getSlobyTools() {
    return this.prisma.slobyTools.findMany();
  }

  getUsersCreateAccount() {
    return 'Getting the users create account';
  }

  getFooter() {
    return 'Getting the users footer';
  }

  getHeaderCategories() {
    return this.prisma.headerCategories.findMany();
  }
}
