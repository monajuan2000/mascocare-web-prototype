import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { OwnersPetInputComponent } from './components/owners-pet-input/owners-pet-input.component';

@NgModule({
  declarations: [OwnersPetInputComponent],
  imports: [CommonModule, InputTextModule, RadioButtonModule],
})
export class OwnersModule {}
