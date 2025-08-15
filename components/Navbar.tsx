"use client";

import React, { useEffect, useRef, useState } from "react";
import { ModeToggle } from "./ui/ModeToggle";
import Link from "next/link";
import { cap } from "@/lib/cap";
import { Menu } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

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
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const menuContainer = useRef<HTMLDivElement>(null);

  const navRef = useRef<HTMLDivElement>(null);

  const menuIcon = useRef<HTMLDivElement>(null);

  const tl = useRef<gsap.core.Timeline>(null);

  useGSAP(
    () => {
      const links = menuContainer.current?.querySelectorAll(".nav-link");

      if (links) {
        tl.current = gsap
          .timeline({ paused: true })
          .fromTo(
            menuIcon.current,
            { rotate: 0 },
            { rotate: 180, duration: 0.2, ease: "power3.out" }
          )
          // menu container reveal
          .fromTo(
            menuContainer.current,
            { opacity: 0, y: -16 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
          )
          // links reveal with clip-path
          .fromTo(
            links,
            {
              clipPath: "inset(0 0 100% 0)", // hidden from bottom
              opacity: 0,
            },
            {
              clipPath: "inset(0 0 0% 0)", // fully visible
              opacity: 1,
              duration: 0.6,
              ease: "power2.out",
              stagger: 0.12,
            },
            "-=0.2" // overlap slightly with menu reveal
          );
      }
    },
    { scope: navRef }
  );

  useEffect(() => {
    if (menuOpen) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [menuOpen]);

  return (
    <nav
      ref={navRef}
      className="absolute top-0 left-1/2 -translate-x-1/2 w-full z-10 bg-transparent"
    >
      <div className="relative cont flex items-center justify-between py-4 w-full sm:w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-[calc(100%-6rem)]">
        {/* LEFT */}
        <Link href={"/"}>
          <h1 className="text-2xl font-mono font-bold text-background">
            YumYard
          </h1>
        </Link>
        {/* RIGHT */}
        <div className="flex items-center gap-8 font-mono font-semibold">
          {navLinks.map((link) => (
            <Link key={link.title} href={link.link} className="hidden md:block">
              <p className="text-background">{cap(link.title)}</p>
            </Link>
          ))}
          <div ref={menuIcon} className="md:hidden relative">
            <Menu
              onClick={() => setMenuOpen((prev) => !prev)}
              className="text-background size-8"
            />
          </div>

          <div
            ref={menuContainer}
            className="menu absolute rounded-xl shadow-xl top-16 right-0 px-20 py-4 bg-gradient-to-b from-primary to-[#bace37] opacity-0 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="block p-4 nav-link font-mono font-semibold" // added nav-link for GSAP targeting
              >
                <p className="text-background">{cap(link.title)}</p>
              </Link>
            ))}
          </div>

          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="text-background px-2 py-1 bg-primary rounded-md shadow">
              <SignInButton />
            
            </div>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
