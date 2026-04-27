"use client";

import { useState } from "react";
import { ArrowRight, Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Service } from "@/content/types";

interface ServicesAccordionProps {
  services: Service[];
  ctaLabel: string;
  ctaHref: string;
}

const OPEN_BG = "#14171F";
const OPEN_TITLE = "#CAC0A9";

export function ServicesAccordion({
  services,
  ctaLabel,
  ctaHref,
}: ServicesAccordionProps) {
  const [activeId, setActiveId] = useState<string | null>(
    services[0]?.id ?? null,
  );

  return (
    <div>
      <ul className="space-y-3">
        {services.map((service) => {
          const isActive = activeId === service.id;
          const panelId = `service-panel-${service.id}`;

          return (
            <li key={service.id}>
              <article
                className={cn(
                  "rounded-[28px] transition-colors duration-300",
                  isActive ? "" : "card-stacked bg-white",
                )}
                style={isActive ? { backgroundColor: OPEN_BG } : undefined}
              >
                <button
                  type="button"
                  aria-expanded={isActive}
                  aria-controls={panelId}
                  onClick={() =>
                    setActiveId((current) =>
                      current === service.id ? null : service.id,
                    )
                  }
                  className="flex w-full items-start justify-between gap-4 px-7 py-6 text-left lg:px-9 lg:py-7"
                >
                  <h3
                    className="text-2xl font-medium leading-[1.15] tracking-[-0.01em] transition-colors duration-300 lg:text-[28px]"
                    style={{
                      color: isActive ? OPEN_TITLE : undefined,
                    }}
                  >
                    {service.title}
                  </h3>
                  <span
                    aria-hidden
                    className={cn(
                      "mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center transition-colors duration-300",
                      isActive ? "text-brand-cream" : "text-brand-navy",
                    )}
                  >
                    {isActive ? (
                      <X className="h-6 w-6" strokeWidth={1.5} />
                    ) : (
                      <Plus className="h-6 w-6" strokeWidth={1.5} />
                    )}
                  </span>
                </button>

                <div
                  id={panelId}
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isActive ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col gap-6 px-7 pb-7 lg:px-9 lg:pb-8">
                      <p className="text-base font-light leading-relaxed text-brand-cream">
                        {service.description}
                      </p>
                      <ul className="flex flex-wrap gap-2 sm:gap-2.5">
                        {service.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full border border-brand-cream/35 px-4 py-1.5 text-sm font-light text-brand-cream"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>

      <a
        href={ctaHref}
        className="mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-brand-navy p-1.5 pr-5 text-sm font-medium text-white transition-[gap] duration-200 hover:gap-4 sm:mt-12"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-cyan">
          <ArrowRight className="h-5 w-5" strokeWidth={2.25} aria-hidden />
        </span>
        {ctaLabel}
      </a>
    </div>
  );
}
