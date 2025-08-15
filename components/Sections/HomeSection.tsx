import HeroText from "../HeroText";
import HeroImage from "../HeroImage";

export const heroImgLink =
  "https://images.pexels.com/photos/7717466/pexels-photo-7717466.jpeg";

export default function HomeSection() {
  return (
    <section className="bg-[url('https://images.pexels.com/photos/7717466/pexels-photo-7717466.jpeg')] bg-cover bg-center lg:bg-gradient-to-tr from-primary to-[#bace37] w-full">
      <div className="h-screen w-full relative overflow-hidden cont">
        <div className="flex items-center justify-between ">
          {/* LEFT  */}
          <HeroText />
          {/* RIGHT  */}
          <HeroImage/>
        </div>
      </div>
    </section>
  );
}
