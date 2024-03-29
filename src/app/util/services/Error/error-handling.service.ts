import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlingService {
  constructor() {}

  public overallError = (error: any): never => {
    throw new Error(error);
  };
}
