import { Component } from '@angular/core';
import { TranslationService } from '@core/i18n/translation.service';
import { Language } from '@core/i18n/translations';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.sass'],
})
export class LanguageSwitcherComponent {
  constructor(private readonly translationService: TranslationService) {}

  get currentLanguage(): Language {
    return this.translationService.currentLanguage;
  }

  setLanguage(language: Language): void {
    this.translationService.setLanguage(language);
  }
}
