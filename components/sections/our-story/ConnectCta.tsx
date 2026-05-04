import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { EyebrowPill } from '@/components/EyebrowPill';
import { Headline } from '@/components/Headline';
import { RichText } from '@/components/RichText';
import { Button } from '@/components/ui/button';
import type { OurStoryConnect } from '@/content/types';

export function ConnectCta({
  eyebrow,
  headline,
  paragraphs,
  cta,
  illustration,
}: OurStoryConnect) {
  return (
    <Section spacing="lg" className="-mt-px bg-brand-charcoal">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="lg:col-span-6">
            <EyebrowPill variant="cream">{eyebrow}</EyebrowPill>

            <Headline
              tokens={headline}
              className="mt-6 text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.1] tracking-tight text-brand-cream"
            />

            <div className="mt-8 max-w-prose space-y-5 text-base md:text-lg font-light leading-relaxed text-brand-cream/85">
              {paragraphs.map((p, i) => (
                <p key={i}>
                  <RichText nodes={p} />
                </p>
              ))}
            </div>

            <Button asChild size="lg" className="mt-12 bg-brand-cyan">
              <Link href={cta.href}>
                <ArrowRight className="size-4" />
                {cta.label}
              </Link>
            </Button>
          </div>

          <div className="lg:col-span-6">
            <Image
              src={illustration.src}
              alt={illustration.alt}
              width={560}
              height={560}
              className="w-full max-w-[480px] mx-auto h-auto lg:max-w-none"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
