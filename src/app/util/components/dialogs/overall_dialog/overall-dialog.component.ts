import { Component, Input, ViewEncapsulation } from '@angular/core';
import { OverallDialogService } from '../../../services/dialog/overall-dialog.service';
import { MainButtonComponent } from '../../main_button/main-button.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-overall-dialog',
  templateUrl: './overall-dialog.component.html',
  styleUrls: ['./overall-dialog.component.sass'],
  encapsulation: ViewEncapsulation.Emulated,
  standalone: true,
  imports: [MainButtonComponent, ProgressSpinnerModule, DialogModule],
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
