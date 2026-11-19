import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ErrorDialogComponent } from './components/dialogs/error-dialog/error-dialog.component';
import { OverallDialogComponent } from './components/dialogs/overall-dialog/overall-dialog.component';
import { WarningDialogComponent } from './components/dialogs/warning-dialog/warning-dialog.component';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import { MainButtonComponent } from './components/main-button/main-button.component';
import { OverallDialogStructureComponent } from './components/overall-dialog-structure/overall-dialog-structure.component';
import { TranslatePipe } from './pipes/translate.pipe';

@NgModule({
  declarations: [
    ErrorDialogComponent,
    LanguageSwitcherComponent,
    MainButtonComponent,
    OverallDialogComponent,
    OverallDialogStructureComponent,
    TranslatePipe,
    WarningDialogComponent,
  ],
  imports: [CommonModule, ButtonModule, DialogModule, ProgressSpinnerModule],
  exports: [
    ErrorDialogComponent,
    LanguageSwitcherComponent,
    MainButtonComponent,
    OverallDialogComponent,
    OverallDialogStructureComponent,
    TranslatePipe,
    WarningDialogComponent,
  ],
})
export class SharedModule {}
