/**
 * Content type interfaces — map 1:1 to CMS schemas later.
 * Components never hardcode copy. They import from content/*.
 */

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface Link {
  label: string;
  href: string;
  external?: boolean;
}

export interface CtaButton extends Link {
  variant?: 'primary' | 'secondary' | 'ghost';
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface SiteConfig {
  name: string;
  tagline: string;
  logo: ImageAsset;
  nav: NavItem[];
  cta: { label: string; href: string };
  footer: {
    address: { line1: string; line2: string };
    phone?: string;
    email?: string;
    columns: Array<{ title: string; links: Link[] }>;
    copyright: string;
  };
}

/** Homepage section shapes */

export type HeroIntegration = {
  name: string;
  src: string;
  alt: string;
};

export type HeroSection = {
  headline: string;
  integrations: HeroIntegration[];
};

export interface HeadlineToken {
  text: string;
  highlight?: boolean;
}

export interface IntroContent {
  eyebrow: string;
  headline: HeadlineToken[];
  paragraphs: string[];
}

export interface Partner {
  id: string;
  name: string;
  logoSrc: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  title: string;
  description: string;
}

export interface PartnersCtaCard {
  imageSrc: string;
  imageAlt: string;
  headline: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface PartnersContent {
  partners: Partner[];
  ctaCard: PartnersCtaCard;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export interface ServicesSection {
  eyebrow: string;
  headline: HeadlineToken[];
  services: Service[];
  ctaLabel: string;
  ctaHref: string;
}

export interface StatCard {
  id: string;
  label: string;
  value: string;
  description: string;
}

export interface ResultsContent {
  eyebrow: string;
  headline: HeadlineToken[];
  photo: {
    src: string;
    alt: string;
  };
  stats: StatCard[];
  illustration: {
    src: string;
    alt: string;
  };
}

export interface Project {
  id: string;
  brand: string;
  projectName: string;
  category: string;
  logoSrc: string;
  logoWidth: number;
  logoHeight: number;
  logoMaxHeight?: number;
  bgColor: string;
  href: string;
}

export interface ProjectsSection {
  eyebrow: string;
  headline: HeadlineToken[];
  subhead: string;
  projects: Project[];
}

export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
}

export interface TestimonialsSection {
  illustrationSrc: string;
  testimonials: Testimonial[];
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  imageSrc: string;
  href: string;
}

export interface RecentPostsSection {
  eyebrow: string;
  headline: HeadlineToken[];
  posts: Post[];
}

export interface ContactCtaSection {
  eyebrow: string;
  headline: string;
  emailPlaceholder: string;
}

export interface HomePageContent {
  hero: HeroSection;
  intro: IntroContent;
  partners: PartnersContent;
  services: ServicesSection;
  results: ResultsContent;
  projects: ProjectsSection;
  testimonials: TestimonialsSection;
  recentPosts: RecentPostsSection;
  contact: ContactCtaSection;
}