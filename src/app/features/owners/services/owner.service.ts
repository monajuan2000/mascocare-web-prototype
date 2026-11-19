import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, defer } from 'rxjs';
import { apiUrls } from '@core/config/api-url';
import { AuthService } from '@core/services/authentication/auth.service';
import { Owner } from '../models/owner-model';

@Injectable({ providedIn: 'root' })
export class OwnerService {
  constructor(
    private readonly http: HttpClient,
    private readonly authService: AuthService
  ) {}

  getAllOwners(): Observable<Owner[]> {
    return defer(() =>
      this.http.get<Owner[]>(apiUrls.allOwners, {
        headers: new HttpHeaders({
          Authorization: this.authService.getAuthorizationHeader(),
        }),
      })
    );
  }
}
