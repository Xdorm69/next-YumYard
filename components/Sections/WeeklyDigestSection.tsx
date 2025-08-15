import Image from "next/image";
import { heroImgLink } from "./HomeSection";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";

export default function WeeklyDigestSection() {
    return (
        <section className="min-h-screen py-16">
            <div className="cont">
                {/* HEADING  */}
                <div className="w-[67%] flex items-center gap-24">
                    <div className="h-1 w-full bg-primary/40" />
                    <div className="text-primary font-mono">
                        <p className="font-semibold text-2xl uppercase">Weekly</p>
                        <h1 className="font-bold text-6xl  uppercase">Digest</h1>

                        <p className="mt-4">Our weekly digest of the best gifts that will spark joy to every foodie you know</p>
                    </div>
                </div>

                {/* CARDS  */}
                <div className="mt-8">
                    {Array.from({length: 3}).map((_, id) => {
                        return (
                            <DigestCard key={id}/>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

const DigestCard = () => {
    return (
        <div className="w-full rounded-xl shadow-xl px-10 h-[18rem] mt-12 ">
            <div className="flex h-full">
                {/* LEFT  */}
                <div className="w-1/2 h-full flex-1 ">
                    <Image src={heroImgLink} width={500} height={500} alt="digest" className="object-cover w-full h-full" />
                </div>
                {/* RIGHT  */}
                <div className="flex flex-col h-full justify-center text-left flex-1 px-10">
                    <h1 className="text-primary font-semibold text-3xl font-mono">You won&apos;t believe from what these brownies are made of!</h1>

                    <Separator className="bg-primary/40 mt-12 w-full h-1"/>
                    <div className="flex items-center justify-between text-2xl font-mono font-semibold mt-4">
                        <Button className="bg-foreground rounded-full text-background">Buy now</Button>
                        <h1>$19</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}