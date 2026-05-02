import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ locale: string }> };

export default async function KnowledgePage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const isEs = raw === "es";

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        {isEs ? "Conocimientos" : "Knowledge"}
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        {isEs ? "Próximamente: habilidades y detalle." : "Coming soon: skills and detail."}
      </p>
    </div>
  );
}
