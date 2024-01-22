import { Link } from "../../../lib/navigation";
import { useTranslations } from "next-intl";
import BreadCrumbs from "@src/app/[locale]/components/bread-crumbs";

export default function press() {
  const t = useTranslations();
  return (
    <>
      <BreadCrumbs
        items={[
          { label: t("home"), href: "/" },
          { label: t("about"), href: "" },
        ]}
        current={t("press")}
      />
      <section className="py-24">
        <div className="container">
          <h1 className="text-3xl font-bold">{t("press_title")}</h1>
          <p>{t("press_description")}</p>
          <p>
            {t.rich("press_back", {
              home: (chunks) => (
                <Link href="/" className="text-orange-500 hover:underline">
                  {chunks}
                </Link>
              ),
            })}
          </p>
        </div>
      </section>
    </>
  );
}
