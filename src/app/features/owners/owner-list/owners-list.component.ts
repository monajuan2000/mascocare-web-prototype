import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../services/owner.service';
import { Owner } from '../models/owner-model';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-owners-list',
  templateUrl: './owners-list.component.html',
  styleUrls: ['./owners-list.component.sass'],
})
export class OwnersListComponent implements OnInit {
  owners: Owner[] = [];

  constructor(
    private readonly ownerService: OwnerService,
    private readonly logger: NGXLogger
  ) {}

  ngOnInit(): void {
    this.ownerService.getAllOwners().subscribe({
      next: (data) => {
        this.owners = data;
      },
      error: (error) => {
        this.logger.error('Failed to retrieve owners.', error);
      },
    });
  }
}
