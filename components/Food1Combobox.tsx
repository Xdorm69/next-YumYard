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

export function Food1Combobox() {
  const foods = [
    { value: "paneer-tikka", label: "Paneer Tikka" },
    { value: "chilli-paneer", label: "Chilli Paneer" },
    { value: "veg-manchurian", label: "Veg Manchurian" },
    { value: "spicy-dal-tadka", label: "Spicy Dal Tadka" },
    { value: "gobi-manchurian", label: "Gobi Manchurian" },
  ];

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between shadow-xl text-foreground"
        >
          {value
            ? foods.find((food) => food.value === value)?.label
            : "Select spicy veg..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 shadow-xl text-foreground">
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
                    setValue(currentValue === value ? "" : currentValue);
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
                      value === food.value ? "opacity-100" : "opacity-0"
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
