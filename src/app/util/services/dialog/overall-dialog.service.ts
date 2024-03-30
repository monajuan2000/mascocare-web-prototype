import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpErrorRequest } from '../../Errors/http-error-request';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OverallDialogService {
  private displayModalStateSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(true);
  public displayModalState$: Observable<boolean> =
    this.displayModalStateSubject.asObservable();
  private styleType: string = 'overall-dialog';
  private errorRequest!: HttpErrorRequest;

  constructor() {}

  public get getDisplayModalState(): Observable<boolean> {
    return this.displayModalState$;
  }

  public get getDialogStyleTyle(): string {
    return this.styleType;
  }

  public get getErrorRequest(): HttpErrorRequest {
    return this.errorRequest;
  }

  public setDialogStyleAndType = (styleType: string) => {
    this.styleType = styleType;
  };

  public setDisplayModalState = (showModal: boolean): void => {
    this.displayModalStateSubject.next(showModal);
  };

  public setErrorRequest = (httpErrorRequest: HttpErrorRequest): void => {
    this.errorRequest = httpErrorRequest;
  };
}
