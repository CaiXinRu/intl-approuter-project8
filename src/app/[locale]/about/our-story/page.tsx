import { useTranslations } from "next-intl";

export default function ourstory() {
  const t = useTranslations();
  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-3xl font-bold">{t("ourstory_title")}</h1>
        <p>{t("ourstory_note", { number: 0 })}</p>
        <p>{t("ourstory_note", { number: 1 })}</p>
        <p>{t("ourstory_note", { number: 99999 })}</p>
      </div>
    </section>
  );
}
