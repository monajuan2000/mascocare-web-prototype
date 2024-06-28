import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { ListboxChangeEvent, ListboxModule } from 'primeng/listbox';
import { AllowedPetTypes, PetType } from '../../payload/pet-model';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.sass'],
  standalone: true,
  imports: [ReactiveFormsModule, ListboxModule],
})
export class PetListComponent {
  private petList!: PetType[];
  private allowedPets!: PetType[];
  @Input() petOwnerForm!: AbstractControl;
  @Output() changePetTypeSelection = new EventEmitter<string>();

  constructor(private petService: PetService) {}

  ngOnInit(): void {
    this.getAListOfPetTypes();
  }

  protected get getPetList(): PetType[] {
    return this.petList;
  }

  protected get getPetAllowedList(): PetType[] {
    return this.allowedPets;
  }

  protected get getPetOwnerForm(): FormGroup {
    return this.petOwnerForm as FormGroup;
  }

  private getAListOfPetTypes = (): void => {
    this.petService.getAllPets().subscribe({
      next: (data) => {
        this.petList = data;
        this.filterMainPets();
      },
      error: (error) => {
        console.error('Error al recuperar las mascotas', error);
      },
    });
  };

  private filterMainPets = (): void => {
    this.allowedPets = this.petList.slice(0, 3);
  };

  protected onOptionChange(petType: string): void {
    this.changePetTypeSelection.emit(petType);
  }
}
