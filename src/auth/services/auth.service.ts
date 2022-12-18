import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/services/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    console.log('Inside validateUser');
    const userDB = await this.usersService.findUserByUsername(username);
    if (userDB && userDB.password === pass) {
      console.log('User validation success');
      return userDB;
    }
    console.log('User validation Failed');
    return null;
  }
}
