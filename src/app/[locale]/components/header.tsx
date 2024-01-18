import { Link } from "../../../lib/navigation";
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
        </ul>
        <LocaleSwitcher />
      </nav>
    </header>
  );
}
