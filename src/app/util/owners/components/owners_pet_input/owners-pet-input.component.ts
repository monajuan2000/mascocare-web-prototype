import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { SelectItemGroup } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { ListDogBreedsComponent } from 'src/app/pets/list_dog_breed/list-dog-breed.component';
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
    ListDogBreedsComponent,
  ],
})
export class OwnersPetInputComponent {
  private mainTitle: string = 'Pets information';
  private message: string = "Enter your Pet's ";
  protected groupedCities!: SelectItemGroup[];
  protected selectedCountry!: any;
  @Input() petOwnerForm!: AbstractControl;

  constructor() {
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

  protected get getMainTitle(): string {
    return this.mainTitle;
  }

  protected get getPetOwnerForm(): FormGroup {
    return this.petOwnerForm as FormGroup;
  }

  protected get getMessage(): string {
    return this.message;
  }

  // protected get getFaDog(): IconDefinition {
  //   console.log(faDog);
  //   return faDog;
  // }
}
