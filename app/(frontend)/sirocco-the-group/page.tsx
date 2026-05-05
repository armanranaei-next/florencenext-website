import { Hero } from '@/components/sections/sirocco-the-group/Hero';
import { OurStory } from '@/components/sections/sirocco-the-group/OurStory';
import { Partnership } from '@/components/sections/sirocco-the-group/Partnership';
import { TechnicalExpertise } from '@/components/sections/sirocco-the-group/TechnicalExpertise';
import { siroccoTheGroupContent } from '@/content/sirocco-the-group';

export default function SiroccoTheGroupPage() {
  return (
    <>
      <Hero {...siroccoTheGroupContent.hero} />
      <OurStory {...siroccoTheGroupContent.ourStory} />
      <Partnership {...siroccoTheGroupContent.partnership} />
      <TechnicalExpertise {...siroccoTheGroupContent.technicalExpertise} />
    </>
  );
}
