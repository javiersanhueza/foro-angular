import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UserService } from './services/user.service';
import { global } from './services/global';

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
  public url: string = global.url;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
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

  logOut() {
    localStorage.clear();
    this.identity = {};
    this.token = '';
    this._router.navigate(['/index']);
  }

  protected readonly Object = Object;
}
