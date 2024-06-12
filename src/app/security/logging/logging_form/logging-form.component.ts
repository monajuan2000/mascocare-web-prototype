import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NGXLogger } from 'ngx-logger';
import { OverallDialogService } from 'src/app/util/services/dialog/overall-dialog.service';
import { stringConstants } from 'src/app/util/constants/string-constants';
import { FormLogic } from 'src/app/util/utilities/form-logic';
import { ButtonModule } from 'primeng/button';
import { MainButtonComponent } from 'src/app/util/components/main_button/main-button.component';
import { LinksLoginComponent } from '../components/links-login/links-login.component';

@Component({
  selector: 'app-logging-form',
  templateUrl: './logging-form.component.html',
  styleUrls: ['./logging-form.component.sass'],
  standalone: true,
  imports: [
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    LinksLoginComponent,
    MainButtonComponent,
    RouterModule,
  ],
})
export class LoggingFormComponent {
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
    this.logger.log(this.logginForm.value);
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
