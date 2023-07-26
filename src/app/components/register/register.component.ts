import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public pageTitle: string;
  public user: User;
  public isLoadingRegister: boolean

  constructor() {
    this.pageTitle = 'Registrate';
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
    console.log(this.user);
  }

}
