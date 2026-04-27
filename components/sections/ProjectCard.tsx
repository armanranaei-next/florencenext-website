import Image from "next/image";
import type { Project } from "@/content/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.href}
      className="group block overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1"
    >
      <div
        style={{ backgroundColor: project.bgColor }}
        className="flex aspect-[5/7] flex-col"
      >
        <div className="flex flex-1 items-center justify-center p-8">
          <Image
            src={project.logoSrc}
            alt={`${project.brand} logo`}
            width={project.logoWidth}
            height={project.logoHeight}
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            style={{ maxHeight: project.logoMaxHeight ?? 48 }}
            className="h-auto w-auto max-w-[60%] object-contain"
          />
        </div>
        <div className="border-t border-white/10 bg-white/[0.03] p-5 lg:p-6">
          <h3 className="text-base font-medium leading-tight text-white lg:text-lg">
            {project.brand} — {project.projectName}
          </h3>
          <p className="mt-1 text-xs font-light text-white/70 lg:text-sm">
            {project.category}
          </p>
        </div>
      </div>
    </a>
  );
}
