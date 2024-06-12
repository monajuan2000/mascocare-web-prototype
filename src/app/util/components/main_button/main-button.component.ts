import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.sass'],
  standalone: true,
  imports: [ButtonModule],
})
export class MainButtonComponent {
  @Input()
  invalid!: boolean;
  @Input()
  type!: string;
  @Input()
  label!: string;
  @Input()
  icon!: string;
  @Input()
  classes!: string;
}
