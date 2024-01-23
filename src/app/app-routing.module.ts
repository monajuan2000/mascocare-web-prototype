import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoggingComponent } from './util/security/logging/logging.component';
import { OwnerRoutingModule } from './util/owners/owner-routing.module';
import { OwnersListComponent } from './util/owners/owners-list/owners-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/mascocare-app/security/logging', pathMatch: 'full' },
  { path: 'mascocare-app/security/logging', component: LoggingComponent },
  { path: 'mascocare-app/owners/owners-list', component: OwnersListComponent }, 
  { path: 'mascocare-app', component: AppComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
