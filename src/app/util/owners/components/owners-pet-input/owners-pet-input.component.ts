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
  selector: 'app-owners-pet-input',
  templateUrl: './owners-pet-input.component.html',
  styleUrls: ['./owners-pet-input.component.sass'],
  standalone: true,
  imports: [
    InputTextModule,
    TitleComponent,
    OverallInputComponent,
    ReactiveFormsModule,
  ],
})
export class OwnersPetInputComponent {
  private mainTitle: string = 'Pets information';
  @Input() petOwnerForm!: AbstractControl;

  protected get getMainTitle(): string {
    return this.mainTitle;
  }

  protected get getPetOwnerForm(): FormGroup {
    return this.petOwnerForm as FormGroup;
  }

  // protected get getFaDog(): IconDefinition {
  //   console.log(faDog);
  //   return faDog;
  // }
}
