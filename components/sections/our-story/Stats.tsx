// Custom section wrapper — needed for the cream/navy split with absolute-positioned navy band.
// Don't migrate to <Section> without preserving the bridge effect.
import { Container } from '@/components/layout/Container';
import { AnimatedCounter } from '@/components/sections/AnimatedCounter';
import type { OurStoryStats } from '@/content/types';

export function Stats({ items }: OurStoryStats) {
  return (
    <section className="relative">
      <Container className="relative z-10">
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="card-stacked rounded-3xl bg-brand-cream p-8 md:p-10 flex flex-col justify-between min-h-[220px] md:min-h-[240px] lg:min-h-[260px]"
            >
              <div className="text-brand-navy font-medium tracking-tight leading-none text-[clamp(3rem,5.5vw,5.5rem)]">
                <AnimatedCounter value={item.value} />
              </div>
              <div className="mt-6 text-base md:text-lg font-medium text-brand-navy">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 z-0 bg-brand-charcoal h-[clamp(80px,12vw,140px)]"
      />
    </section>
  );
}
