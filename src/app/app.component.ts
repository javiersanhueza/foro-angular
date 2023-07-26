import { Component, OnInit, DoCheck } from '@angular/core';

import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    UserService
  ]
})
export class AppComponent implements OnInit, DoCheck {
  public identity: any;
  public token: string = '';

  constructor(
    private _userService: UserService
  ) {
    this.loadUser();
  }

  loadUser() {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    console.log(this.identity);
    console.log(this.token);
  }

  ngDoCheck() {
    this.loadUser();
  }

}
