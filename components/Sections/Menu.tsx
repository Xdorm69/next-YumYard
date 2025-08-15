import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-dropdown-menu";
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
import { ReactNode } from "react";
import { Card, CardContent, CardTitle } from "../ui/card";

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

export const indianFoods: IndianFoodArrayType[] = [
  {
    title: "Biryani",
    description:
      "A fragrant rice dish cooked with aromatic spices, saffron, and marinated meat or vegetables, popular across India.",
    img: "https://images.unsplash.com/photo-1708184528306-f75a0a5118ee?q=80&w=1110&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Masala Dosa",
    description:
      "A thin, crispy South Indian crepe made from fermented rice and lentil batter, stuffed with spicy potato filling.",
    img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Butter Chicken",
    description:
      "Tender chicken pieces cooked in a creamy tomato gravy with butter and rich spices, served with naan or rice.",
    img: "https://images.unsplash.com/photo-1728910107534-e04e261768ae?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Pani Puri",
    description:
      "Crispy hollow puris filled with spicy, tangy water, mashed potatoes, and chickpeas — a popular Indian street snack.",
    img: "https://images.unsplash.com/photo-1596522869169-95231d2b6864?q=80&w=1237&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Paneer Tikka",
    description:
      "Chunks of cottage cheese marinated in yogurt and spices, then grilled or roasted for a smoky, flavorful bite.",
    img: "https://images.unsplash.com/photo-1701579231320-cc2f7acad3cd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function MenuSection() {
  return (
    <section className="min-h-screen bg-white py-16">
      <div className="cont">
        {/* TOP HEADING  */}
        <Heading top="in my" main="kitchen" />
        <div className="mt-4 grid grid-cols-7 space-x-4">
          {topItems.map((item: TopItemType, id) => (
            <div key={id} className="mt-8">
              <div className="flex flex-col items-center justify-center gap-2 px-2 py-4 rounded-xl shadow bg-secondary">
                <div>{item.icon}</div>
              </div>
              <h1 className="text-center text-primary text-xl font-sans mt-2">
                {item.title}
              </h1>
            </div>
          ))}
        </div>
        {/* BOTTOM HEADING  */}
        <Heading top="in" main="season" reverse className="mt-8" />
        <div className="mt-4 grid grid-cols-5 space-x-8">
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
        <h1 className="uppercase text-7xl font-mono text-primary font-semibold tracking-tight leading-16">
          <span className="text-primary text-3xl font-normal">{top}</span>
          <br />
          {main}
        </h1>
        <Separator className="w-full bg-primary/40 h-1" />
      </div>
    </>
  );
};

export const FoodItemCard = ({ item }: { item: IndianFoodArrayType }) => {
  return (
    <Card className="mt-8 shadow-xl">
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
