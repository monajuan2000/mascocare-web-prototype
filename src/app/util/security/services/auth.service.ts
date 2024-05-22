import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import {
  AuthenticationRequest,
  BaseRequest,
} from '../../request/base-request.model';
import { apiUrl } from '../../constants/api-url';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  basicLogin(
    authenticationRequest: AuthenticationRequest
  ): Observable<BaseRequest> {
    const headers = this.createHeaders(authenticationRequest);
    return this.http.get<BaseRequest>(apiUrl.LOGIN_URL, { headers });
  }

  private createHeaders = (
    authenticationRequest: AuthenticationRequest
  ): HttpHeaders => {
    return new HttpHeaders({
      Authorization:
        'Basic ' +
        btoa(
          authenticationRequest.username + ':' + authenticationRequest.password
        ),
    });
  };
}
