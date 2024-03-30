import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { BaseRequest } from 'src/app/util/request/base-request.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Password } from 'primeng/password';
import { AuthenticationRequest } from '../../../request/base-request.model';
import { NGXLogger } from 'ngx-logger';
import { ErrorHandlingService } from 'src/app/util/Errors/error-handling.service';
import { OverallDialogService } from 'src/app/util/services/dialog/overall-dialog.service';
import { stringConstants } from 'src/app/util/constants/string-constants';
import { anotherConstants } from 'src/app/util/constants/another-constants';
import { FormLogic } from 'src/app/util/utilities/form-logic';

@Component({
  selector: 'app-logging-form',
  templateUrl: './logging-form.component.html',
  styleUrls: ['./logging-form.component.sass'],
})
export class LoggingFormComponent {
  redirectUrl: string | undefined;
  logginForm: FormGroup;
  formLogic: FormLogic;

  constructor(
    private errorService: ErrorHandlingService,
    private authService: AuthService,
    private dialogService: OverallDialogService,
    private router: Router,
    private formBuilder: FormBuilder,
    private logger: NGXLogger
  ) {
    this.formLogic = this.newFormLogic();
    this.logginForm = this.formLogic.initForm();
  }

  ngOnInit(): void {
    this.logger.log(stringConstants.WELCOME_MESSAAGE);
  }

  protected saveForm = (): void => {
    console.log(this.logginForm.value);
    if (this.logginForm.valid) {
      this.formLogic.sendForm(this.logginForm.value);
    }
    this.logginForm.reset();
  };

  private newFormLogic = (): FormLogic => {
    return (this.formLogic = new FormLogic(
      this.errorService,
      this.authService,
      this.dialogService,
      this.router,
      this.formBuilder,
      this.logger
    ));
  };
}
