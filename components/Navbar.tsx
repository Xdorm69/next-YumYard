import React from "react";
import { ModeToggle } from "./ui/ModeToggle";
import Link from "next/link";
import { cap } from "@/lib/cap";

type navLinkType = {
  title: string;
  link: string;
};

const navLinks: navLinkType[] = [
  {
    title: "home",
    link: "/",
  },
  {
    title: "recipies",
    link: "/",
  },
  {
    title: "tips",
    link: "/tips",
  },
  {
    title: "contact",
    link: "/contact",
  },
];

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-1/2 -translate-x-1/2 w-full z-10 bg-transparent">
      <div className="cont flex items-center justify-between py-4 w-full sm:w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-[calc(100%-6rem)]">
        {/* LEFT */}
        <Link href={"/"}>
          <h1 className="text-2xl font-mono font-bold text-background">
            YumYard
          </h1>
        </Link>
        {/* RIGHT */}
        <div className="flex items-center gap-8 font-mono font-semibold">
          {navLinks.map((link) => (
            <Link key={link.title} href={link.link}>
              <p className="text-background">{cap(link.title)}</p>
            </Link>
          ))}
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
