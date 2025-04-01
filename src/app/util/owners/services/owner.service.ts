import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../../constants/api-url';
import { MOCK_CREDENTIALS } from 'src/app/security/request/mock-credentials';
import { Owner } from '../payload/owner-model';

@Injectable({ providedIn: 'root' })
export class OwnerService {
  constructor(private http: HttpClient) {}

  getAllOwners(): Observable<Owner[]> {
    const authHeader =
      'Basic ' +
      btoa(MOCK_CREDENTIALS.username + ':' + MOCK_CREDENTIALS.password);
    return this.http.get<Owner[]>(apiUrl.ALL_OWNERS_URL, {
      headers: { Authorization: authHeader },
    });
  }
}
