import { Component } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-owners-sign-up',
  templateUrl: './owners-sign-up.component.html',
  styleUrls: ['./owners-sign-up.component.sass'],
  standalone: true,
  imports: [CalendarModule, FormsModule, RadioButtonModule],
})
export class OwnersSignUpComponent {
  protected ownersDate: Date | undefined;
}
