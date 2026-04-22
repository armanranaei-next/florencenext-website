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

// Pill positions — %-based values sourced from the production Elementor CSS.
// Keys are lowercased integration names; look up via `logo.name.toLowerCase()`.
type PillPosition = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  width: string;
  translateY?: string;
};

const PILL_POSITIONS: Record<string, PillPosition> = {
  aws: { top: "3%", right: "25%", width: "15.5128%" },
  kubernetes: { top: "4%", left: "9.2308%", width: "10%", translateY: "-50%" },
  azure: { top: "24%", right: "0%", width: "19%" },
  informatica: { top: "29%", left: "0%", width: "26.5385%" },
  salesforce: { top: "56%", left: "10.5128%", width: "13%" },
  kong: { top: "46%", right: "12%", width: "18%" },
  claude: { top: "80%", left: "1.4872%", width: "21%" },
  mulesoft: { top: "73%", right: "13%", width: "18%" },
  databricks: { bottom: "84%", right: "56%", width: "13%" },
};

const PILL_PADDING: Record<string, string> = {
  aws: "1% 3%",
  kubernetes: "1% 0.5%",
  azure: "2%",
  informatica: "1% 2%",
  salesforce: "1%",
  kong: "1% 2%",
  claude: "1% 2%",
  mulesoft: "0.5%",
  databricks: "0 2% 1% 2%",
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
      className="relative overflow-hidden h-[760px] pt-[4.5rem] pl-[4.25rem]"
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

      {/* 2-column row — logo+headline left, pills right */}
      <div className="relative z-30 flex h-full flex-row">
        {/* Left — logo + headline */}
        <div className="flex w-1/2 flex-col gap-[2.625rem] justify-center">
          <Image
            src="/hero_logo.svg"
            alt="FlorenceNext — A Sirocco Group Company"
            width={703}
            height={170}
            priority
            className="h-auto w-full"
          />
          <h1
            className="text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-white text-center
"
          >
            {content.headline}
          </h1>
        </div>

        {/* Right — pills wrapper. position: relative so pill %s resolve against it. */}
        <div className="relative w-1/2" style={{ height: "33rem" }}>
          {content.integrations.map((logo) => {
            const dims = LOGO_DIMENSIONS[logo.name];
            const posKey = logo.name.toLowerCase();
            const pos = PILL_POSITIONS[posKey];
            if (!dims || !pos) return null;

            const isLargeRadius =
              posKey === "kubernetes" ||
              posKey === "salesforce" ||
              posKey === "mulesoft";

            return (
              <div
                key={logo.name}
                className="animate-float absolute flex items-center justify-center bg-white"
                style={{
                  top: pos.top,
                  right: pos.right,
                  bottom: pos.bottom,
                  left: pos.left,
                  width: pos.width,
                  transform: pos.translateY
                    ? `translateY(${pos.translateY})`
                    : undefined,
                  borderRadius: isLargeRadius ? "2rem" : "1.5rem",
                  padding: PILL_PADDING[posKey],
                  animationDelay: PILL_DELAYS[posKey],
                }}
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

      {/* Rocket — absolute on the section, sits in front of cloud */}
      <Image
        src="/rocket.svg"
        alt=""
        aria-hidden
        width={302}
        height={765}
        priority
        className="rocket-animate absolute z-20 h-auto"
        style={{ top: "26%", left: "65%", width: "17%" }}
      />

      {/* Cloud — absolute at bottom-right, sits behind rocket */}
      <Image
        src="/cloud.svg"
        alt=""
        aria-hidden
        width={1145}
        height={351}
        className="pointer-events-none absolute bottom-0 right-0 z-[5] h-auto"
        style={{ width: "66%" }}
      />
    </section>
  );
}
