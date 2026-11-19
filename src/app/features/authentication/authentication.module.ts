import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginLinksComponent } from './login/components/login-links/login-links.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [LoginComponent, LoginFormComponent, LoginLinksComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    SharedModule,
  ],
})
export class AuthenticationModule {}
