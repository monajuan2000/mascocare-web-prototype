import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-overall-input',
  templateUrl: './overall-input.component.html',
  styleUrls: ['./overall-input.component.sass'],
  standalone: true,
  imports: [ReactiveFormsModule, FontAwesomeModule],
})
export class OverallInputComponent {
  @Input() faIcon!: IconDefinition;
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

  protected get getFaIcon(): IconDefinition {
    console.log(this.faIcon);
    return this.faIcon;
  }
}
