import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TitleComponent } from 'src/app/util/components/title/title.component';

@Component({
  selector: 'app-owners-basic-input',
  templateUrl: './owners-basic-input.component.html',
  styleUrls: ['./owners-basic-input.component.sass'],
  standalone: true,
  imports: [
    CalendarModule,
    RadioButtonModule,
    ReactiveFormsModule,
    TitleComponent,
  ],
})
export class OwnersBasicInputComponent {
  protected ownersDate: Date | undefined;
  private mainTitle: string = 'Basic information';

  protected get getMainTitle(): string {
    return this.mainTitle;
  }
}
