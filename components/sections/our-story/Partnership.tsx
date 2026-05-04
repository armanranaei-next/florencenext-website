import { Award, ClipboardList, TrendingUp, type LucideIcon } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { EyebrowPill } from '@/components/EyebrowPill';
import { Headline } from '@/components/Headline';
import { RichText } from '@/components/RichText';
import { VideoEmbed } from '@/components/VideoEmbed';
import type { OurStoryPartnership } from '@/content/types';

const ICONS: Record<OurStoryPartnership['features'][number]['icon'], LucideIcon> = {
  results: ClipboardList,
  growth: TrendingUp,
  quality: Award,
};

export function Partnership({
  eyebrow,
  headline,
  video,
  body,
  features,
}: OurStoryPartnership) {
  return (
    <Section theme="light" spacing="lg">
      <Container>
        <div className="max-w-4xl">
          <EyebrowPill>{eyebrow}</EyebrowPill>
          <Headline
            tokens={headline}
            className="mt-6 text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.1] tracking-tight text-brand-navy"
          />
        </div>

        <div className="mt-12 md:mt-16">
          <VideoEmbed {...video} />
        </div>

        <div className="mt-12 md:mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16 text-base md:text-lg font-light leading-relaxed text-brand-navy/85">
          <div className="space-y-6">
            {body.left.map((p, i) => (
              <p key={i}><RichText nodes={p} /></p>
            ))}
          </div>
          <div className="space-y-6">
            {body.right.map((p, i) => (
              <p key={i}><RichText nodes={p} /></p>
            ))}
          </div>
        </div>

        <div className="mt-20 md:mt-24 grid gap-12 md:grid-cols-3 md:gap-8">
          {features.map((f) => (
            <FeatureItem key={f.title} {...f} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function FeatureItem({
  icon,
  title,
  description,
}: OurStoryPartnership['features'][number]) {
  const Icon = ICONS[icon];
  return (
    <div className="flex flex-col items-center text-center">
      <div className="card-stacked size-16 rounded-2xl bg-brand-cream flex items-center justify-center">
        <Icon className="size-7 text-brand-navy" strokeWidth={1.75} />
      </div>
      <h3 className="mt-6 text-lg md:text-xl font-medium text-brand-cyan">{title}</h3>
      <p className="mt-3 max-w-sm text-base font-light text-brand-navy/75">
        {description}
      </p>
    </div>
  );
}
