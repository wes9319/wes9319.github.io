import type { SiteContent } from "./schema";
import type { Locale } from "@/lib/i18n";
import { en } from "./en";
import { es } from "./es";

const byLocale: Record<Locale, SiteContent> = { en, es };

export function getContent(locale: Locale): SiteContent {
  return byLocale[locale];
}
