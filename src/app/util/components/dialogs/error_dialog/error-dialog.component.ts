import { Component, Input } from '@angular/core';
import { OverallDialogService } from 'src/app/util/services/dialog/overall-dialog.service';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.sass'],
})
export class ErrorDialogComponent {
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
