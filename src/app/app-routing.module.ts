import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@features/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mascocare-web-prototype/security/logging',
    pathMatch: 'full',
  },
  {
    path: 'mascocare-web-prototype/security',
    loadChildren: () =>
      import('./features/authentication/authentication.module').then(
        (module) => module.AuthenticationModule
      ),
  },
  {
    path: 'mascocare-web-prototype/owners',
    loadChildren: () =>
      import('./features/owners/owners.module').then(
        (module) => module.OwnersModule
      ),
  },
  {
    path: 'mascocare-web-prototype/home',
    component: HomeComponent,
  },
  { path: '**', redirectTo: 'mascocare-web-prototype/security/logging' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
