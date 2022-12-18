import { Module } from '@nestjs/common';
import { ApiModule } from './react-api/api.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    ApiModule,
    AuthModule,
    UsersModule,
    PassportModule.register({ session: true }),
  ],
})
export class AppModule {}
