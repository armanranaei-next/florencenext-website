import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ServicesAccordion } from "@/components/sections/ServicesAccordion";
import type { ServicesSection } from "@/content/types";

interface ServicesProps {
  content: ServicesSection;
}

export function Services({ content }: ServicesProps) {
  return (
    <Section theme="cream" spacing="lg">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12 xl:gap-20">
          <div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-cyan px-4 py-1.5 text-sm font-medium text-brand-cream">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-cream" />
              {content.eyebrow}
            </span>

            <h2 className="mt-6 text-[clamp(2rem,5.5vw,4.75rem)] font-medium leading-[1.05] tracking-tight text-brand-navy">
              {content.headline.map((token, i) => (
                <span
                  key={i}
                  className={token.highlight ? "text-brand-cyan" : undefined}
                >
                  {token.text}
                </span>
              ))}
            </h2>

            <div className="mt-10 lg:mt-12">
              <ServicesAccordion
                services={content.services}
                ctaLabel={content.ctaLabel}
                ctaHref={content.ctaHref}
              />
            </div>
          </div>

          <div className="lg:flex lg:items-center lg:justify-center">
            <Image
              src="/services-astronaut.svg"
              alt=""
              width={719}
              height={592}
              className="mx-auto h-auto w-full max-w-[560px]"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
