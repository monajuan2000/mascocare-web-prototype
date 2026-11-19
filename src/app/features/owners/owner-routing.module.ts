import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnersListComponent } from './owner-list/owners-list.component';
import { OwnersSignUpComponent } from './owner-sign-up/owners-sign-up.component';

const routes: Routes = [
  { path: 'owners-list', component: OwnersListComponent },
  { path: 'owners-sign-up', component: OwnersSignUpComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnerRoutingModule {}
