import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { BaseRequest } from 'src/app/util/request/base-request.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Password } from 'primeng/password';
import { AuthenticationRequest } from '../../../request/base-request.model';

@Component({
  selector: 'app-logging-form',
  templateUrl: './logging-form.component.html',
  styleUrls: ['./logging-form.component.sass'],
})
export class LoggingFormComponent {
  redirectUrl: string | undefined;
  myForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.myForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  private onSubmit = (): void => {
    if (this.myForm.valid) {
      // Realizar acciones si el formulario es válido
    }
  };

  private sendLoggingForm = (
    authenticationRequest: AuthenticationRequest
  ): void => {
    this.authService.basicLogin(authenticationRequest).subscribe({
      next: (request) => {
        this.successProcess(request);
      },
    });
  };

  private successProcess = (request: BaseRequest): void => {};

  // onSubmit(miFormulario: any) {
  //   const { username, password } = miFormulario.value;
  //   console.log(miFormulario.value);
  //   this.authService.basicLogin(username, password).subscribe({
  //     next: (request) => {
  //       this.successProcess(request);
  //     },
  //     error: (error) => {
  //       this.errorProcess(error);
  //     },
  //   });
  //   miFormulario.resetForm();
  // }

  // private successProcess = (request: BaseRequest): void => {
  //   console.log('Success');
  //   this.redirectUrl = request.redirectUrl;

  //   if (typeof this.redirectUrl === 'string') {
  //     console.log(this.redirectUrl);
  //     this.router.navigateByUrl(this.redirectUrl);
  //   } else {
  //     console.error('Error: URL de redirección no válida');
  //   }
  // };

  // private errorProcess = (error: any): never => {
  //   throw new Error(error);
  // };
}
