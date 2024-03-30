import { Component, Input } from '@angular/core';
import { OverallDialogService } from '../../services/dialog/overall-dialog.service';

@Component({
  selector: 'app-overall-dialog-structure',
  templateUrl: './overall-dialog-structure.component.html',
  styleUrls: ['./overall-dialog-structure.component.sass'],
})
export class OverallDialogStructureComponent {
  constructor(private dialogService: OverallDialogService) {}

  protected get getDialogService(): string {
    return this.dialogService.getDialogStyleTyle;
  }
}
