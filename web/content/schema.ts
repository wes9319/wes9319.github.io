/**
 * Shared content shape — extend as sections are migrated from legacy HTML.
 * Keep copy in `en.ts` / `es.ts` (or split by section files later).
 */
export type SiteContent = {
  meta: {
    title: string;
    description: string;
  };
};
