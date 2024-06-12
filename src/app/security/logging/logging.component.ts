import { Component } from '@angular/core';
import { LoggingFormComponent } from './logging_form/logging-form.component';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.sass'],
  standalone: true,
  imports: [LoggingFormComponent],
})
export class LoggingComponent {}
