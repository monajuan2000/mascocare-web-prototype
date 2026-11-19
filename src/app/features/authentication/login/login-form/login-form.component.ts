import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/authentication/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';
import { stringConstants } from '@core/config/string-constants';
import { OverallDialogService } from '@core/services/dialog/overall-dialog.service';
import { LoginFormLogic } from '../../services/login-form-logic';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass'],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  private readonly loginFormLogic: LoginFormLogic;

  constructor(
    private readonly authService: AuthService,
    private readonly dialogService: OverallDialogService,
    private readonly router: Router,
    private readonly formBuilder: FormBuilder,
    private readonly logger: NGXLogger
  ) {
    this.loginFormLogic = this.createLoginFormLogic();
    this.loginForm = this.loginFormLogic.createForm();
  }

  ngOnInit(): void {
    this.logger.info(stringConstants.welcomeMessage);
  }

  protected onSubmit(): void {
    if (this.loginForm.valid) {
      this.loginFormLogic.submit(this.loginForm.value);
    }
    this.loginForm.reset();
  }

  private createLoginFormLogic(): LoginFormLogic {
    return new LoginFormLogic(
      this.authService,
      this.dialogService,
      this.router,
      this.formBuilder,
      this.logger
    );
  }
}
