import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';

@NgModule({
  declarations: [MainToolbarComponent],
  imports: [CommonModule, ToolbarModule, AvatarModule],
})
export class HomeModule {}
