import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { BaseRequest } from 'src/app/util/request/base-request.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Password } from 'primeng/password';
import { AuthenticationRequest } from '../../../request/base-request.model';
import { NGXLogger } from 'ngx-logger';

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
    private formBuilder: FormBuilder,
    private logger: NGXLogger
  ) {
    this.myForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    //this.logTest();
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
      error: (error) => {
        this.errorProcess(error);
      },
    });
    //miFormulario.resetForm();
  };

  private successProcess = (request: BaseRequest): void => {
    this.logger.log('User logged successfully');
    this.logger.debug('User logged successfully');
    this.redirectUser(request);
  };

  private redirectUser = (request: BaseRequest) => {
    this.redirectUrl = request.redirectUrl;
    if (typeof this.redirectUrl === 'string') {
      this.router.navigateByUrl(this.redirectUrl);
      this.logger.log('User redirected to ' + this.redirectUrl);
      this.logger.debug('User redirected to ' + this.redirectUrl);
    } else {
      this.logger.error('Error: URL of redirect no valid');
      this.logger.debug('Error: URL of redirect no valid ' + this.redirectUrl);
    }
  };

  private errorProcess = (error: any): never => {
    throw new Error(error);
  };

  private logTest = (/*request: BaseRequest*/): void => {
    this.logger.debug('Debug message');
    this.logger.info('Info message');
    this.logger.log('Default log message');
    this.logger.warn('Warning message');
    this.logger.error('Error message');
  };

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

  // }
}
