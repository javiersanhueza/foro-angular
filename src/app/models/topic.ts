import { User } from './user';

export class Topic {
  constructor(
    public _id: string,
    public title: string,
    public content: string,
    public code: string,
    public lang: string,
    public date: Date,
    public user: User,
    public comments: any
  ) {
  }
}
