import { useTranslations } from "next-intl";
import { Link } from "../../../lib/navigation";

export default function casestudies() {
  const t = useTranslations();
  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-3xl font-bold">{t("casestudies_title")}</h1>
        <nav className="flex items-center">
          <ul>
            <li>
              <Link href="/case-content1">
                {t("case_title", { number: 1 })}
              </Link>
            </li>
            <li>
              <Link href="/case-content2">
                {t("case_title", { number: 2 })}
              </Link>
            </li>
            <li>
              <Link href="/case-content3">
                {t("case_title", { number: 3 })}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
