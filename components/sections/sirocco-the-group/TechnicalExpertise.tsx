import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { EyebrowPill } from '@/components/EyebrowPill';
import { Headline } from '@/components/Headline';
import { ExpertiseCard } from '@/components/sections/sirocco-the-group/ExpertiseCard';
import type { SiroccoGroupTechnicalExpertiseContent } from '@/content/types';

const HEADING_ID = 'sirocco-technical-expertise-heading';

export function TechnicalExpertise({
  eyebrow,
  headline,
  intro,
  ctaHref,
  ctaLabel,
  cards,
}: SiroccoGroupTechnicalExpertiseContent) {
  return (
    <Section theme="light" spacing="lg" aria-labelledby={HEADING_ID}>
      <Container>
        <div className="max-w-2xl">
          <EyebrowPill>{eyebrow}</EyebrowPill>
          <Headline
            as="h2"
            id={HEADING_ID}
            tokens={headline}
            className="mt-6 text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-brand-navy"
          />
          <p className="mt-6 md:mt-8 text-lg leading-relaxed font-normal text-brand-navy">
            {intro}
          </p>
        </div>
        <div className="mt-12 md:mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {cards.map((card) => (
            <ExpertiseCard
              key={card.id}
              card={card}
              ctaHref={ctaHref}
              ctaLabel={ctaLabel}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
