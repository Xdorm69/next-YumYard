"use client";

import { useEffect, useState } from "react";
import HeroText from "../HeroText";
import HeroImage from "../HeroImage";

export default function HomeSection() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => setPageLoaded(true);

    // If page is already loaded (cache), trigger immediately
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <section className="bg-[url('https://images.pexels.com/photos/7717466/pexels-photo-7717466.jpeg')] bg-cover bg-center lg:bg-gradient-to-tr from-primary to-[#bace37] w-full">
      <div className="h-screen w-full relative overflow-hidden cont">
        <div className="flex items-center justify-between">
          {/* LEFT */}
          <HeroText animate={pageLoaded} />
          {/* RIGHT */}
          <HeroImage animate={pageLoaded} />
        </div>
      </div>
    </section>
  );
}
