import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { Metadata } from 'next'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'

type Params = Promise<{ slug: string }>

export default async function PostPage({ params }: { params: Params }) {
  const { slug } = await params
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug } },
    depth: 1,
    limit: 1,
  })

  const post = docs[0]
  if (!post) notFound()

  const image = typeof post.featuredImage === 'object' ? post.featuredImage : null

  return (
    <Section spacing="lg">
      <Container size="narrow">
        <article>
          <header>
            <p className="text-sm uppercase tracking-[0.12em] text-brand-navy/55">
              {formatDate(post.publishedAt)}
            </p>
            <h1 className="mt-3 text-[clamp(2rem,5.5vw,4.75rem)] font-medium leading-[1.05] tracking-tight text-brand-navy">
              {post.title}
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-brand-navy/65">
              {post.excerpt}
            </p>
          </header>

          {image?.url && (
            <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={image.url}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 800px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          )}

          {post.content && (
            <div className="mt-12">
              <RichText data={post.content} />
            </div>
          )}
        </article>
      </Container>
    </Section>
  )
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug } },
    depth: 0,
    limit: 1,
  })
  const post = docs[0]
  if (!post) return { title: 'Post not found' }
  return {
    title: post.title,
    description: post.excerpt,
  }
}

function formatDate(iso: string): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(iso))
}
