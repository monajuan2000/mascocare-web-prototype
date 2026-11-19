import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '@core/i18n/translation.service';
import { TranslationKey } from '@core/i18n/translations';

@Pipe({
  name: 'translate',
  pure: false,
})
export class TranslatePipe implements PipeTransform {
  constructor(private readonly translationService: TranslationService) {}

  transform(key: TranslationKey): string {
    return this.translationService.translate(key);
  }
}
