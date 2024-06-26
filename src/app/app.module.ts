import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggingComponent } from './util/security/logging/logging.component';
import { SecurityRoutingModule } from './util/security/security-routing.module';
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
import { LoggingFormComponent } from './util/security/logging/logging_form/logging-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainButtonComponent } from './util/components/main_button/main-button.component';
import { LinksLoginComponent } from './util/security/logging/components/links-login/links-login.component';
import { OverallDialogComponent } from './util/components/dialogs/overall_dialog/overall-dialog.component';
import { OverallDialogStructureComponent } from './util/components/overall_dialog_structure/overall-dialog-structure.component';
import { ErrorDialogComponent } from './util/components/dialogs/error_dialog/error-dialog.component';
import { WarningDialogComponent } from './util/components/dialogs/warning_dialog/warning-dialog.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    LoggingComponent,
    OwnersListComponent,
    HomeComponent,
    MainToolbarComponent,
    LoggingFormComponent,
    OverallDialogComponent,
    MainButtonComponent,
    LinksLoginComponent,
    OverallDialogStructureComponent,
    ErrorDialogComponent,
    WarningDialogComponent,
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
    ProgressSpinnerModule,
    BrowserAnimationsModule,
    TableModule,
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
