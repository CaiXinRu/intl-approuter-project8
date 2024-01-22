import { Link } from "../../../lib/navigation";
import { getTranslations } from "next-intl/server";
import LocaleSwitcher from "./locale-switcher";
import "@src/app/[locale]/style/header.css";

export default async function Header() {
  const t = await getTranslations();

  return (
    <header className="py-6">
      <nav className="container flex items-center justify-between">
        <ul className="flex gap-x-8">
          <li className="dropdown">
            <div className="dropbtn">
              <Link href="/">{t("home")}</Link>
            </div>
          </li>
          <li className="dropdown">
            <div className="dropbtn">{t("about")}</div>
            <div className="dropdown-content">
              <Link href="/our-story">{t("ourstory")}</Link>
              <Link href="/press">{t("press")}</Link>
            </div>
          </li>
          <li className="dropdown">
            <div className="dropbtn">
              <Link href="/case-studies">{t("case-studies")}</Link>
            </div>
          </li>
          <li className="dropdown">
            <div className="dropbtn">
              <Link href="/contact-us">{t("contact-us")}</Link>
            </div>
          </li>
        </ul>
        <LocaleSwitcher />
      </nav>
    </header>
  );
}
