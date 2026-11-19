import { Component } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-owners-sign-up',
  templateUrl: './owners-sign-up.component.html',
  styleUrls: ['./owners-sign-up.component.sass'],
  standalone: true,
  imports: [
    CalendarModule,
    FormsModule,
    InputTextModule,
    RadioButtonModule,
    SharedModule,
  ],
})
export class OwnersSignUpComponent {
  protected ownerBirthDate: Date | undefined;
  protected gender: 'MALE' | 'FEMALE' | null = null;
}
