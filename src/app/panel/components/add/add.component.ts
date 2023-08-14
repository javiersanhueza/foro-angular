import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Topic } from '../../../models/topic';
import { UserService } from '../../../services/user.service';
import { TopicService } from '../../../services/topic.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [UserService, TopicService]
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
    private _userService: UserService,
    private _topicService: TopicService
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.topic = new Topic(
      '',
      '',
      '',
      '',
      '',
      this.identity._id,
      null
    )
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    this.isLoadingAddTopic = true;
    this._topicService.addTopic(this.topic, this.token).subscribe(
      response => {
        if (response.status === 'success') {
          this.status = 'success';
          this.isLoadingAddTopic = false;
          this._router.navigate(['/panel']);
          form.reset();
        } else {
          this.status = 'error';
        }
      },
      error => {
        this.status = 'error';
        this.isLoadingAddTopic = false;
        console.log(error);
      }
    )
  }

}
