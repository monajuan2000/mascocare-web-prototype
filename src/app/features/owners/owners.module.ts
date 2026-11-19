import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { OwnerRoutingModule } from './owner-routing.module';
import { OwnersListComponent } from './owner-list/owners-list.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [OwnersListComponent],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    OwnerRoutingModule,
    SharedModule,
  ],
})
export class OwnersModule {}
