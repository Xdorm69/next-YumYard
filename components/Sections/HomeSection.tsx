import Image from "next/image";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export const heroImgLink =
  "https://images.pexels.com/photos/7717466/pexels-photo-7717466.jpeg";

export default function HomeSection() {
  return (
    <section className="bg-gradient-to-tr from-primary to-[#bace37]">
      <div className="h-screen w-full relative overflow-hidden cont">
        <div className="flex items-center justify-between ">
          {/* LEFT  */}
          <div className="flex flex-col gap-6 h-screen justify-center items-start text-left w-1/3">
            <h1 className="text-[7.5rem] text-background font-bold font-mono tracking-tighter leading-26">
              Brownie <br /> Magic
            </h1>
            <p className="text-3xl font-sans font-light mt-3 text-background">
              5 tips to make best brownie in the game
            </p>
            <Separator className="w-1/2 h-2" />

            <div className="flex items-center justify-between w-full">
              <div className="flex gap-4">
                <Button className="rounded-full" variant={"outline"}>
                  How to
                </Button>
                <Button className="rounded-full" variant={"outline"}>
                  Cook
                </Button>
              </div>
              <Button className="rounded-full bg-foreground/40 text-background font-mono text-xl">
                Read Now
              </Button>
            </div>
          </div>
          {/* RIGHT  */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-24">
            <div className="overflow-hidden rounded-full w-[900px] h-[500px] relative">
              <Image
                src={heroImgLink}
                alt="hero"
                fill
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
