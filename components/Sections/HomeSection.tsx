import Image from "next/image";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export const heroImgLink =
  "https://images.pexels.com/photos/7717466/pexels-photo-7717466.jpeg";

export default function HomeSection() {
  return (
    <section className="bg-[url('https://images.pexels.com/photos/7717466/pexels-photo-7717466.jpeg')] bg-cover bg-center lg:bg-gradient-to-tr from-primary to-[#bace37] w-full">
      <div className="h-screen w-full relative overflow-hidden cont">
        <div className="flex items-center justify-between ">
          {/* LEFT  */}
          <div className="flex flex-col gap-6 h-screen justify-center sm:items-start text-left min-w-[250px] w-1/3">
            <h1 className="text-[5.2rem] sm:text-[6.7rem] md:text-[7.5rem] text-background font-bold font-mono tracking-tighter leading-20 sm:leading-22 md:leading-26">
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
              <Button className="hidden lg:flex items-center justify-center rounded-full bg-foreground/40 text-background font-mono text-lg">
                Read Now
              </Button>
            </div>
          </div>
          {/* RIGHT  */}
          <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-24">
            <div
              className="overflow-hidden rounded-full w-[500px] h-[400px] lg:w-[600px] xl:w-[700px]  2xl:w-[800px] 
            relative"
            >
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
}
