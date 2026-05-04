import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import type { OurStoryHero } from '@/content/types';

export function Hero({ eyebrow, headline, subtitle }: OurStoryHero) {
  return (
    <section className="relative flex items-center overflow-hidden bg-brand-charcoal min-h-[600px] md:min-h-[500px] lg:min-h-0 lg:h-[clamp(420px,45vh,520px)]">
      <Image
        src="/clouds-l.svg"
        alt=""
        aria-hidden
        width={340}
        height={115}
        className="our-story-cloud cloud-float h-auto"
        data-cloud="1"
      />
      <Image
        src="/clouds-l.svg"
        alt=""
        aria-hidden
        width={340}
        height={115}
        className="our-story-cloud cloud-float-delayed h-auto"
        data-cloud="2"
      />
      <Container className="relative z-10">
        <span className="inline-block rounded-full bg-brand-cyan px-4 py-2 text-sm font-medium text-brand-cream mb-6">
          {eyebrow}
        </span>
        <h1 className="font-medium tracking-tight text-brand-cream text-[5rem] md:text-[4.5rem] 2xl:text-[5rem] leading-[1.05]">
          {headline}
        </h1>
        <p className="mt-3 font-medium text-brand-cyan leading-none tracking-[-0.125rem] text-[3.125rem] md:tracking-[-1px] md:text-[2.625rem] 2xl:text-[3.125rem]">
          {subtitle}
        </p>
      </Container>
    </section>
  );
}
