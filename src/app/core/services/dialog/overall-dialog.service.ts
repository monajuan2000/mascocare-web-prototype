import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpErrorRequest } from '../../errors/http-error-request';

@Injectable({
  providedIn: 'root',
})
export class OverallDialogService {
  private displayModalStateSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public displayModalState$: Observable<boolean> =
    this.displayModalStateSubject.asObservable();
  private styleType = 'overall-dialog';
  private storedErrorRequest: HttpErrorRequest | null = null;

  constructor() {}

  public get displayModalState(): Observable<boolean> {
    return this.displayModalState$;
  }

  public get dialogStyle(): string {
    return this.styleType;
  }

  public get errorRequest(): HttpErrorRequest | null {
    return this.storedErrorRequest;
  }

  public setDialogStyleAndType(styleType: string): void {
    this.styleType = styleType;
  }

  public setDisplayModalState(showModal: boolean): void {
    this.displayModalStateSubject.next(showModal);
  }

  public setErrorRequest(httpErrorRequest: HttpErrorRequest): void {
    this.storedErrorRequest = httpErrorRequest;
  }
}
