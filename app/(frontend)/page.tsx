import { getPayload } from "payload";
import config from "@payload-config";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Partners } from "@/components/sections/Partners";
import { Projects } from "@/components/sections/Projects";
import { RecentPosts } from "@/components/sections/RecentPosts";
import { Results } from "@/components/sections/Results";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { homeContent } from "@/content/home";
import type { Post as ContentPost } from "@/content/types";

export default async function HomePage() {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "posts",
    sort: "-publishedAt",
    limit: 4,
    depth: 1,
  });

  const cmsPosts: ContentPost[] = docs.map((p): ContentPost => {
    if (typeof p.featuredImage !== "object" || !p.featuredImage.url) {
      throw new Error(
        `Post ${p.id} (${p.slug}) is missing a populated featuredImage — expected depth: 1 to populate.`,
      );
    }
    return {
      id: String(p.id),
      title: p.title,
      excerpt: p.excerpt,
      category: "Blog",
      date: p.publishedAt,
      author: "Florence Next",
      imageSrc: p.featuredImage.url,
      href: `/blog/${p.slug}`,
    };
  });

  const posts = cmsPosts.length > 0 ? cmsPosts : homeContent.recentPosts.posts;

  return (
    <>
      <Hero content={homeContent.hero} />
      <Intro content={homeContent.intro} />
      <Partners content={homeContent.partners} />
      <Results content={homeContent.results} />
      <Services content={homeContent.services} />
      <Projects content={homeContent.projects} />
      <Testimonials content={homeContent.testimonials} />
      <RecentPosts content={{ ...homeContent.recentPosts, posts }} />
    </>
  );
}
