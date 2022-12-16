import { AuthGuard } from '@nestjs/passport';
import { Injectable, CanActivate } from '@nestjs/common';
import { ExecutionContext } from '@nestjs/common/interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    return request.isAuthenticated();
  }
}
