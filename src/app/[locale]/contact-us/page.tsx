import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import BreadCrumbs from "@src/app/[locale]/components/bread-crumbs";

const DynamicMap = dynamic(() => import("@src/app/[locale]/components/map"), {
  ssr: false,
});

export default function ourstory() {
  const t = useTranslations();
  return (
    <>
      <BreadCrumbs
        items={[{ label: t("home"), href: "/" }]}
        current={t("contact-us")}
      />
      <section className="py-24">
        <div className="container">
          <h1 className="text-3xl font-bold">{t("contact-us")}</h1>
        </div>
        <br />
        <h1 className="text-2xl font-bold">{t("map_title")}</h1>
        <DynamicMap />
      </section>
    </>
  );
}
