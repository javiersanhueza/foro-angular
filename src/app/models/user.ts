export class User {
  constructor(
    public _id: string,
    public name: string,
    public surname: string,
    public password: string,
    public email: string,
    public image: string,
    public role: string,
    public getToken?: boolean
  ) {
  }
}
