import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-overall-input',
  templateUrl: './overall-input.component.html',
  styleUrls: ['./overall-input.component.sass'],
  standalone: true,
  imports: [],
})
export class OverallInputComponent {
  @Input() inputName!: string;
  @Input() icon!: string;
  @Input() type!: string;

  protected get getInputName(): string {
    return this.inputName;
  }

  protected get getIcon(): string {
    return this.icon;
  }

  protected get getType(): string {
    return this.type;
  }
}
