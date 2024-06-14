import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.sass'],
  standalone: true,
  imports: [ToolbarModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TitleComponent {
  @Input() mainTitle!: string;

  protected get getMainTitle(): string {
    return this.mainTitle;
  }
}
