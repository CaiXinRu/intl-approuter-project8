import createIntlMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { locales, pathnames, localePrefix } from "./lib/config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const setLocales: string[] = locales;
  // languages為瀏覽器設定語言愛好，陣列
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  // matchLocale會做陣列比對，取最多次出現且順序第一的語言
  const setDefaultLocale = "en";
  const locale = matchLocale(languages, setLocales, setDefaultLocale);
  return locale;
}

export default async function middleware(request: NextRequest) {
  const locale = getLocale(request);
  const defaultLocale = locale === "zh" ? "zh" : "en";
  const handleI18nRouting = createIntlMiddleware({
    locales: locales,
    defaultLocale: defaultLocale,
    localePrefix: localePrefix,
    localeDetection: false,
    pathnames,
  });
  const response = handleI18nRouting(request);
  return response;
}

export const config = {
  // Matcher entries are linked with a logical "or", therefore
  // if one of them matches, the middleware will be invoked.
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    "/((?!api|_next|_vercel|.*\\..*).*)",
    // However, match all pathnames within `/users`, optionally with a locale prefix
    "/([\\w-]+)?/users/(.+)",
  ],
};
