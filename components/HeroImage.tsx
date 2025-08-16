"use client";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function HeroImage({ animate }: { animate: boolean }) {

  const imageHolderRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!animate) return;

    gsap.fromTo(
      imageHolderRef.current,
      {
        x: "100%", // start fully off-screen to the right
      },
      {
        x: "10%", // slide into final position
        duration: 1,
        delay: 0.33,
        ease: "power3.out",
      }
    );
  }, [animate]);

  return (
    <div
      ref={imageHolderRef}
      className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-0"
    >
      <div
        className="overflow-hidden rounded-full w-[500px] h-[400px] lg:w-[600px] xl:w-[700px]  2xl:w-[800px] 
          relative"
      >
        <Image
          src={"/hero.jpeg"}
          alt="hero"
          fill
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
