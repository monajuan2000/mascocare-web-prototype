import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { OverallInputComponent } from 'src/app/util/components/overall_input/overall-input.component';
import { TitleComponent } from 'src/app/util/components/title/title.component';

@Component({
  selector: 'app-owners-contact-input',
  templateUrl: './owners-contact-input.component.html',
  styleUrls: ['./owners-contact-input.component.sass'],
  standalone: true,
  imports: [
    InputTextModule,
    TitleComponent,
    OverallInputComponent,
    ReactiveFormsModule,
  ],
})
export class OwnersContactInputComponent {
  private mainTitle: string = 'Contact information';
  @Input() contactOwnerForm!: AbstractControl;

  protected get getMainTitle(): string {
    return this.mainTitle;
  }

  protected get getContactOwnerForm(): FormGroup {
    return this.contactOwnerForm as FormGroup;
  }
}
