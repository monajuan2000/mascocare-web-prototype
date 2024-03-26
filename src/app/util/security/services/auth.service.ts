import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import {
  AuthenticationRequest,
  BaseRequest,
} from '../../request/base-request.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/mascocarev1-api/login';

  constructor(private http: HttpClient) {}

  basicLogin(
    authenticationRequest: AuthenticationRequest
  ): Observable<BaseRequest> {
    const headers = new HttpHeaders({
      Authorization:
        'Basic ' +
        btoa(
          authenticationRequest.username + ':' + authenticationRequest.password
        ),
    });

    return this.http.get<BaseRequest>(this.apiUrl, { headers }).pipe(
      catchError((error) => {
        if (error.status === 302) {
        }
        return throwError(() => error);
      })
    );
  }
}
