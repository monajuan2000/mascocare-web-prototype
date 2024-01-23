import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggingComponent } from './logging/logging.component';

const routes: Routes = [
    { path: 'security/logging', component: LoggingComponent },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  
export class SecurityRoutingModule { }
