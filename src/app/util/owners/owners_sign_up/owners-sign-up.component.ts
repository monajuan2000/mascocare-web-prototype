import { Component } from '@angular/core';
import { MainButtonComponent } from '../../components/main_button/main-button.component';
import { OwnersBasicInputComponent } from '../components/owners-basic-input/owners-basic-input.component';
import { OwnersContactInputComponent } from '../components/owners-contact-input/owners-contact-input.component';

@Component({
  selector: 'app-owners-sign-up',
  templateUrl: './owners-sign-up.component.html',
  styleUrls: ['./owners-sign-up.component.sass'],
  standalone: true,
  imports: [
    OwnersBasicInputComponent,
    OwnersContactInputComponent,
    MainButtonComponent,
  ],
})
export class OwnersSignUpComponent {}
