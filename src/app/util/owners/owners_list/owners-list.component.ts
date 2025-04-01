import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../services/owner.service';
import { Owner } from '../payload/owner-model';

@Component({
  selector: 'app-owners-list',
  templateUrl: './owners-list.component.html',
  styleUrls: ['./owners-list.component.sass'],
})
export class OwnersListComponent implements OnInit {
  owners: Owner[] = [];

  constructor(private servicio: OwnerService) {}

  ngOnInit(): void {
    this.servicio.getAllOwners().subscribe({
      next: (data) => {
        this.owners = data;
      },
      error: (error) => {
        console.error('Error al recuperar los propietarios', error);
      },
    });
  }
}
