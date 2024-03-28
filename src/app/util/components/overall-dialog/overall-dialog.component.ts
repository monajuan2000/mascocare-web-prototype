import { Component } from '@angular/core';

@Component({
  selector: 'app-overall-dialog',
  templateUrl: './overall-dialog.component.html',
  styleUrls: ['./overall-dialog.component.sass'],
})
export class OverallDialogComponent {
  private displayModal = true;

  protected get getDisplayModal() {
    return this.displayModal;
  }

  protected setDisplayModal = (turnDisplayModal: boolean): void => {
    this.displayModal = turnDisplayModal;
  };
}
