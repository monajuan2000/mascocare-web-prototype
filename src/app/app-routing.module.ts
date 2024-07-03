import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './util/home/home.component';
import { SecurityModule } from './util/security/security.module';
import { LoginComponent } from './util/security/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mascocare-web-prototype/security/login',
    pathMatch: 'full',
  },
  {
    path: 'mascocare-web-prototype/security/login',
    component: LoginComponent,
  },
  {
    path: 'mascocare-web-prototype/owners',
    loadChildren: () =>
      import('./util/owners/owners.module').then((m) => m.OwnersModule),
  },
  {
    path: 'mascocare-web-prototype/home',
    loadChildren: () =>
      import('./util/home/home.module').then((m) => m.HomeModule),
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
