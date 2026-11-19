import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, defer, tap } from 'rxjs';
import { apiUrls } from '@core/config/api-url';
import { AuthenticationRequest } from '@core/models/authentication-request.model';
import { BaseRequest } from '@shared/models/base-request.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private credentials: AuthenticationRequest | null = null;

  constructor(private readonly http: HttpClient) {}

  basicLogin(request: AuthenticationRequest): Observable<BaseRequest> {
    return defer(() =>
      this.http.get<BaseRequest>(apiUrls.login, {
        headers: this.createHeaders(request),
      })
    )
      .pipe(tap(() => (this.credentials = request)));
  }

  getAuthorizationHeader(): string {
    if (!this.credentials) {
      throw new Error('Authentication is required to access this resource.');
    }

    return this.createAuthorizationHeader(this.credentials);
  }

  private createHeaders(request: AuthenticationRequest): HttpHeaders {
    return new HttpHeaders({
      Authorization: this.createAuthorizationHeader(request),
    });
  }

  private createAuthorizationHeader(request: AuthenticationRequest): string {
    return `Basic ${btoa(`${request.username}:${request.password}`)}`;
  }
}
