import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ locale: string }> };

export default async function ContactPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const isEs = raw === "es";

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        {isEs ? "Contacto" : "Contact"}
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        {isEs
          ? "Próximamente: formulario (servicio externo) o enlaces."
          : "Coming soon: form (external provider) or links."}
      </p>
    </div>
  );
}
