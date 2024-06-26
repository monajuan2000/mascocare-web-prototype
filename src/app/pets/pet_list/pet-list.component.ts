import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';
import { DogBreed } from '../payload/pet-model';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.sass'],
  standalone: true,
  imports: [ReactiveFormsModule, ListboxModule],
})
export class PetListComponent {
  private petList!: DogBreed[];
  @Input() petOwnerForm!: AbstractControl;
  protected get getPetList(): DogBreed[] {
    return this.petList;
  }

  constructor(private petService: PetService) {}

  ngOnInit(): void {
    this.getAListOfPetTypes();
  }

  private getAListOfPetTypes(): void {
    this.petService.getAllPets().subscribe({
      next: (data) => {
        console.log(data);
        this.petList = data;
      },
      error: (error) => {
        console.error('Error al recuperar las mascotas', error);
      },
    });
  }
  protected get getPetOwnerForm(): FormGroup {
    return this.petOwnerForm as FormGroup;
  }
}
