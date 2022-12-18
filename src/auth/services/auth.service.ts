import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/services/users.service';
import { comparePassword } from '../utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    console.log('Inside validateUser');
    const userDB = await this.usersService.findUserByUsername(username);
    if (userDB) {
      const matched = comparePassword(pass, userDB.password);
      if (matched) {
        console.log('User validation success');
        return userDB;
      } else {
        console.log('Passwords did not match');
        return null;
      }
    }
    console.log('User validation failure');
    return null;
  }
}
