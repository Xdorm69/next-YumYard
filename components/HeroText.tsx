"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Button } from "./ui/button";

export default function HeroText() {
  const container = useRef<HTMLDivElement>(null);
  const topHeading = useRef<HTMLHeadingElement>(null);
  const bottomHeading = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    if (container.current) {
      tl.fromTo(
        container.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 }
      );
    }

    if (topHeading.current) {
      const letters = topHeading.current.querySelectorAll("span");
      tl.fromTo(
        letters,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: "power2.out" },
        "<+0.2"
      );
    }

    if (bottomHeading.current) {
      tl.fromTo(
        bottomHeading.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.55"
      );
    }

    tl.fromTo(
      ".sep",
      { width: 0 },
      { width: "100%", duration: 0.5, ease: "power2.out" },
      "-=0.55"
    );

    tl.fromTo(".btn", {y: 100}, {y: 0, duration: 0.5, ease: "power1.out", stagger: 0.1}, "-=0.7")
  });

  const text = "Brownie Magic";

  return (
    <div
      ref={container}
      className="flex flex-col gap-6 h-screen justify-center sm:items-start text-left min-w-[250px] w-1/3"
    >
      <div
        ref={topHeading}
        className="text-[3.82rem]  lg:text-[5rem] xl:text-[5.7rem] text-background font-bold font-mono tracking-tighter leading-16 sm:leading-18 md:leading-20"
      >
        {text.split(" ").map((word, i) => (
          <h1 key={i} className="">
            {word.split("").map((char, j) => (
              <span key={j} className="inline-block">
                {char}
              </span>
            ))}
          </h1>
        ))}
      </div>
      <div className="overflow-hidden">
        <p
          ref={bottomHeading}
          className="text-3xl font-sans font-light mt-3 text-background"
        >
          5 tips to make best brownie in the game
        </p>
      </div>
      {/* SEPERATOR  */}
      <div className="w-full sep h-1 bg-white/40 rounded-full" />
      {/* BUTTONS  */}
      <div className="flex items-center justify-between w-full overflow-hidden">
        <div className="flex gap-4">
          <Button className="rounded-full btn" variant={"outline"}>
            How to
          </Button>
          <Button className="rounded-full btn" variant={"outline"}>
            Cook
          </Button>
        </div>
        <Button className="hidden lg:flex btn items-center justify-center rounded-full bg-foreground/40 text-background font-mono text-lg">
          Read Now
        </Button>
      </div>
    </div>
  );
}
