import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';
import { HomeComponent } from './home.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [HomeComponent, MainToolbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
