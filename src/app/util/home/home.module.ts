import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainToolbarComponent } from './main_toolbar/main-toolbar.component';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [MainToolbarComponent, HomeComponent],
  imports: [CommonModule, ToolbarModule, AvatarModule],
})
export class HomeModule {}
