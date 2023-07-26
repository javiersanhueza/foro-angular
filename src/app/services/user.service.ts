import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user';
import { global } from './global';

@Injectable()
export class UserService {
  public url: string;
  public identity: object;
  public token: string;
  constructor(
    private _http: HttpClient
  ) {
    this.url = global.url;
    this.token = '';
    this.identity = {}
  }

  register(user: User): Observable<any> {
    // Convertir el objeto del usuario a un json string
    const body = JSON.stringify(user);

    // Definir las cabeceras
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    // Hacer la petición ajax
    return this._http.post(`${this.url}/register`, body, { headers });
  };

  signUp(user: User, getToken: boolean = false): Observable<any> {
    // Comprobar si llega el getToken
    if(getToken) {
      user.getToken = getToken;
    }

    const body = JSON.stringify(user);
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this._http.post(`${this.url}/login`, body, { headers });
  };

  getIdentity() {
    const identity: object = JSON.parse(localStorage.getItem('identity') || '{}');

    if (identity) {
      this.identity = identity;
    } else {
      this.identity = {};
    }

    return this.identity;
  };

  getToken() {
    const token: string = localStorage.getItem('token') || '';

    if (!!token.length) {
      this.token = token;
    } else {
      this.token = '';
    }

    return this.token;
  }
}
