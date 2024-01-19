import { useTranslations } from "next-intl";
import BreadCrumbs from "@src/app/[locale]/components/bread-crumbs";

export default function ourstory() {
  const t = useTranslations();
  return (
    <>
      <BreadCrumbs
        items={[
          { label: t("home"), href: "/" },
          { label: t("about"), href: "" },
        ]}
        current={t("ourstory")}
      />
      <section className="py-24">
        <div className="container">
          <h1 className="text-3xl font-bold">{t("ourstory_title")}</h1>
          <p>{t("ourstory_note", { number: 0 })}</p>
          <p>{t("ourstory_note", { number: 1 })}</p>
          <p>{t("ourstory_note", { number: 99999 })}</p>
        </div>
      </section>
    </>
  );
}
