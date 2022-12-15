import { Module } from '@nestjs/common';
import { ApiModule } from './react-api/api.module';

@Module({
  imports: [ApiModule],
})
export class AppModule {}
