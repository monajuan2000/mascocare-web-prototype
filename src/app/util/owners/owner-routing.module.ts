import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnersListComponent } from './owners_list/owners-list.component';
import { OwnersSignUpComponent } from './owners_sign_up/owners-sign-up.component';
import { OwnersBasicInputComponent } from './components/owners_basic_input/owners-basic-input.component';

const routes: Routes = [
  { path: 'owners/owners-list', component: OwnersListComponent },
  { path: 'owners/owners-sign-up', component: OwnersSignUpComponent },
  { path: 'owners/basic', component: OwnersBasicInputComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnerRoutingModule {}
