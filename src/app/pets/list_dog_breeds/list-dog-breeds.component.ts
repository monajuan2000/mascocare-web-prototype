import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { SelectItemGroup } from 'primeng/api';
import { ListboxModule } from 'primeng/listbox';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-list-dog-breeds',
  templateUrl: './list-dog-breeds.component.html',
  styleUrls: ['./list-dog-breeds.component.sass'],
  standalone: true,
  imports: [ReactiveFormsModule, ListboxModule],
})
export class ListDogBreedsComponent implements OnInit {
  protected groupedCities!: SelectItemGroup[];
  private testList!: any[];
  protected selectedCountry!: any;
  @Input() petOwnerForm!: AbstractControl;

  constructor(private petService: PetService) {
    this.groupedCities = [
      {
        label: 'Germany',
        value: 'de',
        items: [
          { label: 'Berlin', value: 'Berlin' },
          { label: 'Frankfurt', value: 'Frankfurt' },
          { label: 'Hamburg', value: 'Hamburg' },
          { label: 'Munich', value: 'Munich' },
        ],
      },
      {
        label: 'USA',
        value: 'us',
        items: [
          { label: 'Chicago', value: 'Chicago' },
          { label: 'Los Angeles', value: 'Los Angeles' },
          { label: 'New York', value: 'New York' },
          { label: 'San Francisco', value: 'San Francisco' },
        ],
      },
      {
        label: 'Japan',
        value: 'jp',
        items: [
          { label: 'Kyoto', value: 'Kyoto' },
          { label: 'Osaka', value: 'Osaka' },
          { label: 'Tokyo', value: 'Tokyo' },
          { label: 'Yokohama', value: 'Yokohama' },
        ],
      },
    ];
  }
  ngOnInit(): void {
    this.petService.getAllDogBreeds().subscribe({
      next: (data) => {
        console.log(data);
        this.testList = data;
      },
      error: (error) => {
        console.error('Error al recuperar los propietarios', error);
      },
    });
  }

  protected get getPetOwnerForm(): FormGroup {
    return this.petOwnerForm as FormGroup;
  }

  protected get getDogBreeds(): any[] {
    return this.testList;
  }
}
