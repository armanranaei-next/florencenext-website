import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Partners } from "@/components/sections/Partners";
import { homeContent } from "@/content/home";

export default function HomePage() {
  return (
    <>
      <Hero content={homeContent.hero} />
      <Intro content={homeContent.intro} />
      <Partners content={homeContent.partners} />
    </>
  );
}
