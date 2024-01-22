import { useTranslations } from "next-intl";
import { Link } from "../../../lib/navigation";
import BreadCrumbs from "@src/app/[locale]/components/bread-crumbs";

export default function casestudies() {
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
          <h1 className="text-3xl font-bold">{t("casestudies_title")}</h1>
          <nav className="flex items-center">
            <ul>
              <li>
                <Link
                  href="/case-content1"
                  className="text-orange-500 hover:underline"
                >
                  {t("case_title", { number: 1 })}
                </Link>
              </li>
              <li>
                <Link
                  href="/case-content2"
                  className="text-orange-500 hover:underline"
                >
                  {t("case_title", { number: 2 })}
                </Link>
              </li>
              <li>
                <Link
                  href="/case-content3"
                  className="text-orange-500 hover:underline"
                >
                  {t("case_title", { number: 3 })}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
}
