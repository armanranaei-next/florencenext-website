import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { ExpertiseCard as ExpertiseCardData } from '@/content/types';

interface Props {
  card: ExpertiseCardData;
  ctaHref: string;
  ctaLabel: string;
}

export function ExpertiseCard({ card, ctaHref, ctaLabel }: Props) {
  const titleId = `expertise-card-${card.id}-title`;
  return (
    <article
      aria-labelledby={titleId}
      className="card-stacked flex h-full flex-col rounded-2xl bg-brand-cream p-6 md:p-8"
    >
      <div className="flex h-20 items-center">
        <Image
          src={card.logo.src}
          alt={card.logo.alt}
          width={card.logo.width}
          height={card.logo.height}
          className="h-auto w-auto max-h-12 md:max-h-14 max-w-full object-contain"
        />
      </div>
      <h3
        id={titleId}
        className="mt-6 text-balance text-xl md:text-2xl font-medium leading-tight tracking-tight text-brand-navy"
      >
        {card.title}
      </h3>
      <p className="mt-3 text-base leading-relaxed text-brand-navy/85">
        {card.blurb}
      </p>
      <div className="mt-auto pt-6">
        <Link
          href={ctaHref}
          className="inline-flex w-fit items-center gap-3 rounded-full bg-brand-navy p-1.5 pr-5 text-sm font-medium text-white transition-[gap] duration-200 hover:gap-4"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-cyan">
            <ArrowRight className="h-5 w-5" strokeWidth={2.25} aria-hidden />
          </span>
          {ctaLabel}
        </Link>
      </div>
    </article>
  );
}
