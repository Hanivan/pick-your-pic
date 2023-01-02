import { NextPage } from "next";
import Link from "next/link";

const Footer: NextPage = () => {
  return (
    <>
      <footer className="border-t flex items-center h-12 mt-5 justify-evenly">
        <div>
          Hanivan Rizky S. Supported By{" "}
          <Link
            href={"https://unsplash.com"}
            target={"_blank"}
            className="text-orange-500 inline pl-1"
          >
            Unsplash
          </Link>
        </div>
        <a href="#">To Top</a>
      </footer>
    </>
  );
};

export default Footer;
