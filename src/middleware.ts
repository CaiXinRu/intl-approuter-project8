import createIntlMiddleware from 'next-intl/middleware';
import {NextRequest, NextResponse} from 'next/server';
import {i18n} from '../i18n.config'
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
 
function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  // matchLocale會做陣列比對，取最多次出現且順序第一的語言
  const locale = matchLocale(languages, locales, i18n.defaultLocale);
  return locale;
}
export default async function middleware(request: NextRequest) {
  // Step 1: Use the incoming request (example)
  const locale = getLocale(request);
  const defaultLocale =  locale  === 'zh' ? 'zh' : 'en'
  // Step 2: Create and call the next-intl middleware (example)
  const handleI18nRouting = createIntlMiddleware({
    locales: i18n.locales,
    defaultLocale: defaultLocale
  });
  const response = handleI18nRouting(request);
 
  // Step 3: Alter the response (example)
  response.headers.set('x-your-custom-locale', defaultLocale);
 
   return response;
  
}
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(zh|en)/:path*']
};