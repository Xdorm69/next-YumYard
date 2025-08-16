import FilterContextProvider from "@/components/Contexts/FilterContext";
import FilterArticlesSection from "@/components/Sections/FilterArticlesSection";
import HomeSection from "@/components/Sections/HomeSection";
import MenuSection from "@/components/Sections/Menu";
import WeeklyDigestSection from "@/components/Sections/WeeklyDigestSection";

export default function Page() {
  return (
    <main>
      <HomeSection />
      <MenuSection />

      <FilterContextProvider>
        <FilterArticlesSection />
      </FilterContextProvider>

      <WeeklyDigestSection />
    </main>
  );
}
