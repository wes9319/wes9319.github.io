"use client";

import { isLocale, type Locale } from "@/lib/i18n";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const rest =
    segments.length > 1 && isLocale(segments[0])
      ? segments.slice(1).join("/")
      : segments.join("/");
  const other: Locale = locale === "en" ? "es" : "en";
  const href = rest ? `/${other}/${rest}` : `/${other}`;

  return (
    <Link
      href={href}
      className="ml-auto font-medium text-zinc-800 dark:text-zinc-200"
      hrefLang={other}
      lang={other}
    >
      {other.toUpperCase()}
    </Link>
  );
}
