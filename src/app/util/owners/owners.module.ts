import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnersSignUpComponent } from './owners_sign_up/owners-sign-up.component';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [OwnersSignUpComponent],
  imports: [CommonModule, InputTextModule],
})
export class OwnersModule {}
