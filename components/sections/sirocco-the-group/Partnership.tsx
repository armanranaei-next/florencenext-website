import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Headline } from '@/components/Headline';
import type { SiroccoGroupPartnershipContent } from '@/content/types';

const HEADING_ID = 'sirocco-partnership-heading';

export function Partnership({
  headline,
  paragraphs,
  illustration,
}: SiroccoGroupPartnershipContent) {
  return (
    <Section theme="light" spacing="lg" aria-labelledby={HEADING_ID}>
      <Container>
        {/* Below xl: stack with text on top, illustration at bottom (flex + order).
            xl+: 2-col grid, illustration left, text right.
            Production switches at lg (1024) and the text column gets cramped at
            1025–1279 — push to xl so the text keeps a comfortable measure. */}
        <div className="flex flex-col gap-12 xl:grid xl:grid-cols-[2fr_3fr] xl:gap-16 xl:items-center">
          <div className="order-last xl:order-none">
            <Image
              src={illustration.src}
              alt={illustration.alt}
              width={illustration.width}
              height={illustration.height}
              sizes="(min-width: 1280px) 32rem, (min-width: 1024px) 42rem, (min-width: 768px) 36rem, 28rem"
              className="mx-auto h-auto w-full max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-lg"
            />
          </div>
          <div className="order-first xl:order-none">
            <Headline
              as="h2"
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
        </div>
      </Container>
    </Section>
  );
}
