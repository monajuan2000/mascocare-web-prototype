import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { TitleComponent } from 'src/app/util/components/title/title.component';

@Component({
  selector: 'app-owners-contact-input',
  templateUrl: './owners-contact-input.component.html',
  styleUrls: ['./owners-contact-input.component.sass'],
  standalone: true,
  imports: [InputTextModule, TitleComponent],
})
export class OwnersContactInputComponent {
  private mainTitle: string = 'Contact information';

  protected get getMainTitle(): string {
    return this.mainTitle;
  }
}
