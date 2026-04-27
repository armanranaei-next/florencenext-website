import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import type { TestimonialsSection } from "@/content/types";

interface TestimonialsProps {
  content: TestimonialsSection;
}

export function Testimonials({ content }: TestimonialsProps) {
  return (
    <Section theme="cream" spacing="lg">
      <Container>
        <TestimonialsCarousel
          testimonials={content.testimonials}
          illustrationSrc={content.illustrationSrc}
        />
      </Container>
    </Section>
  );
}
