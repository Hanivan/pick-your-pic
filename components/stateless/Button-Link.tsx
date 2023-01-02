import { NextPage } from "next";
import Link from "next/link";
import { UrlObject } from "url";
declare type Url = string | UrlObject;

interface PropLink extends React.PropsWithChildren<{}> {
  href: Url;
  rel?: string;
  className?: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
  id?: string;
}

const Button: NextPage<PropLink> = ({
  className,
  href,
  id,
  rel,
  target,
  children,
}) => {
  return (
    <Link
      href={href}
      rel={rel}
      target={target}
      className={`bg-orange-500 text-slate-100 font-medium font-helvetica px-2 py-2 rounded hover:bg-orange-400 transition ${
        className ?? ""
      }`}
      id={id}
    >
      {children}
    </Link>
  );
};

export default Button;
