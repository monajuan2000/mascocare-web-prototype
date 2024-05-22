import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnersListComponent } from './owners_list/owners-list.component';

const routes: Routes = [
  { path: 'owners/owners-list', component: OwnersListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnerRoutingModule {}
