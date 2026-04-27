import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PostCard } from "@/components/sections/PostCard";
import type { Post, RecentPostsSection } from "@/content/types";

interface RecentPostsProps {
  content: RecentPostsSection;
}

export function RecentPosts({ content }: RecentPostsProps) {
  const [featured, ...rest] = content.posts;

  return (
    <Section spacing="lg">
      <Container>
        <header>
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-cyan px-4 py-1.5 text-sm font-medium text-brand-cream">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-cream" />
            {content.eyebrow}
          </span>

          <h2 className="mt-6 text-[clamp(2rem,5.5vw,4.75rem)] font-medium leading-[1.05] tracking-tight text-brand-navy">
            {content.headline.map((token, i) => (
              <span
                key={i}
                className={token.highlight ? "text-brand-cyan" : undefined}
              >
                {token.text}
              </span>
            ))}
          </h2>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-16 lg:gap-12 xl:gap-16">
          <PostCard post={featured} />

          <ul className="flex flex-col">
            {rest.map((p, i) => (
              <li
                key={p.id}
                className={
                  i > 0
                    ? "mt-8 md:mt-6 md:border-t md:border-brand-navy/15 md:pt-6 lg:mt-8 lg:pt-8"
                    : ""
                }
              >
                <PostListItem post={p} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

function PostListItem({ post }: { post: Post }) {
  return (
    <article>
      <div className="md:hidden">
        <PostCard post={post} />
      </div>
      <div className="hidden md:block">
        <a href={post.href} className="group block">
          <h3 className="text-xl font-medium leading-tight tracking-tight text-brand-navy transition-colors group-hover:text-brand-blue lg:text-2xl xl:text-[1.75rem]">
            {post.title}
          </h3>
          <p className="mt-3 leading-relaxed text-brand-navy/65 lg:mt-4">
            {post.excerpt}
          </p>
        </a>
      </div>
    </article>
  );
}
