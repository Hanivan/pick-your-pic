import { NextPage } from "next";
import Link from "next/link";

const Footer: NextPage = () => {
  return (
    <>
      <footer className="border-t border-orange-500 md:flex text-center items-center h-12 mt-5 justify-evenly text-sm">
        <div>
          Hanivan Rizky S. Supported By{" "}
          <Link
            href={"https://unsplash.com"}
            target={"_blank"}
            className="text-orange-500"
          >
            Unsplash
          </Link>
          . Thank's to{" "}
          <Link
            href={"https://kelasfullstack.id"}
            className="text-amber-500"
            target={"_blank"}
          >
            KelasFullstack
          </Link>
        </div>
        <a href="#" className="my-1 block">
          To Top
        </a>
      </footer>
    </>
  );
};

export default Footer;
