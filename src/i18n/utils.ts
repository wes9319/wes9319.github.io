import { en } from './en';
import { es } from './es';
import type { Lang, Translations } from './types';

const dictionaries: Record<Lang, Translations> = { en, es };

export function getTranslations(lang: Lang): Translations {
  return dictionaries[lang];
}

export function getHomePath(lang: Lang): string {
  return lang === 'en' ? '/' : '/es/';
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'en' ? 'es' : 'en';
}

export function getAlternatePath(lang: Lang): string {
  return getHomePath(getAlternateLang(lang));
}
