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
}
