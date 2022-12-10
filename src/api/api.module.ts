import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SiteInfoEntity } from './models/data.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SiteInfoEntity])],
  controllers: [ApiController],
})
export class ApiModule {}
