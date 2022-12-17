import { Exclude } from 'class-transformer';

export type User = {
  userId: number;
  name: string;
  username: string;
  password: string;
};

export class SerializedUser {
  username: string;

  @Exclude()
  password: string;
}
