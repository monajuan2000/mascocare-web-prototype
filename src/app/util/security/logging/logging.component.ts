import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { BaseRequest } from '../../request/base-response.model';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.sass'],
})
export class LoggingComponent {
  constructor(private authService: AuthService, private router: Router) {}
  redirectUrl: string | undefined;

  onSubmit(miFormulario: any) {
    const { username, password } = miFormulario.value;
    this.authService.basicLogin(username, password).subscribe({
      next: (request) => {
        this.successProcess(request);
      },
      error: (error) => {
        this.errorProcess(error);
      },
    });
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
