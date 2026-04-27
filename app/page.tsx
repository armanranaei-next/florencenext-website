import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Partners } from "@/components/sections/Partners";
import { Results } from "@/components/sections/Results";
import { Services } from "@/components/sections/Services";
import { homeContent } from "@/content/home";

export default function HomePage() {
  return (
    <>
      <Hero content={homeContent.hero} />
      <Intro content={homeContent.intro} />
      <Partners content={homeContent.partners} />
      <Results content={homeContent.results} />
      <Services content={homeContent.services} />
    </>
  );
}
