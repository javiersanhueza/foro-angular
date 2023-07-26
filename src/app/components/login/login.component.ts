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
  public token: string;
  public messageError: string;
  public isLoadingLogin: boolean;
  public identity: User;
  constructor(
    private _userService: UserService
  ) {
    this.status = '';
    this.token = '';
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
    this.identity = new User(
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
    this.isLoadingLogin = true;
    // Conseguir objeto completo de usuario logueado
    this._userService.signUp(this.user).subscribe(
      response => {
        if (response.user && response.user._id) {
          this.status = 'success';
          this.identity = response.user;
          // Conseguir token identificado
          this._userService.signUp(this.user, true).subscribe(
            response => {
              if (response.token) {
                this.token = response.token;
              }
            },
            error => {
              console.log(error);
            }
          )
        } else {
          this.status = 'error';
          this.messageError = response.message;
        }
        this.isLoadingLogin = false;
      },
      error => {
        this.status = 'error';
        this.isLoadingLogin = false;
        console.log(error)
      }
    );
  }

}
