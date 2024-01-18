import { useTranslations } from "next-intl";

export default function home() {
  const t = useTranslations();
  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-3xl font-bold">press</h1>
      </div>
    </section>
  );
}
