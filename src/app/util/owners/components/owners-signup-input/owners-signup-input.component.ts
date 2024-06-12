import { Component, NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-owners-signup-input',
  templateUrl: './owners-signup-input.component.html',
  styleUrls: ['./owners-signup-input.component.sass'],
  standalone: true,
  imports: [CalendarModule, RadioButtonModule],
})
export class OwnersSignupInputComponent {
  protected ownersDate: Date | undefined;
}
