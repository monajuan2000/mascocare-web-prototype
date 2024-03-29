import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OverallDialogService {
  private displayModalStateSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public displayModalState$: Observable<boolean> =
    this.displayModalStateSubject.asObservable();

  constructor() {}

  public get getDisplayModalState(): Observable<boolean> {
    return this.displayModalState$;
  }

  public setDisplayModalState(showModal: boolean): void {
    this.displayModalStateSubject.next(showModal);
  }
}
