import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, Params } from '@angular/router';

import { Topic } from '../../../models/topic';
import { UserService } from '../../../services/user.service';
import { TopicService } from '../../../services/topic.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [UserService, TopicService]
})
export class ListComponent implements OnInit {
  public pageTitle: string = 'Mis temas';
  public topics: Topic[] = [];
  public identity: any;
  public token: string;
  public status: string = '';
  public isLoadingTopics: boolean = false;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _topicService: TopicService
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit(): void {
    this.getTopicByUser();
  }

  getTopicByUser() {
    const userId = this.identity._id;
    this.isLoadingTopics = true;
    this._topicService.getTopicsByUser(userId).subscribe(
      response => {
        if (response.status === 'success') {
          this.topics = response.topics;
        }
        this.isLoadingTopics = false;
      },
      error => {
        this.isLoadingTopics = false;
        console.log(error);
      }
    )
  }

}
