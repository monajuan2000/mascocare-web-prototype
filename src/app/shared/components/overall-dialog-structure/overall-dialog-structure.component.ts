import { Component, Input } from '@angular/core';
import { HttpErrorRequest } from '@core/errors/http-error-request';
import { OverallDialogService } from '@core/services/dialog/overall-dialog.service';

@Component({
  selector: 'app-overall-dialog-structure',
  templateUrl: './overall-dialog-structure.component.html',
  styleUrls: ['./overall-dialog-structure.component.sass'],
})
export class OverallDialogStructureComponent {
  constructor(private dialogService: OverallDialogService) {}

  protected get dialogStyle(): string {
    return this.dialogService.dialogStyle;
  }

  protected get errorRequest(): HttpErrorRequest | null {
    return this.dialogService.errorRequest;
  }
}
