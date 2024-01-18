import { useTranslations } from "next-intl";

export default function home() {
  const t = useTranslations();
  return <h1>{t("home_title")}</h1>;
}
