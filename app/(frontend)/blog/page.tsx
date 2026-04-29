import { getPayload } from 'payload'
import config from '@payload-config'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import type { Post } from '@/payload-types'

export default async function BlogIndexPage() {
  const payload = await getPayload({ config })
  const { docs: posts } = await payload.find({
    collection: 'posts',
    sort: '-publishedAt',
    limit: 20,
    depth: 1,
  })

  return (
    <Section spacing="lg">
      <Container>
        <header className="mb-12 lg:mb-16">
          <h1 className="text-[clamp(2rem,5.5vw,4.75rem)] font-medium leading-[1.05] tracking-tight text-brand-navy">
            Blog
          </h1>
        </header>

        {posts.length === 0 ? (
          <p className="text-brand-navy/65">No posts yet.</p>
        ) : (
          <ul className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
            {posts.map((post) => (
              <li key={post.id}>
                <BlogListItem post={post} />
              </li>
            ))}
          </ul>
        )}
      </Container>
    </Section>
  )
}

function BlogListItem({ post }: { post: Post }) {
  const image = typeof post.featuredImage === 'object' ? post.featuredImage : null

  return (
    <a href={`/blog/${post.slug}`} className="group block">
      {image?.url && (
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src={image.url}
            alt={image.alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      )}
      <p className="mt-4 text-sm uppercase tracking-[0.12em] text-brand-navy/55">
        {formatDate(post.publishedAt)}
      </p>
      <h2 className="mt-2 text-2xl font-medium leading-tight tracking-tight text-brand-navy transition-colors group-hover:text-brand-blue lg:text-3xl">
        {post.title}
      </h2>
      <p className="mt-3 leading-relaxed text-brand-navy/65">{post.excerpt}</p>
    </a>
  )
}

function formatDate(iso: string): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(iso))
}
