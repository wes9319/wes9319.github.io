import { LanguageSwitcher } from "@/components/language-switcher";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

/** Required for `output: 'export'` — pre-render `/en` and `/es`. */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  const locale = raw as Locale;

  const nav = [
    { href: `/${locale}`, label: locale === "es" ? "Inicio" : "Home" },
    {
      href: `/${locale}/knowledge`,
      label: locale === "es" ? "Conocimientos" : "Knowledge",
    },
    {
      href: `/${locale}/education`,
      label: locale === "es" ? "Formación" : "Education",
    },
    {
      href: `/${locale}/work`,
      label: locale === "es" ? "Trabajos y proyectos" : "Work & projects",
    },
    {
      href: `/${locale}/contact`,
      label: locale === "es" ? "Contacto" : "Contact",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-4 px-4 py-4">
          <Link
            href={`/${locale}`}
            className="font-semibold text-zinc-900 dark:text-zinc-50"
          >
            EWVV
          </Link>
          <nav aria-label="Main" className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                {item.label}
              </Link>
            ))}
            <LanguageSwitcher locale={locale} />
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10">{children}</main>
      <footer className="border-t border-zinc-200 py-6 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
        © {new Date().getFullYear()} — Static portfolio rebuild
      </footer>
    </div>
  );
}
