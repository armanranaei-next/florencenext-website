import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/sections/ProjectCard";
import type { ProjectsSection } from "@/content/types";

interface ProjectsProps {
  content: ProjectsSection;
}

export function Projects({ content }: ProjectsProps) {
  return (
    <Section spacing="lg">
      <Container>
        <header>
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

          <p className="mt-4 max-w-md text-base text-brand-navy/70">
            {content.subhead}
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2 md:gap-5 lg:mt-20 lg:grid-cols-3 lg:gap-6">
          {content.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
