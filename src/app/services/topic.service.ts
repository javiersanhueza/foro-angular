import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Topic } from '../models/topic';
import { global } from './global';

@Injectable()
export class TopicService {
  public url: string = global.url;

  constructor(
    private _http: HttpClient
  ) {
  }

  addTopic(topic: Topic, token: string): Observable<any> {
    const body = JSON.stringify(topic);
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', token);

    return this._http.post(`${this.url}/topic`, body, { headers });
  }

  getTopicsByUser(userId: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')

    return this._http.get(`${this.url}/user-topics/${userId}`, { headers });
  }
}
