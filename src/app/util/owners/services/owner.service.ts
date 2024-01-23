import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class OwnerService {

    private apiUrl = 'http://localhost:8080/api/util/owners';

    constructor(private http: HttpClient) {}

    getAllOwners(): Observable<any> {
      const username = 'user';
      const password = 'password';
      const authHeader = 'Basic ' + btoa(username + ':' + password);    
        return this.http.get('http://localhost:8080/api/util/owners/getAllOwners', { headers: { Authorization: authHeader } });
    }
}