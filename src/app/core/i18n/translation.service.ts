import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Language, TranslationKey, translations } from '@core/i18n/translations';

const LANGUAGE_STORAGE_KEY = 'mascocare-language';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly languageSubject = new BehaviorSubject<Language>(
    this.getInitialLanguage()
  );
  readonly language$ = this.languageSubject.asObservable();

  get currentLanguage(): Language {
    return this.languageSubject.value;
  }

  setLanguage(language: Language): void {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    this.languageSubject.next(language);
  }

  translate(key: TranslationKey): string {
    return translations[this.currentLanguage][key];
  }

  private getInitialLanguage(): Language {
    return localStorage.getItem(LANGUAGE_STORAGE_KEY) === 'es' ? 'es' : 'en';
  }
}
