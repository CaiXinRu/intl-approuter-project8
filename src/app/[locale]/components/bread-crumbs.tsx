import Link from "next/link";
import "@src/app/[locale]/style/bread-crumbs.css";

type Props = {
  items: { href: string; label: string }[];
  current: string;
  children?: any;
};

const BreadCrumbs = (props: Props) => {
  const { items, current } = props;

  return (
    <nav className="container flex items-center justify-between">
      <ul className="flex gap-x-8">
        {items &&
          items?.map((item, itemIdx) => {
            if (item.href) {
              return (
                <li className="breadCrumbs">
                  <Link key={new Date().getTime() + itemIdx} href={item.href}>
                    {item.label}
                  </Link>
                </li>
              );
            } else {
              return (
                <li
                  className="breadCrumbs-noLink"
                  key={new Date().getTime() + itemIdx}
                >
                  {item.label}
                </li>
              );
            }
          })}

        <li className="breadCrumbs-current">
          <b>{current}</b>
        </li>
      </ul>
    </nav>
  );
};

export default BreadCrumbs;
