import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';

@Module({
  imports: [],
  controllers: [ApiController],
  providers: [ApiService, PrismaService],
})
export class ApiModule {}
