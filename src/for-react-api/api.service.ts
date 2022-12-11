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
}
