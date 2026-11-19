import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.sass'],
})
export class MainButtonComponent {
  @Input() invalid = false;
  @Input({ required: true }) type!: 'button' | 'submit' | 'reset';
  @Input({ required: true }) label!: string;
  @Input({ required: true }) icon!: string;
  @Input({ required: true }) classes!: string;
}
