"use client";

import { useRef, useState, type TouchEvent } from "react";
import Image from "next/image";
import type { Testimonial } from "@/content/types";

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  illustrationSrc: string;
}

const SWIPE_THRESHOLD_PX = 40;

export function TestimonialsCarousel({
  testimonials,
  illustrationSrc,
}: TestimonialsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];
  const canSwipe = testimonials.length > 1;

  const touchStart = useRef<{ x: number; y: number } | null>(null);

  function handleTouchStart(e: TouchEvent<HTMLDivElement>) {
    if (!canSwipe) return;
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  }

  function handleTouchEnd(e: TouchEvent<HTMLDivElement>) {
    if (!canSwipe || !touchStart.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;
    touchStart.current = null;

    const isHorizontal = Math.abs(dx) > Math.abs(dy);
    if (!isHorizontal || Math.abs(dx) < SWIPE_THRESHOLD_PX) return;

    if (dx < 0) {
      setActiveIndex((c) => (c + 1) % testimonials.length);
    } else {
      setActiveIndex((c) => (c - 1 + testimonials.length) % testimonials.length);
    }
  }

  return (
    <div
      className="flex flex-col touch-pan-y md:flex-row md:items-center md:gap-10 lg:gap-16"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="shrink-0 md:w-2/5 lg:w-[42%]">
        <Image
          src={illustrationSrc}
          alt=""
          width={338}
          height={331}
          priority={false}
          className="mx-auto h-auto w-full max-w-[480px] md:max-w-none"
        />
      </div>

      <div className="mt-10 md:mt-0 md:flex-1">
        <blockquote
          className="font-light leading-[1.35] tracking-tight text-brand-navy"
          style={{ fontSize: "clamp(1.25rem, 2.4vw, 2.25rem)" }}
        >
          {active.quote}
        </blockquote>

        <figcaption className="mt-8 flex flex-col lg:mt-10 lg:flex-row lg:items-baseline lg:gap-6">
          <span className="text-base font-medium text-brand-cyan lg:text-lg">
            {active.authorName}
          </span>
          <span className="mt-1 text-sm text-brand-navy/55 lg:mt-0 lg:text-base">
            {active.authorRole}
          </span>
        </figcaption>

        {testimonials.length > 1 && (
          <Dots
            count={testimonials.length}
            active={activeIndex}
            onSelect={setActiveIndex}
          />
        )}
      </div>
    </div>
  );
}

interface DotsProps {
  count: number;
  active: number;
  onSelect: (index: number) => void;
}

function Dots({ count, active, onSelect }: DotsProps) {
  return (
    <div className="mt-8 flex items-center justify-center gap-2 lg:mt-10">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onSelect(i)}
          aria-label={`Show testimonial ${i + 1}`}
          aria-current={i === active}
          className="h-2 w-2 rounded-full transition-all"
          style={{
            backgroundColor:
              i === active
                ? "var(--color-brand-cyan)"
                : "rgba(0, 7, 25, 0.2)",
            transform: i === active ? "scale(1.25)" : "scale(1)",
          }}
        />
      ))}
    </div>
  );
}
