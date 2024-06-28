import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ListCatBreedComponent } from 'src/app/pets/components/list_cat_breed/list-cat-breed.component';
import { ListDogBreedsComponent } from 'src/app/pets/components/list_dog_breed/list-dog-breed.component';
import { PetListComponent } from 'src/app/pets/components/pet_list/pet-list.component';
import { AllowedPetTypes, PetType } from 'src/app/pets/payload/pet-model';
import { OverallInputComponent } from 'src/app/util/components/overall_input/overall-input.component';
import { TitleComponent } from 'src/app/util/components/title/title.component';

@Component({
  selector: 'app-owners-pet-input',
  templateUrl: './owners-pet-input.component.html',
  styleUrls: ['./owners-pet-input.component.sass'],
  standalone: true,
  imports: [
    InputTextModule,
    ReactiveFormsModule,
    TitleComponent,
    OverallInputComponent,
    PetListComponent,
    ListDogBreedsComponent,
    ListCatBreedComponent,
  ],
})
export class OwnersPetInputComponent {
  private mainTitle: string = 'Pets information';
  private message: string = "Enter your Pet's ";
  private petSelected!: PetType;
  @Input() petOwnerForm!: AbstractControl;

  constructor() {}

  protected get getMainTitle(): string {
    return this.mainTitle;
  }

  protected get getPetOwnerForm(): FormGroup {
    return this.petOwnerForm as FormGroup;
  }

  protected get getMessage(): string {
    return this.message;
  }

  protected onChildChangePetTypeSelection = (petTypeEvent: string): void => {
    this.petSelected = { petType: petTypeEvent as AllowedPetTypes };
    console.log(
      'Opción seleccionada en el componente padre:',
      this.petSelected.petType
    );
  };

  // protected get getFaDog(): IconDefinition {
  //   console.log(faDog);
  //   return faDog;
  // }
}
