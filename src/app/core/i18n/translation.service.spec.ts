import { TestBed } from '@angular/core/testing';
import { TranslationService } from './translation.service';

describe('TranslationService', () => {
  let service: TranslationService;

  beforeEach(() => {
    localStorage.removeItem('mascocare-language');
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslationService);
  });

  it('defaults to English', () => {
    expect(service.currentLanguage).toBe('en');
    expect(service.translate('welcome')).toBe('Welcome back');
  });

  it('persists and applies the selected language', () => {
    service.setLanguage('es');

    expect(service.currentLanguage).toBe('es');
    expect(service.translate('welcome')).toBe('Qué bueno verte');
    expect(localStorage.getItem('mascocare-language')).toBe('es');
  });
});
