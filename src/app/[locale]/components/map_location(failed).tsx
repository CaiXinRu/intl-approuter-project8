import { getTranslations } from "next-intl/server";

export default async function Location() {
  const t = await getTranslations();

  return (
    <div className="text-xs text-rose-950">
      {t("map_location")}
      <br />
      sales@bikonnect.con.tw
    </div>
  );
}
