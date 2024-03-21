import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggingComponent } from './util/security/logging/logging.component';
import { OwnersListComponent } from './util/owners/owners-list/owners-list.component';
import { HomeComponent } from './util/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'security/logging',
    pathMatch: 'full',
  },
  {
    path: 'security/logging',
    component: LoggingComponent,
  },
  {
    path: 'owners/owners-list',
    component: OwnersListComponent,
  },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
