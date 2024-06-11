import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../../constants/api-url';

@Injectable({ providedIn: 'root' })
export class OwnerService {
  constructor(private http: HttpClient) {}

  getAllOwners(): Observable<any> {
    const username = 'monajuan2000_user';
    const password = 'MonaBermudez30';
    const authHeader = 'Basic ' + btoa(username + ':' + password);
    return this.http.get(apiUrl.ALL_OWNERS_URL, {
      headers: { Authorization: authHeader },
    });
  }
}
