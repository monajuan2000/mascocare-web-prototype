import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-overall-input',
  templateUrl: './overall-input.component.html',
  styleUrls: ['./overall-input.component.sass'],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class OverallInputComponent {
  @Input() anyForm!: AbstractControl;
  @Input() inputId!: string;
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

  protected get getInputId(): string {
    return this.inputId;
  }

  protected get getAnyForm(): FormGroup {
    return this.anyForm as FormGroup;
  }
}
