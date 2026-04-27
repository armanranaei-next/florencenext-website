import Image from "next/image";
import type { Post } from "@/content/types";

interface PostCardProps {
  post: Post;
}

// Notch is rendered as a cream-colored overlay over the image's bottom-left
// corner. Only works on cream-themed sections — the overlay must match the
// section background so the cutout reads as a real notch.
export function PostCard({ post }: PostCardProps) {
  return (
    <a href={post.href} className="group block">
      <div className="relative aspect-[4/3] md:aspect-[5/4]">
        <Image
          src={post.imageSrc}
          alt=""
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="rounded-2xl object-cover"
        />
        <div className="absolute bottom-0 left-0 flex h-10 items-center rounded-tr-2xl bg-white pr-4">
          <Meta post={post} />
        </div>
      </div>

      <h3 className="mt-3 text-2xl font-medium leading-tight tracking-tight text-brand-navy transition-colors group-hover:text-brand-blue lg:text-3xl xl:text-[2rem]">
        {post.title}
      </h3>

      <p className="mt-3 leading-relaxed text-brand-navy/65">
        {post.excerpt}
      </p>
    </a>
  );
}

function Meta({ post }: { post: Post }) {
  return (
    <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.12em]">
      <span className="font-medium text-brand-cyan">{post.category}</span>
      <span className="text-brand-navy/55">{formatDate(post.date)}</span>
      <span className="text-brand-navy/55">· {post.author}</span>
    </div>
  );
}

function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  })
    .format(new Date(iso))
    .toUpperCase();
}
