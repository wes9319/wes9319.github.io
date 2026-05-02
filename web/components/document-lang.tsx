"use client";

import { isLocale } from "@/lib/i18n";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Syncs `<html lang>` with the first path segment (`/en/...`, `/es/...`). */
export function DocumentLang() {
  const pathname = usePathname();

  useEffect(() => {
    const segment = pathname.split("/").filter(Boolean)[0];
    if (segment && isLocale(segment)) {
      document.documentElement.lang = segment;
    }
  }, [pathname]);

  return null;
}
