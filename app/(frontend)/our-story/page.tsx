import { Hero } from '@/components/sections/our-story/Hero';
import { ourStoryContent } from '@/content/our-story';

export default function OurStoryPage() {
  return (
    <>
      <Hero {...ourStoryContent.hero} />
    </>
  );
}
