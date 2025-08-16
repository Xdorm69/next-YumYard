"use client";

import { cn } from "@/lib/utils";
import {
  Coffee,
  Cake,
  Martini,
  ForkKnife,
  Wine,
  Lightbulb,
  Croissant,
} from "lucide-react";
import Image from "next/image";
import { ReactNode, useRef } from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { indianFoods } from "../Data/Menu";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type TopItemType = {
  title: string;
  icon: ReactNode;
};

export type IndianFoodArrayType = {
  title: string;
  description: string;
  img: string;
};

const topItems: TopItemType[] = [
  { title: "Breakfast", icon: <Coffee className="h-12 w-12 text-primary" /> },
  { title: "Baking", icon: <Cake className="h-12 w-12 text-primary" /> },
  { title: "Cocktails", icon: <Martini className="h-12 w-12 text-primary" /> },
  { title: "Dinners", icon: <ForkKnife className="h-12 w-12 text-primary" /> },
  { title: "Pasta", icon: <Croissant className="h-12 w-12 text-primary" /> },
  { title: "Wines", icon: <Wine className="h-12 w-12 text-primary" /> },
  { title: "Tips", icon: <Lightbulb className="h-12 w-12 text-primary" /> },
];

export default function MenuSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const bottomHeadingRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        end: "bottom 30%",
        scrub: true,
        once: true
      },
    });

    const smallText = headingRef.current?.querySelector(".heading-small");
    const mainText = headingRef.current?.querySelector(".heading-main");
    const separator = headingRef.current?.querySelector(".heading-separator");

    if (smallText) {
      gsap.set(smallText, { x: 100, opacity: 0 });
      tl.to(smallText, { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" });
    }

    if (mainText) {
      const chars = mainText.textContent?.split("") || [];
      mainText.innerHTML = chars
        .map(
          (c) => `<span class="char inline-block overflow-hidden">${c}</span>`
        )
        .join("");

      tl.to(
        mainText.querySelectorAll(".char"),
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: "power3.out",
        },
        ">-0.1"
      );
      gsap.set(mainText.querySelectorAll(".char"), {
        yPercent: 100,
        opacity: 0,
      });
    }

    if (separator) {
      gsap.set(separator, { width: 0, transformOrigin: "left center" });
      tl.to(
        separator,
        { width: "70%", duration: 0.4, ease: "power2.out" },
        ">-0.6"
      );
    }
    tl.fromTo(
      ".top-items",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
      "<+0.2"
    );

    // ======================
    // BOTTOM HEADING ANIMATION
    // ======================
    if (bottomHeadingRef.current) {
      const smallBottom =
        bottomHeadingRef.current.querySelector(".heading-small");
      const mainBottom =
        bottomHeadingRef.current.querySelector(".heading-main");
      const separatorBottom =
        bottomHeadingRef.current.querySelector(".heading-separator");

      const tlBottom = gsap.timeline({
        scrollTrigger: {
          trigger: bottomHeadingRef.current,
          start: "top 80%",
          end: "bottom 30%",
          scrub: true,
          once: true,
        },
      });

      if (smallBottom) {
        gsap.set(smallBottom, { x: 100, opacity: 0 });
        tlBottom.to(smallBottom, {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        });
      }

      if (mainBottom) {
        const charsBottom = mainBottom.textContent?.split("") || [];
        mainBottom.innerHTML = charsBottom
          .map(
            (c) => `<span class="char inline-block overflow-hidden">${c}</span>`
          )
          .join("");

        gsap.set(mainBottom.querySelectorAll(".char"), {
          yPercent: 100,
          opacity: 0,
        });

        tlBottom.to(
          mainBottom.querySelectorAll(".char"),
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.05,
            ease: "power3.out",
          },
          ">-0.1"
        );
      }

      if (separatorBottom) {
        gsap.set(separatorBottom, {
          width: 0,
          transformOrigin: "right center",
        });
        tlBottom.to(
          separatorBottom,
          { width: "70%", duration: 0.4, ease: "power2.out" },
          
        );
      }
      tlBottom.fromTo(".btm-items", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }, "<+0.2");
    }
  }, []);
  return (
    <section className="min-h-screen bg-white py-16">
      <div className="cont">
        {/* TOP HEADING  */}
        <div ref={headingRef}>
          <Heading top="in my" main="kitchen" />
        </div>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 space-x-4">
          {topItems.map((item: TopItemType, id) => (
            <div key={id} className="mt-8 top-items">
              <div className="flex flex-col items-center justify-center gap-2 px-2 py-4 rounded-xl shadow bg-secondary">
                <div>{item.icon}</div>
              </div>
              <h1 className="text-center text-primary text-xl font-sans mt-2">
                {item.title}
              </h1>
            </div>
          ))}
        </div>
        {/* BOTTOM HEADING */}
        <div ref={bottomHeadingRef} className="bottom-heading">
          <Heading top="in" main="season" reverse className="mt-8" />
        </div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {indianFoods.map((item: IndianFoodArrayType, id) => (
            <FoodItemCard item={item} key={id} />
          ))}
        </div>
      </div>
    </section>
  );
}

type HeadingProps = {
  top: string;
  main: string;
  reverse?: boolean;
  className?: string;
};

const Heading = ({ top, main, reverse, className }: HeadingProps) => {
  return (
    <>
      <div
        className={cn(
          "flex items-center gap-8",
          reverse && "flex-row-reverse",
          className
        )}
      >
        <div className="uppercase text-7xl font-mono text-primary font-semibold tracking-tight leading-16">
          <span className="heading-small inline-block text-primary text-3xl font-normal">
            {top}
          </span>

          <br />
          <span className="heading-main inline-block">{main}</span>
        </div>
        <div className="heading-separator w-full bg-primary/40 h-1" />
      </div>
    </>
  );
};

export const FoodItemCard = ({ item }: { item: IndianFoodArrayType }) => {
  return (
    <Card className="mt-8 shadow-xl w-full overflow-hidden btm-items">
      <CardTitle>
        <div className="h-[150px]">
          <Image
            src={item.img}
            alt={item.title}
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
      </CardTitle>
      <CardContent>
        <h1 className="text-xl font-semibold">{item.title}</h1>
        <p className="text-sm mt-2 text-muted-foreground">
          {item.description.slice(0, 72) + "..."}
        </p>
      </CardContent>
    </Card>
  );
};
