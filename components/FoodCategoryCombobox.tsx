"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useFilterContext } from "@/components/Contexts/FilterContext";

type FoodCategoryType = "veg" | "non-veg" | "eggiterian" | "vegan" | "";

export function FoodCategoryCombobox() {
  const foods: { value: FoodCategoryType; label: string }[] = [
    { value: "veg", label: "Veg" },
    { value: "non-veg", label: "Non-Veg" },
    { value: "eggiterian", label: "Eggeterian" },
    { value: "vegan", label: "Vegan" },
  ];

  const [open, setOpen] = React.useState(false);
  const { foodCategory, setFoodCategory } = useFilterContext();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between shadow-xl text-foreground"
        >
          {foodCategory
            ? foods.find((food) => food.value === foodCategory)?.label
            : "Select food category..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] lg:w-[300px] p-0 shadow-xl text-foreground">
        <Command>
          <CommandInput placeholder="Search..." className="h-9" />
          <CommandList>
            <CommandEmpty>No match found.</CommandEmpty>
            <CommandGroup>
              {foods.map((food) => (
                <CommandItem
                  key={food.value}
                  value={food.value}
                  onSelect={(currentValue) => {
                    const newValue = currentValue as FoodCategoryType;
                    setFoodCategory(newValue === foodCategory ? "" : newValue);
                    setOpen(false);
                  }}
                  className={cn(
                    "cursor-pointer text-foreground hover:bg-accent hover:text-foreground"
                  )}
                >
                  {food.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      foodCategory === food.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
