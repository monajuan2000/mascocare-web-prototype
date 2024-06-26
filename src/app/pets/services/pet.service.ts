import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MOCK_CREDENTIALS } from 'src/app/security/request/mock-credentials';
import { apiUrl } from 'src/app/util/constants/api-url';
import { DogBreed, PetType } from '../payload/pet-model';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  constructor(private http: HttpClient) {}

  getAllDogBreeds(): Observable<DogBreed[]> {
    const authHeader =
      'Basic ' +
      btoa(MOCK_CREDENTIALS.username + ':' + MOCK_CREDENTIALS.password);
    return this.http.get<DogBreed[]>(apiUrl.URL_ALL_DOG_BREEDS, {
      headers: { Authorization: authHeader },
    });
  }

  getAllPets(): Observable<PetType[]> {
    const authHeader =
      'Basic ' +
      btoa(MOCK_CREDENTIALS.username + ':' + MOCK_CREDENTIALS.password);
    return this.http.get<PetType[]>(apiUrl.URL_ALL_PET_TYPE, {
      headers: { Authorization: authHeader },
    });
  }
}
