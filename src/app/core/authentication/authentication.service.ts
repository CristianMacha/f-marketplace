import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ILogin, IPerson } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private uri: string;
  constructor(private http: HttpClient) {
    this.uri = `${environment.url}auth`;
  }

  signin(data: ILogin): Observable<string> {
    return this.http.post<string>(`${this.uri}/signin`, data);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUserLogged(): Observable<IPerson> {
    return this.http.get<IPerson>(`${this.uri}/person`);
  }

  isAuth(): boolean {
    return localStorage.getItem('token') !== null;
  }

  logOut() {
    console.log('here');
    localStorage.removeItem('token');
  }
}
