import { Component, OnInit } from '@angular/core';
import { MainButtonComponent } from '../../components/main_button/main-button.component';
import { OwnersBasicInputComponent } from '../components/owners-basic-input/owners-basic-input.component';
import { OwnersContactInputComponent } from '../components/owners-contact-input/owners-contact-input.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { OwnersPetInputComponent } from '../components/owners-pet-input/owners-pet-input.component';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

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
    StepsModule,
    ToastModule,
    CommonModule,
    ButtonModule,
  ],
})
export class OwnersSignUpComponent implements OnInit {
  private signUpForm!: FormGroup;
  private isDisableComponent!: boolean;
  private activeStep: 0 | 1 | 2 | 3 = 0;
  protected items!: any[];

  constructor(private fb: FormBuilder) {
    this.initializeForm();
  }
  ngOnInit(): void {
    this.printResult();
    this.items = [
      {
        label: 'Personal Information',
        // routerLink: '/mascocare-web-prototype/owners/basic',
      },
      {
        label: 'Contact',
      },
      {
        label: 'Pets Information',
      },
      {
        label: 'Confirmation',
      },
    ];
  }

  private initializeForm = (): void => {
    this.signUpForm = this.fb.group({
      basicOwnerForm: this.fb.group({
        firstName: [''],
        lastName: [''],
        birthday: [''],
        gender: [''],
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

  protected changeActiveStep = (change: string): void => {
    if (change === 'Next' && this.activeStep < 3) this.activeStep++;
    if (change === 'Back' && this.activeStep > 0) this.activeStep--;
  };

  protected get getSignUpForm(): FormGroup {
    return this.signUpForm;
  }

  protected get getIsDisableComponent(): boolean {
    return this.isDisableComponent;
  }

  protected get getActiveSteps(): number {
    return this.activeStep;
  }
}
