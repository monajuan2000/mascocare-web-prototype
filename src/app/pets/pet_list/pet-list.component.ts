import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.sass'],
  standalone: true,
  imports: [ReactiveFormsModule, ListboxModule],
})
export class PetListComponent {
  private breedList!: any[];
  protected get getDogBreeds(): any[] {
    return this.breedList;
  }
}
