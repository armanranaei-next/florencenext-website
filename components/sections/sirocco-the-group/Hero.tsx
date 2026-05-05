import Image from 'next/image';
import type { SiroccoGroupHeroContent } from '@/content/types';

export function Hero({ videoSrc, posterSrc, ariaLabel }: SiroccoGroupHeroContent) {
  return (
    <section
      aria-label={ariaLabel}
      className="sirocco-hero relative w-full overflow-hidden aspect-[1920/774]"
    >
      <video
        className="block w-full h-full object-cover"
        src={videoSrc}
        poster={posterSrc}
        aria-label={ariaLabel}
        autoPlay
        muted
        playsInline
        preload="auto"
      />
      <Image
        src={posterSrc}
        alt={ariaLabel}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
    </section>
  );
}
