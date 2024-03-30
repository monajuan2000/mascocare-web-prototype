import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OverallDialogService {
  private displayModalStateSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(true);
  public displayModalState$: Observable<boolean> =
    this.displayModalStateSubject.asObservable();
  private styleType: string = 'overall-dialog';

  constructor() {}

  public get getDisplayModalState(): Observable<boolean> {
    return this.displayModalState$;
  }

  public get getDialogStyleTyle(): string {
    return this.styleType;
  }

  public setDialogStyleTyle = (styleType: string) => {
    this.styleType = styleType;
  };

  public setDisplayModalState(showModal: boolean): void {
    this.displayModalStateSubject.next(showModal);
  }
}
