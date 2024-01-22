import { useTranslations } from "next-intl";
import BreadCrumbs from "@src/app/[locale]/components/bread-crumbs";

export default function casecontent1() {
  const t = useTranslations();
  return (
    <>
      <BreadCrumbs
        items={[
          { label: t("home"), href: "/" },
          { label: t("about"), href: "" },
        ]}
        current={t("casestudies_title")}
      />
      <section className="py-24">
        <div className="container">
          <h1 className="text-3xl font-bold">
            {t("case_title", { number: 3 })}
          </h1>
        </div>
      </section>
    </>
  );
}
