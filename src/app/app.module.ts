import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OwnerRoutingModule } from './util/owners/owner-routing.module';
import { OwnersListComponent } from './util/owners/owners_list/owners-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './util/home/home.component';
import { HomeRoutingModule } from './util/home/home-routing.module';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { MainToolbarComponent } from './util/home/main_toolbar/main-toolbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorDialogComponent } from './util/components/dialogs/error_dialog/error-dialog.component';
import { WarningDialogComponent } from './util/components/dialogs/warning_dialog/warning-dialog.component';
import { TableModule } from 'primeng/table';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SecurityRoutingModule } from './security/security-routing.module';

@NgModule({
  declarations: [
    OwnersListComponent,
    HomeComponent,
    MainToolbarComponent,
    ErrorDialogComponent,
    WarningDialogComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SecurityRoutingModule,
    OwnerRoutingModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    FormsModule,
    HomeRoutingModule,
    ToolbarModule,
    AvatarModule,
    ReactiveFormsModule,
    DialogModule,
    BrowserAnimationsModule,
    TableModule,
    RadioButtonModule,
    LoggerModule.forRoot({
      // serverLoggingUrl: 'any-url in api',
      // serverLogLevel: NgxLoggerLevel.ERROR,
      level: NgxLoggerLevel.TRACE,
      disableConsoleLogging: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
