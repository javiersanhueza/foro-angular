import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user';
import { global } from './global';

@Injectable()
export class UserService {
  public url: string;
  constructor(
    private _http: HttpClient
  ) {
    this.url = global.url;
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
}
