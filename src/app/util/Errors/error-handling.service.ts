import { Injectable } from '@angular/core';
import { HttpErrorRequest } from './http-error-request';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlingService {
  constructor() {}

  public overallError = (error: HttpErrorRequest) => {
    //throw new Error(error);
  };
}
