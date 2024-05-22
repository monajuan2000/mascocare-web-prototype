import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.sass'],
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
