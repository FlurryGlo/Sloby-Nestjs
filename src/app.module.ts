import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

const envFilePath = '.env.development';

@Module({
  imports: [ConfigModule.forRoot({ envFilePath })],
})
export class AppModule {}
