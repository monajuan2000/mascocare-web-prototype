import { Inject, Component } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PrimeNGConfig } from 'primeng/api';
import { primengTranslations } from '@core/i18n/primeng-translations';
import { TranslationService } from '@core/i18n/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    primeNgConfig: PrimeNGConfig,
    translationService: TranslationService
  ) {
    translationService.language$.subscribe((language) => {
      this.document.documentElement.lang = language;
      primeNgConfig.setTranslation(primengTranslations[language]);
    });
  }
}
