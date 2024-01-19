import { useTranslations } from "next-intl";

export default function home() {
  const t = useTranslations();
  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-3xl font-bold">{t("home_title")}</h1>
        <p>{t("home_description")}</p>
        <p>{t("home_message", { name: "Claire" })}</p>
      </div>
    </section>
  );
}
