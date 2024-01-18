import { Pathnames } from "next-intl/navigation";

export const locales = ["en", "zh"] as const;

export const pathnames = {
  "/": "/",
  "/about": "/about",
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = "always";

export type AppPathnames = keyof typeof pathnames;
