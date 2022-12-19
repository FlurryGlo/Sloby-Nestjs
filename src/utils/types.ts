import { Exclude } from 'class-transformer';

export type User = {
  id: number;

  username: string;
  password: string;
};

export class SerializedUser {
  id: number;

  username: string;

  @Exclude()
  password: string;

  constructor(partial: Partial<SerializedUser>) {
    Object.assign(this, partial);
  }
}