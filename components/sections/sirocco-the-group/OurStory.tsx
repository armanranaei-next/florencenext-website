import Image from 'next/image';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Headline } from '@/components/Headline';
import type { SiroccoGroupOurStoryContent } from '@/content/types';

const HEADING_ID = 'sirocco-our-story-heading';

export function OurStory({
  breadcrumb,
  headline,
  paragraphs,
  illustration,
}: SiroccoGroupOurStoryContent) {
  return (
    <>
      <Breadcrumb items={breadcrumb} />
      <Section theme="light" spacing="lg" aria-labelledby={HEADING_ID}>
        <Container>
          <div className="lg:grid lg:grid-cols-[3fr_2fr] lg:gap-16 lg:items-center">
            <div>
              <Headline
                as="h1"
                id={HEADING_ID}
                tokens={headline}
                className="text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-brand-navy"
              />
              <div className="mt-8 md:mt-10 max-w-prose space-y-6 text-lg leading-relaxed font-normal text-brand-navy">
                {paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <Image
                src={illustration.src}
                alt={illustration.alt}
                width={illustration.width}
                height={illustration.height}
                sizes="(min-width: 1024px) 28rem, (min-width: 768px) 24rem, 18rem"
                className="mx-auto h-auto w-full max-w-[18rem] md:max-w-sm lg:max-w-md"
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
