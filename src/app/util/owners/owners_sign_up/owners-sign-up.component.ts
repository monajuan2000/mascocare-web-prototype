import { Component } from '@angular/core';
import { OwnersSignupInputComponent } from '../components/owners-signup-input/owners-signup-input.component';
import { MainButtonComponent } from '../../components/main_button/main-button.component';

@Component({
  selector: 'app-owners-sign-up',
  templateUrl: './owners-sign-up.component.html',
  styleUrls: ['./owners-sign-up.component.sass'],
  standalone: true,
  imports: [OwnersSignupInputComponent, MainButtonComponent],
})
export class OwnersSignUpComponent {}
