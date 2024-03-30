import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { BaseRequest } from 'src/app/util/request/base-request.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Password } from 'primeng/password';
import { AuthenticationRequest } from '../../../request/base-request.model';
import { NGXLogger } from 'ngx-logger';
import { ErrorHandlingService } from 'src/app/util/services/Error/error-handling.service';
import { OverallDialogService } from 'src/app/util/services/dialog/overall-dialog.service';

@Component({
  selector: 'app-logging-form',
  templateUrl: './logging-form.component.html',
  styleUrls: ['./logging-form.component.sass'],
})
export class LoggingFormComponent {
  redirectUrl: string | undefined;
  logginForm: FormGroup;

  constructor(
    private errorService: ErrorHandlingService,
    private authService: AuthService,
    private dialogService: OverallDialogService,
    private router: Router,
    private formBuilder: FormBuilder,
    private logger: NGXLogger
  ) {
    this.logginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {
    this.logger.log('Welcome to Mascocare Application');
  }

  protected saveForm = (): void => {
    console.log(this.logginForm.value);
    if (this.logginForm.valid) this.sendLoggingForm(this.logginForm.value);
    this.logginForm.reset();
  };

  private sendLoggingForm = (
    authenticationRequest: AuthenticationRequest
  ): void => {
    this.authService.basicLogin(authenticationRequest).subscribe({
      next: (request) => {
        this.successProcess(request);
      },
      error: (error) => {
        this.logger.warn('Form invalid please try again');
        this.logger.debug('Form invalid please try again');
        this.dialogService.setDialogStyleTyle('error-dialog');
        this.dialogService.setDisplayModalState(true);
        this.errorService.overallError(error);
      },
    });
  };

  private successProcess = (request: BaseRequest): void => {
    this.logger.log('User logged successfully');
    this.logger.debug('User logged successfully');
    this.redirectUser(request);
  };

  private redirectUser = (request: BaseRequest): void => {
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
}
