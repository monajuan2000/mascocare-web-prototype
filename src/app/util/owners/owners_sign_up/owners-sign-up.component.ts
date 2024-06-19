import { Component, OnInit } from '@angular/core';
import { MainButtonComponent } from '../../components/main_button/main-button.component';
import { OwnersBasicInputComponent } from '../components/owners-basic-input/owners-basic-input.component';
import { OwnersContactInputComponent } from '../components/owners-contact-input/owners-contact-input.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { OwnersPetInputComponent } from '../components/owners-pet-input/owners-pet-input.component';

@Component({
  selector: 'app-owners-sign-up',
  templateUrl: './owners-sign-up.component.html',
  styleUrls: ['./owners-sign-up.component.sass'],
  standalone: true,
  imports: [
    OwnersBasicInputComponent,
    OwnersContactInputComponent,
    MainButtonComponent,
    ReactiveFormsModule,
    OwnersPetInputComponent,
  ],
})
export class OwnersSignUpComponent implements OnInit {
  protected signUpForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initializeForm();
  }
  ngOnInit(): void {
    this.printResult();
  }

  private initializeForm = (): void => {
    this.signUpForm = this.fb.group({
      basicOwnerForm: this.fb.group({
        firstName: [''],
        lastName: [''],
        birthday: [''],
        paymentInfo: [{ value: '', disabled: true }],
        insuranceInfo: [{ value: '', disabled: true }],
      }),
      contactOwnerForm: this.fb.group({
        email: [''],
        address: [''],
        phone: [''],
      }),
      petOwnerForm: this.fb.group({
        name: [''],
        age: [''],
        gender: [''],
        weight: [''],
      }),
    });
  };

  protected printResult = (): void => {
    console.log(this.getSignUpForm.value);
    // if (this.signUpForm.valid) console.log(this.signUpForm.value);
    // else console.log('Form is invalid');
  };

  protected get getSignUpForm(): FormGroup {
    return this.signUpForm;
  }
}
