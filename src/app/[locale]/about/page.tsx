import { useTranslations } from "next-intl";

export default function about() {
  const t = useTranslations();
  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-3xl font-bold">{t("about_title")}</h1>
        <p className="text-gray-500">{t("about_description")}</p>
      </div>
    </section>
  );
}
