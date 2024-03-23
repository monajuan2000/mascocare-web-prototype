import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { BaseRequest } from 'src/app/util/request/base-response.model';

@Component({
  selector: 'app-logging-form',
  templateUrl: './logging-form.component.html',
  styleUrls: ['./logging-form.component.sass'],
})
export class LoggingFormComponent {
  constructor(private authService: AuthService, private router: Router) {}
  redirectUrl: string | undefined;

  onSubmit(miFormulario: any) {
    const { username, password } = miFormulario.value;
    console.log(miFormulario.value);
    this.authService.basicLogin(username, password).subscribe({
      next: (request) => {
        this.successProcess(request);
      },
      error: (error) => {
        this.errorProcess(error);
      },
    });
    miFormulario.resetForm();
  }

  private successProcess = (request: BaseRequest): void => {
    console.log('Success');
    this.redirectUrl = request.redirectUrl;

    if (typeof this.redirectUrl === 'string') {
      console.log(this.redirectUrl);
      this.router.navigateByUrl(this.redirectUrl);
    } else {
      console.error('Error: URL de redirección no válida');
    }
  };

  private errorProcess = (error: any): never => {
    throw new Error(error);
  };
}
