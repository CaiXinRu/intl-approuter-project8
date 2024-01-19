import { Pathnames } from "next-intl/navigation";

export const locales = ["en", "zh"] as const;

export const pathnames = {
  "/": "/",
  "/our-story": "/our-story",
  "/press": "/press",
  "/case-studies": "/case-studies",
  "/case-content1": "/case-content1",
  "/case-content2": "/case-content2",
  "/case-content3": "/case-content3",
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = "always";

export type AppPathnames = keyof typeof pathnames;
