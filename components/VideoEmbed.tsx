'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VideoEmbedProps {
  src: string | null;
  poster: string;
  title: string;
  className?: string;
}

export function VideoEmbed({ src, poster, title, className }: VideoEmbedProps) {
  const [activated, setActivated] = useState(false);

  return (
    <div
      className={cn(
        'relative aspect-video w-full overflow-hidden rounded-2xl bg-brand-navy',
        className,
      )}
    >
      {activated && src ? (
        <iframe
          src={getEmbedUrl(src)}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => src && setActivated(true)}
          disabled={!src}
          className="group absolute inset-0 h-full w-full"
          aria-label={src ? `Play: ${title}` : `Video coming soon: ${title}`}
        >
          <Image
            src={poster}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-cover"
          />
          {src && (
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex size-20 items-center justify-center rounded-full bg-brand-cyan/95 text-brand-cream transition-transform group-hover:scale-110">
                <Play className="size-8 translate-x-0.5" fill="currentColor" />
              </span>
            </span>
          )}
        </button>
      )}
    </div>
  );
}

function getEmbedUrl(src: string): string {
  const yt = src.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]+)/);
  if (yt) return `https://www.youtube-nocookie.com/embed/${yt[1]}?autoplay=1`;
  const vm = src.match(/vimeo\.com\/(\d+)/);
  if (vm) return `https://player.vimeo.com/video/${vm[1]}?autoplay=1`;
  return src;
}
