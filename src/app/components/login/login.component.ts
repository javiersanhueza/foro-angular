import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    UserService
  ]
})
export class LoginComponent implements OnInit {
  public pageTitle: string;
  public user: User;
  public status: string;
  public messageError: string;
  public isLoadingLogin: boolean;
  constructor(
    private _userService: UserService
  ) {
    this.status = '';
    this.pageTitle = 'Identificate';
    this.messageError = '';
    this.isLoadingLogin = false;
    this.user = new User(
      '',
      '',
      '',
      '',
      '',
      '',
      'ROLE_USER'
    );
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {

  }

}
