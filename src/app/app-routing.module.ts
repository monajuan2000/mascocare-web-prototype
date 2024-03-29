import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoggingComponent } from './util/security/logging/logging.component';
import { OwnerRoutingModule } from './util/owners/owner-routing.module';
import { OwnersListComponent } from './util/owners/owners_list/owners-list.component';
import { HomeComponent } from './util/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/mascocare-web-prototype/security/logging',
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
  { path: 'mascocare-web-prototype/home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
