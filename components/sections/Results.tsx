import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { AnimatedCounter } from "@/components/sections/AnimatedCounter";
import type { ResultsContent, StatCard as StatCardType } from "@/content/types";

interface ResultsProps {
  content: ResultsContent;
}

export function Results({ content }: ResultsProps) {
  return (
    <Section spacing="lg" theme="navy">
      <Container>
        <div className="lg:max-w-[60%]">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-cyan px-4 py-1.5 text-sm font-medium text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
            {content.eyebrow}
          </span>

          <h2 className="mt-6 text-[clamp(2rem,6vw,5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-white">
            {content.headline.map((token, i) => (
              <span
                key={i}
                className={token.highlight ? "text-brand-cyan" : undefined}
              >
                {token.text}
              </span>
            ))}
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          <div className="relative aspect-square overflow-hidden rounded-[28px]">
            <Image
              src={content.photo.src}
              alt={content.photo.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <StatCard stat={content.stats[0]} />

          <div className="hidden lg:block" aria-hidden="true" />

          <StatCard stat={content.stats[1]} />
          <StatCard stat={content.stats[2]} />

          <div className="relative aspect-square md:col-span-2 md:aspect-[2/1] lg:col-span-1 lg:aspect-square">
            <Image
              src={content.illustration.src}
              alt={content.illustration.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 100vw, 100vw"
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

function StatCard({ stat }: { stat: StatCardType }) {
  return (
    <article className="flex flex-col gap-6 rounded-[28px] bg-white p-8 lg:p-10">
      <div className="flex items-center gap-2 text-sm font-medium text-brand-navy">
        <span className="h-2 w-2 rounded-full bg-brand-cyan" />
        {stat.label}
      </div>
      <div className="text-[clamp(3rem,5vw,5rem)] font-medium leading-none tracking-[-0.02em] text-brand-navy">
        <AnimatedCounter value={stat.value} />
      </div>
      <p className="text-base leading-relaxed text-brand-navy/75">
        {stat.description}
      </p>
    </article>
  );
}
