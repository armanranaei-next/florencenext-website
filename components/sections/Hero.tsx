import Image from "next/image";
import { Container } from "@/components/layout/Container";
import type { HeroSection } from "@/content/types";

type Props = {
  content: HeroSection;
};

// Logo natural dimensions from production WP. Pills size to these so each pill
// width follows the logo's intrinsic ratio.
const LOGO_DIMENSIONS: Record<string, { width: number; height: number }> = {
  AWS:         { width: 66,  height: 40 },
  Kubernetes:  { width: 51,  height: 50 },
  Azure:       { width: 99,  height: 29 },
  Informatica: { width: 158, height: 40 }, // downscaled from 948x240
  Salesforce:  { width: 61,  height: 43 },
  Kong:        { width: 86,  height: 29 },
  Claude:      { width: 107, height: 32 },
  MuleSoft:    { width: 108, height: 33 },
  Databricks:  { width: 65,  height: 37 },
};

// Pill positions (% of right column). Eyeballed from production hero.png —
// 3 across the top, 3 down the right, 3 down the left of the rocket.
const PILL_POSITIONS: Record<string, string> = {
  Kubernetes:  "top-[2%]   left-[28%]",
  Databricks:  "top-[10%]  left-[45%]",
  AWS:         "top-[2%]   left-[62%]",
  Azure:       "top-[24%]  left-[84%]",
  Kong:        "top-[44%]  left-[84%]",
  MuleSoft:    "top-[64%]  left-[82%]",
  Informatica: "top-[34%]  left-[0%]",
  Salesforce:  "top-[56%]  left-[8%]",
  Claude:      "top-[76%]  left-[20%]",
};

export function Hero({ content }: Props) {
  return (
    <section className="relative overflow-hidden bg-brand-navy pt-16 md:pt-24 min-h-[760px]">
      {/* Stars overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[url('/stars.svg')] bg-repeat opacity-70"
      />

      {/* Bottom gradient (navy -> brand-blue) behind the clouds */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-blue/70 to-transparent" />

      {/* Cloud bank, full width, anchored to bottom. z-20 so rocket exhaust tucks behind. */}
      <Image
        src="/cloud.svg"
        alt=""
        aria-hidden
        width={1145}
        height={351}
        className="pointer-events-none absolute inset-x-0 bottom-0 w-full h-auto z-20"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Logo + tagline */}
          <div>
            <Image
              src="/hero_logo.svg"
              alt="FlorenceNext — A Sirocco Group Company"
              width={703}
              height={170}
              priority
              className="h-auto w-full max-w-xl lg:max-w-2xl"
            />
            <h1 className="mt-8 text-5xl font-medium text-white md:text-6xl">
              {content.headline}
            </h1>
          </div>

          {/* Right: Rocket + pills */}
          <div className="relative h-[680px] lg:h-[820px]">
            <Image
              src="/rocket.svg"
              alt=""
              width={302}
              height={765}
              priority
              aria-hidden
              className="absolute left-1/2 top-1/2 h-[110%] w-auto -translate-x-1/2 -translate-y-1/2"
            />

            {content.integrations.map((logo) => {
              const dims = LOGO_DIMENSIONS[logo.name];
              const position = PILL_POSITIONS[logo.name];
              if (!dims || !position) return null;
              return (
                <div
                  key={logo.name}
                  className={`absolute ${position} flex h-12 items-center justify-center rounded-full bg-white px-4 shadow-lg`}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={dims.width}
                    height={dims.height}
                    className="h-7 w-auto object-contain"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}