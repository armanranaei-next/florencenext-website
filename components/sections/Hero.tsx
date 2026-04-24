import Image from "next/image";
import type { HeroSection } from "@/content/types";

type Props = {
  content: HeroSection;
};

// Logo natural dimensions from production WP. Pills size to these so each pill
// width follows the logo's intrinsic ratio.
const LOGO_DIMENSIONS: Record<string, { width: number; height: number }> = {
  AWS: { width: 66, height: 40 },
  Kubernetes: { width: 51, height: 50 },
  Azure: { width: 99, height: 29 },
  Informatica: { width: 158, height: 40 }, // downscaled from 948x240
  Salesforce: { width: 61, height: 43 },
  Kong: { width: 86, height: 29 },
  Claude: { width: 107, height: 32 },
  MuleSoft: { width: 108, height: 33 },
  Databricks: { width: 65, height: 37 },
};

const PILL_DELAYS: Record<string, string> = {
  aws: "0.2s",
  kubernetes: "0.5s",
  azure: "0.8s",
  informatica: "0.6s",
  salesforce: "0.9s",
  kong: "1.2s",
  claude: "0.3s",
  mulesoft: "0.4s",
  databricks: "1s",
};

export function Hero({ content }: Props) {
  return (
    <section
      className="relative overflow-hidden h-[590px] py-[3.75rem] md:h-[465px] md:py-12 md:pl-12 lg:h-[clamp(517px,_142px+36.6vw,_845px)] lg:pt-[4.5rem] lg:pl-[4.25rem]"
      style={{
        background:
          "linear-gradient(180deg, var(--brand-navy) 77%, var(--brand-blue) 100%)",
      }}
    >
      {/* Stars overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[url('/stars.svg')] bg-repeat opacity-70"
      />

      {/* Column on mobile, 2-column row on lg+ */}
      <div className="relative z-30 flex h-full flex-col gap-y-[2.31rem] md:flex-row md:gap-y-0 md:gap-x-[0.6rem]">
        {/* Logo + headline */}
        <div className="flex w-full flex-col justify-center md:w-1/2 md:gap-[2.625rem] md:px-12">
          <div className="px-[3.53rem] py-[0.73rem] md:px-0 md:py-4 lg:p-0">
            <Image
              src="/hero_logo.svg"
              alt="FlorenceNext — A Sirocco Group Company"
              width={703}
              height={170}
              priority
              className="h-auto w-full"
            />
          </div>
          <h1 className="text-[clamp(1.5rem,4vw,2.25rem)] 2xl:text-[3.5rem] font-medium leading-[1.05] tracking-[-0.02em] text-white text-center">
            {content.headline}
          </h1>
        </div>

        {/* Pills wrapper — position: relative so pill %s resolve against it. */}
        <div className="relative w-full min-h-[19rem] px-[0.63rem] md:w-1/2 md:min-h-[25rem] md:mr-[clamp(3rem,_-106.55px_+_9.091vw,_4.25rem)] md:px-0 lg:min-h-[33rem]">
          {content.integrations.map((logo) => {
            const dims = LOGO_DIMENSIONS[logo.name];
            const posKey = logo.name.toLowerCase();
            if (!dims) return null;

            return (
              <div
                key={logo.name}
                className="hero-pill animate-float"
                data-pill={posKey}
                style={{ animationDelay: PILL_DELAYS[posKey] }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={dims.width}
                  height={dims.height}
                  style={{ width: "auto", height: "auto", maxWidth: "100%" }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Rocket — sits in front of cloud */}
      <Image
        src="/rocket.svg"
        alt=""
        aria-hidden
        width={302}
        height={765}
        priority
        className="hero-rocket rocket-animate absolute z-20 h-auto"
      />

      {/* Cloud — sits behind rocket */}
      <Image
        src="/cloud.svg"
        alt=""
        aria-hidden
        width={1145}
        height={351}
        className="hero-cloud pointer-events-none absolute z-[5] h-auto"
      />
    </section>
  );
}
