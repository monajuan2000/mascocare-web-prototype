import { Component, Input } from '@angular/core';
import { CatBreed } from '../../payload/pet-model';
import {
  AbstractControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-list-cat-breed',
  templateUrl: './list-cat-breed.component.html',
  styleUrls: ['./list-cat-breed.component.sass'],
  standalone: true,
  imports: [ReactiveFormsModule, ListboxModule],
})
export class ListCatBreedComponent {
  private breedList!: CatBreed[];
  @Input() petOwnerForm!: AbstractControl;
  constructor(private petService: PetService) {}

  ngOnInit(): void {
    this.getAllDogBreeds();
  }

  private getAllDogBreeds() {
    this.petService.getAllCatBreeds().subscribe({
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

  protected get getCatBreeds(): CatBreed[] {
    return this.breedList;
  }
}
