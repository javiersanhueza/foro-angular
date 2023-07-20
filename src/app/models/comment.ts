import { User } from './user';

export class Comment {
  constructor(
    public _id: string,
    public date: Date,
    public user: User
  ) {
  }
}
