import { Link } from "../../../lib/navigation";
import { Locale } from "@/i18n.config";
import { getTranslations } from "next-intl/server";
import LocaleSwitcher from "./locale-switcher";

export default async function Header() {
  const t = await getTranslations();

  return (
    <header className="py-6">
      <nav className="container flex items-center justify-between">
        <ul className="flex gap-x-8">
          <li>
            <Link href="/">{t("home")}</Link>
          </li>
          <li>
            <Link href="/about">{t("about")}</Link>
          </li>
          {/* <li>
            <Link href="/press">{t("press")}</Link>
          </li>
          <li>
            <Link href="/signin">{t("login")}</Link>
          </li> */}
        </ul>
        <LocaleSwitcher />
      </nav>
    </header>
  );
}
