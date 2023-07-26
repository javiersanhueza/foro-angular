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
  constructor() {
    this.pageTitle = 'Registrate';
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

}
