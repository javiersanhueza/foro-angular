import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Topic } from '../../../models/topic';
import { UserService } from '../../../services/user.service';
import { TopicService } from '../../../services/topic.service';

@Component({
  selector: 'app-edit',
  templateUrl: '../add/add.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [UserService, TopicService]
})
export class EditComponent implements OnInit {

  public pageTitle: string = 'Editar tema';
  public topic: Topic;
  public identity: any;
  public token: string;
  public status: string = '';
  public isLoadingAddTopic: boolean = false;
  public isEdit: boolean = true;
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
    this.getTopic();
  }

  getTopic() {
    this._route.params.subscribe((params: Params) => {
      const id = params['id'];

      this._topicService.getTopic(id).subscribe(
        response => {
          if (response.status === 'success') {
            this.topic = response.topic
          } else {
            this._router.navigate(['/panel']);
          }
        },
        error => {
          console.log(error);
        }
      )
    })
  }

  onSubmit(form: any = null) {
    this.isLoadingAddTopic = true;
    this._topicService.update(this.topic._id, this.topic, this.token).subscribe(
      response => {
        if (response.status === 'success') {
          this.status = 'success';
          this.isLoadingAddTopic = false;
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
