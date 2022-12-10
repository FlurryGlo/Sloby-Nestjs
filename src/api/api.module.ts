import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SiteInfoEntity } from './models/data.entity';
import { ApiService } from './api.service';

@Module({
  imports: [TypeOrmModule.forFeature([SiteInfoEntity])],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
