import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetsRoutingModule } from './pets-routing.module';
import { PetComponent } from './services/pet/pet.component';

@NgModule({
  declarations: [
    PetComponent
  ],
  imports: [CommonModule, PetsRoutingModule],
})
export class PetsModule {}
