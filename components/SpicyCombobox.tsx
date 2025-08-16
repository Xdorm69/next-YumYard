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

type SpiceLevelType = "low" | "mid" | "high" | "";

export function SpicyCombobox() {
  const spices: { value: SpiceLevelType; label: string }[] = [
    { value: "low", label: "Low spice" },
    { value: "mid", label: "Medium spice" },
    { value: "high", label: "High spice" },
  ];

  const [open, setOpen] = React.useState(false);
  const { spiceLevel, setSpiceLevel } = useFilterContext();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between shadow-xl text-foreground"
        >
          {spiceLevel
            ? spices.find((spice) => spice.value === spiceLevel)?.label
            : "Select spice level..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] lg:w-[300px] p-0 shadow-xl text-foreground">
        <Command>
          <CommandInput placeholder="Search..." className="h-9" />
          <CommandList>
            <CommandEmpty>No match found.</CommandEmpty>
            <CommandGroup>
              {spices.map((spice) => (
                <CommandItem
                  key={spice.value}
                  value={spice.value}
                  onSelect={(currentValue) => {
                    const newValue = currentValue as SpiceLevelType;
                    setSpiceLevel(newValue === spiceLevel ? "" : newValue);
                    setOpen(false);
                  }}
                  className={cn(
                    "cursor-pointer text-foreground hover:bg-accent hover:text-foreground"
                  )}
                >
                  {spice.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      spiceLevel === spice.value ? "opacity-100" : "opacity-0"
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
