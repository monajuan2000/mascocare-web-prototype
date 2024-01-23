import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggingComponent } from './util/security/logging/logging.component';
import { SecurityRoutingModule } from './util/security/security-routing.module';
import { OwnerRoutingModule } from './util/owners/owner-routing.module';
import { OwnersListComponent } from './util/owners/owners-list/owners-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoggingComponent,
    OwnersListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SecurityRoutingModule,
    OwnerRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
