import FilterArticlesSection from "@/components/Sections/FilterArticlesSection";
import HomeSection from "@/components/Sections/HomeSection";
import MenuSection from "@/components/Sections/Menu";
import WeeklyDigestSection from "@/components/Sections/WeeklyDigestSection";

const page = () => {
  return (
    <main>
      <HomeSection />
      <MenuSection/>
      <FilterArticlesSection/>
      <WeeklyDigestSection/>
    </main>
  );
};



export default page;
