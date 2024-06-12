import { Component, Input } from '@angular/core';
import { OverallDialogService } from '../../services/dialog/overall-dialog.service';
import { HttpErrorRequest } from '../../errors/http-error-request';
import { OverallDialogComponent } from '../dialogs/overall_dialog/overall-dialog.component';

@Component({
  selector: 'app-overall-dialog-structure',
  templateUrl: './overall-dialog-structure.component.html',
  styleUrls: ['./overall-dialog-structure.component.sass'],
  standalone: true,
  imports: [OverallDialogComponent],
})
export class OverallDialogStructureComponent {
  constructor(private dialogService: OverallDialogService) {}

  protected get getDialogService(): string {
    return this.dialogService.getDialogStyleTyle;
  }

  protected get getErrorRequest(): HttpErrorRequest {
    return this.dialogService.getErrorRequest;
  }
}
