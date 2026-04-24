import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import type {
  Partner,
  PartnersContent,
  PartnersCtaCard,
} from "@/content/types";

interface PartnersProps {
  content: PartnersContent;
}

export function Partners({ content }: PartnersProps) {
  return (
    <Section spacing="lg">
      <Container>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {content.partners.map((partner) => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
          <CtaCard card={content.ctaCard} />
        </div>
      </Container>
    </Section>
  );
}

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <article className="card-stacked flex flex-col gap-6 rounded-[28px] bg-brand-cream p-8 lg:p-10">
      <div className="flex h-12 items-center">
        <Image
          src={partner.logoSrc}
          alt={partner.logoAlt}
          width={partner.logoWidth}
          height={partner.logoHeight}
          className="h-auto max-h-12 w-auto object-contain"
        />
      </div>
      <h3 className="text-2xl font-medium leading-[1.15] tracking-[-0.01em] text-brand-navy lg:text-[28px]">
        {partner.title}
      </h3>
      <p className="text-base leading-relaxed text-brand-navy/75">
        {partner.description}
      </p>
    </article>
  );
}

function CtaCard({ card }: { card: PartnersCtaCard }) {
  return (
    <article className="card-stacked relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[28px]">
      <Image
        src={card.imageSrc}
        alt={card.imageAlt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="relative flex flex-col gap-6 p-8 text-white lg:p-10">
        <h3 className="whitespace-pre-line text-3xl font-medium leading-[1.1] lg:text-[32px]">
          {card.headline}
        </h3>
        <a
          href={card.ctaHref}
          className="inline-flex w-fit items-center gap-3 rounded-2xl bg-brand-navy p-1.5 pr-5 text-sm font-medium text-white transition hover:bg-brand-navy/90"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-cyan">
            <ArrowRight className="h-5 w-5" strokeWidth={2.25} />
          </span>
          {card.ctaLabel}
        </a>
      </div>
    </article>
  );
}
