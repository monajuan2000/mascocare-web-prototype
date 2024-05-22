import { Router } from '@angular/router';
import { AuthService } from '../security/services/auth.service';
import { ErrorHandlingService } from '../errors/error-handling.service';
import { OverallDialogService } from '../services/dialog/overall-dialog.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';
import { stringConstants } from '../constants/string-constants';
import {
  AuthenticationRequest,
  BaseRequest,
} from '../request/base-request.model';
import { anotherConstants } from '../constants/another-constants';
import { catchError, of } from 'rxjs';
import { HttpErrorRequest } from '../errors/http-error-request';

export class FormLogic {
  constructor(
    private errorService: ErrorHandlingService,
    private authService: AuthService,
    private dialogService: OverallDialogService,
    private router: Router,
    private formBuilder: FormBuilder,
    private logger: NGXLogger
  ) {}

  initForm(): FormGroup {
    return this.formBuilder.group({
      username: [
        stringConstants.EPTY_STRING,
        [Validators.required, Validators.minLength(5)],
      ],
      password: [
        stringConstants.EPTY_STRING,
        [Validators.required, Validators.minLength(5)],
      ],
    });
  }

  sendForm(authenticationRequest: AuthenticationRequest): void {
    this.authService
      .basicLogin(authenticationRequest)
      .pipe(
        catchError((error: HttpErrorRequest) => {
          this.handleFormError(error);
          return of(null);
        })
      )
      .subscribe({
        next: (request) => {
          if (request !== null) {
            this.successProcess(request);
          }
        },
      });
  }

  private successProcess(request: BaseRequest): void {
    this.logger.log(stringConstants.USER_LOGGED_SUCCESSFULLY);
    this.logger.debug(stringConstants.USER_LOGGED_SUCCESSFULLY);
    this.redirectUser(request.redirectUrl);
  }

  private redirectUser(redirectUrl: string): void {
    if (typeof redirectUrl === 'string') {
      this.logger.log(stringConstants.USER_REDIRECTED_TO + redirectUrl);
      this.logger.debug(stringConstants.USER_REDIRECTED_TO + redirectUrl);
      this.router.navigateByUrl(redirectUrl);
    } else {
      this.logger.error(stringConstants.ERROR_URL);
      this.logger.debug(stringConstants.ERROR_URL + redirectUrl);
    }
  }

  private handleFormError(error: HttpErrorRequest): void {
    this.logger.warn(stringConstants.INVALID_FORM);
    this.logger.debug(stringConstants.INVALID_FORM);
    this.dialogService.setErrorRequest(error);
    this.dialogService.setDialogStyleAndType(
      stringConstants.DIALOG_STYLE_ERROR
    );
    this.dialogService.setDisplayModalState(anotherConstants.TRUE);
    //this.errorService.overallError(error);
  }
}
