import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [
    UserService
  ]
})
export class RegisterComponent implements OnInit {
  public pageTitle: string;
  public user: User;
  public isLoadingRegister: boolean;
  public status: string;
  public messageError: string;

  constructor(
    private _userService: UserService
  ) {
    this.status = '';
    this.pageTitle = 'Registrate';
    this.messageError = '';
    this.isLoadingRegister = false;
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
    this.isLoadingRegister = true;
    this._userService.register(this.user).subscribe(
      response => {
        if (response.user && response.user._id) {
          this.status = 'success';
          form.reset();
        } else {
          this.messageError = response.message;
          this.status = 'error';
        }
        this.isLoadingRegister = false;
      },
      error => {
        console.log(error);
        this.isLoadingRegister = false;
      }
    )
  }

}
