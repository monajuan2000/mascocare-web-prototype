import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { BaseRequest } from '../../request/base-response.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/mascocare-api/login';

  constructor(private http: HttpClient) {}

  basicLogin(username: string, password: string): Observable<BaseRequest> {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password),
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
