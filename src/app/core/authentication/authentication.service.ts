import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private uri: string;
  constructor(private http: HttpClient) {
    this.uri = `${environment.url}auth`;
  }

  signin() {
    return this.http.post(`${this.uri}/signin`, {
      email: 'cristian@gmail.com',
      password: '123',
    });
  }
}
