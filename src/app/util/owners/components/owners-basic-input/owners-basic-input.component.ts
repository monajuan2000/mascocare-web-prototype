import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-owners-basic-input',
  templateUrl: './owners-basic-input.component.html',
  styleUrls: ['./owners-basic-input.component.sass'],
  standalone: true,
  imports: [CalendarModule, RadioButtonModule, ReactiveFormsModule],
})
export class OwnersBasicInputComponent {
  protected ownersDate: Date | undefined;
}
