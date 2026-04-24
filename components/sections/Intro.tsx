import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import type { IntroContent } from "@/content/types";

interface IntroProps {
  content: IntroContent;
}

export function Intro({ content }: IntroProps) {
  return (
    <Section spacing="lg">
      <Container>
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-cyan px-4 py-1.5 text-sm font-medium text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
          {content.eyebrow}
        </span>

        <h2 className="mt-6 max-w-[18ch] text-[clamp(2rem,6vw,5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-brand-navy">
          {content.headline.map((token, i) => (
            <span
              key={i}
              className={token.highlight ? "text-brand-cyan" : undefined}
            >
              {token.text}
            </span>
          ))}
        </h2>

        <div className="mt-8 max-w-[60ch] space-y-4 text-base leading-relaxed text-brand-navy/80 md:text-lg">
          {content.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Container>
    </Section>
  );
}
