import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { EyebrowPill } from '@/components/EyebrowPill';
import { Headline } from '@/components/Headline';
import { RichText } from '@/components/RichText';
import type { OurStoryOrigins } from '@/content/types';

export function Origins({
  eyebrow,
  headline,
  paragraphs,
  standout,
  illustration,
}: OurStoryOrigins) {
  return (
    <Section theme="light" spacing="lg">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <EyebrowPill>{eyebrow}</EyebrowPill>

            <Headline
              tokens={headline}
              className="mt-6 text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.1] tracking-tight text-brand-navy"
            />

            <div className="mt-8 max-w-prose space-y-5 text-base md:text-lg font-light leading-relaxed text-brand-navy/85">
              {paragraphs.map((p, i) => (
                <p key={i}>
                  <RichText nodes={p} />
                </p>
              ))}
            </div>

            <p className="mt-12 md:mt-14 max-w-prose text-[clamp(1.125rem,1.6vw,1.5rem)] font-medium leading-snug text-brand-navy">
              {standout}
            </p>
          </div>

          <div className="lg:col-span-5 lg:flex lg:items-center">
            <Image
              src={illustration.src}
              alt={illustration.alt}
              width={520}
              height={520}
              className="w-full max-w-[480px] mx-auto h-auto lg:mx-0 lg:ml-auto"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

