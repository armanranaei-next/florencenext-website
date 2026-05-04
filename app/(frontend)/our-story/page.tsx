import { Hero } from '@/components/sections/our-story/Hero';
import { Origins } from '@/components/sections/our-story/Origins';
import { Stats } from '@/components/sections/our-story/Stats';
import { ConnectCta } from '@/components/sections/our-story/ConnectCta';
import { Partnership } from '@/components/sections/our-story/Partnership';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ourStoryContent } from '@/content/our-story';

export default function OurStoryPage() {
  return (
    <>
      <Hero {...ourStoryContent.hero} />
      <div className="bg-white">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Our Story' }]} />
        <Origins {...ourStoryContent.origins} />
      </div>
      <Stats {...ourStoryContent.stats} />
      <ConnectCta {...ourStoryContent.connect} />
      <Partnership {...ourStoryContent.partnership} />
    </>
  );
}
