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

export interface IntroSection {
  eyebrow: string;
  headline: string;
  headlineAccent?: string;
  body: string[];
}

export interface PartnerCard {
  logo: ImageAsset;
  name: string;
  title: string;
  description: string;
}

export interface PartnersSection {
  cards: PartnerCard[];
  cta: {
    headline: string;
    button: CtaButton;
    illustration: ImageAsset;
  };
}

export interface ServiceTab {
  id: string;
  title: string;
  description: string;
  tags?: string[];
}

export interface ServicesSection {
  eyebrow: string;
  headline: string;
  headlineAccent?: string;
  illustration: ImageAsset;
  tabs: ServiceTab[];
  viewAllCta: CtaButton;
}

export interface StatCard {
  label: string;
  value: string;
  description: string;
  image?: ImageAsset;
}

export interface ResultsSection {
  eyebrow: string;
  headline: string;
  headlineAccent?: string;
  stats: StatCard[];
  dashboardImage: ImageAsset;
}

export interface ProjectCard {
  slug: string;
  name: string;
  image: ImageAsset;
  tag: string;
  href?: string;
}

export interface ProjectsSection {
  eyebrow: string;
  headline: string;
  headlineAccent?: string;
  description: string;
  projects: ProjectCard[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface TestimonialsSection {
  illustration: ImageAsset;
  testimonials: Testimonial[];
}

export interface NewsCard {
  slug: string;
  image: ImageAsset;
  category: string;
  date: string;
  title: string;
  href: string;
}

export interface NewsSection {
  eyebrow: string;
  headline: string;
  headlineAccent?: string;
  posts: NewsCard[];
}

export interface ContactCtaSection {
  eyebrow: string;
  headline: string;
  emailPlaceholder: string;
}

export interface HomePageContent {
  hero: HeroSection;
  intro: IntroSection;
  partners: PartnersSection;
  services: ServicesSection;
  results: ResultsSection;
  projects: ProjectsSection;
  testimonials: TestimonialsSection;
  news: NewsSection;
  contact: ContactCtaSection;
}