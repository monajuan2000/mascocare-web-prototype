import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { catchError, of } from 'rxjs';
import { stringConstants } from '@core/config/string-constants';
import { HttpErrorRequest } from '@core/errors/http-error-request';
import { AuthenticationRequest } from '@core/models/authentication-request.model';
import { AuthService } from '@core/services/authentication/auth.service';
import { OverallDialogService } from '@core/services/dialog/overall-dialog.service';
import { BaseRequest } from '@shared/models/base-request.model';

export class LoginFormLogic {
  constructor(
    private readonly authService: AuthService,
    private readonly dialogService: OverallDialogService,
    private readonly router: Router,
    private readonly formBuilder: FormBuilder,
    private readonly logger: NGXLogger
  ) {}

  createForm(): FormGroup {
    return this.formBuilder.group({
      username: [
        stringConstants.emptyString,
        [Validators.required, Validators.minLength(5)],
      ],
      password: [
        stringConstants.emptyString,
        [Validators.required, Validators.minLength(5)],
      ],
    });
  }

  submit(request: AuthenticationRequest): void {
    this.authService
      .basicLogin(request)
      .pipe(
        catchError((error: HttpErrorRequest) => {
          this.handleError(error);
          return of(null);
        })
      )
      .subscribe((response) => {
        if (response) {
          this.handleSuccess(response);
        }
      });
  }

  private handleSuccess(response: BaseRequest): void {
    this.logger.info(stringConstants.loginSuccessful);
    this.redirectUser(response.redirectUrl);
  }

  private redirectUser(redirectUrl: string): void {
    if (!redirectUrl) {
      this.logger.error(stringConstants.invalidRedirectUrl);
      return;
    }

    this.logger.info(`${stringConstants.redirectingUser}${redirectUrl}`);
    void this.router.navigateByUrl(redirectUrl);
  }

  private handleError(error: HttpErrorRequest): void {
    this.logger.warn(stringConstants.loginFailed);
    this.dialogService.setErrorRequest(error);
    this.dialogService.setDialogStyleAndType(stringConstants.errorDialogStyle);
    this.dialogService.setDisplayModalState(true);
  }
}
