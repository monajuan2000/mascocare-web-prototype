import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnersListComponent } from './util/owners/owners_list/owners-list.component';
import { HomeComponent } from './util/home/home.component';
import { OwnersSignUpComponent } from './util/owners/owners_sign_up/owners-sign-up.component';
import { LoggingComponent } from './security/logging/logging.component';
import { OwnersBasicInputComponent } from './util/owners/components/owners_basic_input/owners-basic-input.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mascocare-web-prototype/security/logging',
    pathMatch: 'full',
  },
  {
    path: 'mascocare-web-prototype/security/logging',
    component: LoggingComponent,
  },
  {
    path: 'mascocare-web-prototype/owners/owners-list',
    component: OwnersListComponent,
  },
  {
    path: 'mascocare-web-prototype/owners/owners-sign-up',
    component: OwnersSignUpComponent,
  },
  { path: 'mascocare-web-prototype/home', component: HomeComponent },
  {
    path: 'mascocare-web-prototype/owners/basic',
    component: OwnersBasicInputComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
