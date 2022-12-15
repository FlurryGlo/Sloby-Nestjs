import { Module } from '@nestjs/common';
import { ApiModule } from './react-api/api.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ApiModule, AuthModule, UsersModule],
})
export class AppModule {}
