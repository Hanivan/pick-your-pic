import { NextPage } from "next";
import Link from "next/link";
import Button from "./Button-Link";

const hrefLink = [
  {
    initial: "Gh",
    text: " - @Hanivan",
    href: "https://github.com/Hanivan",
    className: "bg-[#171515] hover:opacity-90 hover:bg-[#171515] pt-1",
  },
  {
    initial: "Lkdn",
    text: " - @hanivanrizky",
    href: "https://www.linkedin.com/in/hanivanrizky",
    className: "bg-[#0077B5] hover:opacity-90 hover:bg-[#0077B5] pt-1",
  },
  {
    initial: "Ig",
    text: " - @hanivanrizky",
    href: "https://instagram.com/hanivanrizky",
    className: "bg-[#E1306C] hover:opacity-90 hover:bg-[#E1306C] pt-1",
  },
  {
    initial: "Https",
    text: " - Nip's Journey",
    href: "https://hanivan.my.id",
    className: "bg-[#5B51D8] hover:opacity-90 hover:bg-[#5B51D8] pt-1",
  },
];

const Navbar: NextPage = () => {
  return (
    <nav className="md:flex items-center justify-between px-4 md:px-6 lg:px-24 rounded-bl rounded-br absolute w-full">
      <Link href={"/"}>
        <div className="flex items-center space-x-2 drop-shadow-xl">
          <div className="w-12 h-12 bg-orange-400 flex items-center justify-center font-bold text-orange-100">
            PYP
          </div>
          <span className="text-orange-400">Pick Your Pic</span>
        </div>
      </Link>
      <ul className="flex space-x-4 hidden lg:flex">
        {hrefLink.map((it) => (
          <li key={it.href}>
            <Button href={it.href} className={it.className} target={`_blank`}>
              <span className="font-bold">{it.initial}</span>
              {it.text}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
