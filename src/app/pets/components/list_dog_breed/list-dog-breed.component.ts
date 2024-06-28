import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';
import { PetService } from '../../services/pet.service';
import { DogBreed } from '../../payload/pet-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-dog-breed',
  templateUrl: './list-dog-breed.component.html',
  styleUrls: ['./list-dog-breed.component.sass'],
  standalone: true,
  imports: [ReactiveFormsModule, ListboxModule, CommonModule],
})
export class ListDogBreedsComponent implements OnInit {
  private breedList!: DogBreed[];
  @Input() petOwnerForm!: AbstractControl;

  constructor(private petService: PetService) {}

  ngOnInit(): void {
    this.getAllDogBreeds();
  }

  private getAllDogBreeds() {
    this.petService.getAllDogBreeds().subscribe({
      next: (data) => {
        this.breedList = data;
      },
      error: (error) => {
        console.error('Error al recuperar los propietarios', error);
      },
    });
  }

  protected get getPetOwnerForm(): FormGroup {
    return this.petOwnerForm as FormGroup;
  }

  protected get getDogBreeds(): DogBreed[] {
    return this.breedList;
  }
}
