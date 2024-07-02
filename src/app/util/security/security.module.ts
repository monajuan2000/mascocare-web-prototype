import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { MainButtonComponent } from '../components/main_button/main-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LinksLoginComponent } from './login/components/links-login/links-login.component';
import { LoginFormComponent } from './login/components/login-form/login-form.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    MainButtonComponent,
    LinksLoginComponent,
    LoginFormComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    ReactiveFormsModule,
  ],
  exports: [MainButtonComponent, LoginFormComponent],
})
export class SecurityModule {}
