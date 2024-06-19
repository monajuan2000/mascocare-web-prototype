import { Component, EventEmitter, Input } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { OverallInputComponent } from 'src/app/util/components/overall_input/overall-input.component';
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
    OverallInputComponent,
  ],
})
export class OwnersBasicInputComponent {
  protected ownersDate: Date | undefined;
  private mainTitle: string = 'Basic information';
  private message: string = 'Enter your ';
  @Input() basicOwnerForm!: AbstractControl;

  protected get getMainTitle(): string {
    return this.mainTitle;
  }

  protected get getBasicOwnerForm(): FormGroup {
    return this.basicOwnerForm as FormGroup;
  }

  protected get getMessage(): string {
    return this.message;
  }
}
