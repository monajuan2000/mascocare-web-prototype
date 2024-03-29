import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-overall-dialog-structure',
  templateUrl: './overall-dialog-structure.component.html',
  styleUrls: ['./overall-dialog-structure.component.sass'],
})
export class OverallDialogStructureComponent {
  styleType: string = 'error-dialog';

  constructor() {}
}
