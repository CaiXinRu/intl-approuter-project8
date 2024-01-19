import { useTranslations } from "next-intl";

export default function casecontent1() {
  const t = useTranslations();
  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-3xl font-bold">{t("case_title", { number: 3 })}</h1>
      </div>
    </section>
  );
}
