import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OwnerService {
  constructor(private http: HttpClient) {}

  getAllOwners(): Observable<any> {
    const username = 'monajuan2000_user';
    const password = 'MonaBermudez30';
    const authHeader = 'Basic ' + btoa(username + ':' + password);
    return this.http.get(
      'http://localhost:8080/mascocare-api/util/owners/getAllOwners',
      {
        headers: { Authorization: authHeader },
      }
    );
  }
}
