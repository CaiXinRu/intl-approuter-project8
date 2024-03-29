import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  const messages = {
    ...(await import(`../dictionaries/${locale}/about.json`)).default,
    ...(await import(`../dictionaries/${locale}/home.json`)).default,
    ...(await import(`../dictionaries/${locale}/navigation.json`)).default,
    ...(await import(`../dictionaries/${locale}/our-story.json`)).default,
    ...(await import(`../dictionaries/${locale}/press.json`)).default,
    ...(await import(`../dictionaries/${locale}/case-studies.json`)).default,
    ...(await import(`../dictionaries/${locale}/contact-us.json`)).default,
  };
  return {
    messages,
  };
});
