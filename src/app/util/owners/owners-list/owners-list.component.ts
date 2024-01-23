import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../services/owner.service';

@Component({
  selector: 'app-owners-list',
  templateUrl: './owners-list.component.html',
  styleUrls: ['./owners-list.component.sass']
})
export class OwnersListComponent implements OnInit {
  owners: any[] = [];

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
