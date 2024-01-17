import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "../i18n.config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { request } from "http";

function getLocale(request: NextRequest): string | undefined {
  // 將 request headers 轉換成 negotiator 需要的格式
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // 取得所有支援的語言
  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;

  // 使用 Negotiator 判斷 request 的優先語言
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  // 使用matchLocale會做陣列比對，取最多次出現且順序第一的語言
  const locale = matchLocale(languages, locales, i18n.defaultLocale);
  return locale;
}

export default createMiddleware({
  // A list of all locales that are supported
  locales: i18n.locales,
  // Used when no locale matches
  defaultLocale: i18n.defaultLocale,
  localePrefix: "always",
  localeDetection: false,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(zh|en)/:path*"],
};
