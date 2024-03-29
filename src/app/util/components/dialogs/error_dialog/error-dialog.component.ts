import { Component, Input } from '@angular/core';

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
}
