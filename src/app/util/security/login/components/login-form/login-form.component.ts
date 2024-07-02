import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormLogic } from 'src/app/util/utilities/form-logic';
import { AuthService } from '../../../services/auth.service';
import { OverallDialogService } from 'src/app/util/services/dialog/overall-dialog.service';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { stringConstants } from 'src/app/util/constants/string-constants';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass'],
})
export class LoginFormComponent {
  redirectUrl: string | undefined;
  logginForm: FormGroup;
  formLogic: FormLogic;

  constructor(
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
      this.authService,
      this.dialogService,
      this.router,
      this.formBuilder,
      this.logger
    ));
  };
}
