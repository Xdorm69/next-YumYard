import { Food1Combobox } from "../Food1Combobox";
import { FoodItemCard, IndianFoodArrayType } from "./Menu";
import { indianFoods } from "../Data/Menu";

export default function FilterArticlesSection() {
  const count = 8;
  return (
    <section className="bg-white min-h-screen py-16 w-full">
      <div className="cont ">
        {/* TOP  */}
        <div className="flex items-center justify-between w-full">
          <h1 className="font-mono text-2xl font-semibold">Filter Articles</h1>
          <div className="font-mono font-semibold">{count} items</div>
        </div>

        {/* FILTERS  */}
        <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Food1Combobox />
          <Food1Combobox />
        </div>

        {/* RENDERED ITEMS  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {indianFoods
            .concat(indianFoods.slice(0, 3))
            .map((item: IndianFoodArrayType, id) => (
              <FoodItemCard key={id} item={item} />
            ))}
        </div>
      </div>
    </section>
  );
}
