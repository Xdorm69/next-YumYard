"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

export type SpiceLevelType = "low" | "mid" | "high" | "";
export type FoodCategoryType = "veg" | "non-veg" | "eggiterian" | "vegan" | "";

type FilterContextType = {
  spiceLevel: SpiceLevelType;
  setSpiceLevel: Dispatch<SetStateAction<SpiceLevelType>>;
  foodCategory: FoodCategoryType;
  setFoodCategory: Dispatch<SetStateAction<FoodCategoryType>>;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

type ContextProps = { children: React.ReactNode };

export default function FilterContextProvider({ children }: ContextProps) {
  const [spiceLevel, setSpiceLevel] = useState<SpiceLevelType>("");
  const [foodCategory, setFoodCategory] = useState<FoodCategoryType>("");

  return (
    <FilterContext.Provider
      value={{ spiceLevel, setSpiceLevel, foodCategory, setFoodCategory }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilterContext() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error(
      "useFilterContext must be used within a FilterContextProvider"
    );
  }
  return context;
}
