import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  const messages = {
    ...(await import(`../dictionaries/${locale}/home.json`)).default,
    ...(await import(`../dictionaries/${locale}/navigation.json`)).default,
    ...(await import(`../dictionaries/${locale}/about.json`)).default,
  };
  return {
    messages,
  };
});
