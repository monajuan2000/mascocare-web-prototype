import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-warning-dialog',
  templateUrl: './warning-dialog.component.html',
  styleUrls: ['./warning-dialog.component.sass'],
})
export class WarningDialogComponent {
  @Input()
  header!: string;
  @Input()
  message!: string;
}
