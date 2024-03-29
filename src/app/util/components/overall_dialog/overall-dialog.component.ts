import { Component, Input, ViewEncapsulation } from '@angular/core';
import { OverallDialogService } from '../../services/dialog/overall-dialog.service';

@Component({
  selector: 'app-overall-dialog',
  templateUrl: './overall-dialog.component.html',
  styleUrls: ['./overall-dialog.component.sass'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class OverallDialogComponent {
  @Input()
  header!: string;
  @Input()
  message!: string;
  private displayModal: boolean = false;
  constructor(private dialogService: OverallDialogService) {
    this.dialogService.displayModalState$.subscribe((value) => {
      this.displayModal = value;
    });
  }

  protected get getDisplayModalState(): boolean {
    return this.displayModal;
  }

  protected setDisplayModalState = (): void => {
    return this.dialogService.setDisplayModalState(!this.displayModal);
  };
}
