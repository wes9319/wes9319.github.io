import { defaultLocale } from "@/lib/i18n";
import { redirect } from "next/navigation";

/** Sends `/` → `/en` (see `lib/i18n.ts` for default). */
export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
