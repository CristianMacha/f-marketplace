import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ILogin, IResponseLogin } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private uri: string;
  constructor(private http: HttpClient) {
    this.uri = `${environment.url}auth`;
  }

  signin(data: ILogin): Observable<IResponseLogin> {
    return this.http.post<IResponseLogin>(`${this.uri}/signin`, data);
  }
}
