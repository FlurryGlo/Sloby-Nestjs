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

  getCategoriesAccounts() {
    return this.prisma.navbarCategories.findMany();
  }

  getSlobyMenuBar() {
    return this.prisma.dashboardMenuBar.findMany();
  }

  getSlobyTools() {
    return this.prisma.slobyTools.findMany();
  }
}
