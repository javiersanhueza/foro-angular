import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Topic } from '../../../models/topic';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [UserService]
})
export class AddComponent implements OnInit {

  public pageTitle: string = 'Crear nuevo tema';
  public topic: Topic;
  public identity: any;
  public token: string;
  public status: string = '';
  public isLoadingAddTopic: boolean = false;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.topic = new Topic(
      '',
      '',
      '',
      '',
      '',
      new Date(),
      this.identity._id,
      null
    )
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    console.log(this.topic);
  }

}
