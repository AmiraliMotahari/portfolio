import { defineRouting } from "next-intl/routing";
import { LanguageCode } from "iso-639-1";

const locales: LanguageCode[] = ["en", "fa"];

export const routing = defineRouting({
  // A list of all locales that are supported
  locales,
  // Used when no locale matches
  defaultLocale: "en",
  // Locale prefix = as-needed will use domain.com/page/ for the default lang and domain.com/page/lang/ for others
  localePrefix: "as-needed",
});
