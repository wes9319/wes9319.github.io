import { getContent } from "@/content";
import { isLocale } from "@/lib/i18n";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const content = getContent(raw);
  return {
    title: content.meta.title,
    description: content.meta.description,
  };
}

export default async function HomePage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  const content = getContent(raw);
  const isEs = raw === "es";

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        {isEs ? "Portafolio" : "Portfolio"}
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400">{content.meta.description}</p>
      <p className="text-sm text-zinc-500 dark:text-zinc-500">
        {isEs
          ? "Las secciones y el contenido migrado desde el sitio Mobirise llegarán en iteraciones siguientes."
          : "Sections and content migrated from the Mobirise site will land in follow-up iterations."}
      </p>
    </div>
  );
}
