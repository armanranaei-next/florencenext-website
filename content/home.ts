import type { HomePageContent } from './types';

export const homeContent: Pick<HomePageContent, 'hero' | 'intro' | 'partners' | 'results'> = {
  hero: {
    headline: "We Deliver and Care",
    integrations: [
      { name: "Kubernetes",  src: "/logos/kubernetes.svg",  alt: "Kubernetes" },
      { name: "AWS",         src: "/logos/aws.svg",         alt: "AWS" },
      { name: "Databricks",  src: "/logos/databricks.svg",  alt: "Databricks" },
      { name: "Azure",       src: "/logos/azure.svg",       alt: "Microsoft Azure" },
      { name: "Informatica", src: "/logos/informatica.png", alt: "Informatica" },
      { name: "Kong",        src: "/logos/kong.svg",        alt: "Kong" },
      { name: "Salesforce",  src: "/logos/salesforce.svg",  alt: "Salesforce" },
      { name: "MuleSoft",    src: "/logos/mulesoft.svg",    alt: "MuleSoft" },
      { name: "Claude",      src: "/logos/claude.svg",      alt: "Anthropic Claude" },
    ],
  },
  intro: {
    eyebrow: "Who we are",
    headline: [
      { text: "Where integration and AI make " },
      { text: "stronger businesses", highlight: true },
    ],
    paragraphs: [
      "Florence Next, part of Sirocco Group, is an IT Enterprise Consultancy company specialized in Integration and AI solutions that drive digital transformation.",
      "Our certified team of Enterprise Architects, Integration Experts, and AI Engineers helps organizations connect systems, automate processes, and unlock the power of intelligent data — from strategy to execution.",
    ],
  },
  partners: {
    partners: [
      {
        id: "mulesoft",
        name: "MuleSoft",
        logoSrc: "/logos/mulesoft.svg",
        logoAlt: "MuleSoft",
        logoWidth: 140,
        logoHeight: 40,
        title: "Mulesoft Premiere Partner",
        description: "We provide top-tier integration expertise to seamlessly and securely connect business systems, accelerating digital transformation.",
      },
      {
        id: "salesforce",
        name: "Salesforce",
        logoSrc: "/logos/salesforce.svg",
        logoAlt: "Salesforce",
        logoWidth: 90,
        logoHeight: 64,
        title: "Salesforce Summit Partner",
        description: "Leading digital transformation with innovative, tailor-made solutions that place the customer at the center for a truly cutting-edge experience.",
      },
      {
        id: "kong",
        name: "Kong",
        logoSrc: "/logos/kong.svg",
        logoAlt: "Kong",
        logoWidth: 120,
        logoHeight: 40,
        title: "Kong Partner",
        description: "Implementing scalable and secure API solutions, we foster an agile architecture that enhances performance and drives innovation in business processes.",
      },
      {
        id: "azure",
        name: "Microsoft Azure",
        logoSrc: "/logos/azure.svg",
        logoAlt: "Microsoft Azure",
        logoWidth: 120,
        logoHeight: 36,
        title: "Azure Partner",
        description: "Implementing scalable and secure API solutions, we foster an agile architecture that enhances performance and drives innovation in business processes.",
      },
      {
        id: "semarchy",
        name: "Semarchy",
        logoSrc: "/logos/semarchy.png",
        logoAlt: "Semarchy",
        logoWidth: 140,
        logoHeight: 36,
        title: "Semarchy Partner",
        description: "Implementing scalable and secure API solutions, we foster an agile architecture that enhances performance and drives innovation in business processes.",
      },
    ],
    ctaCard: {
      imageSrc: "/images/cta-callback.jpg",
      imageAlt: "Florence Next consultant",
      headline: "Free advice.\nBook a callback",
      ctaLabel: "Let's Talk",
      ctaHref: "/contact",
    },
  },
  results: {
    eyebrow: "Why choose us",
    headline: [
      { text: "Results that we " },
      { text: "successfully deliver", highlight: true },
    ],
    photo: {
      src: "/images/results-photo.jpg",
      alt: "Professional reviewing data on a tablet",
    },
    stats: [
      {
        id: "projects",
        label: "Projects completed",
        value: "40+",
        description: "Over 40 successful projects delivered to our clients worldwide.",
      },
      {
        id: "csat",
        label: "Customer Satisfaction CSAT",
        value: "4.9/5",
        description: "Don't trust us, ask our clients.",
      },
      {
        id: "integrated",
        label: "Integrated systems",
        value: "250+",
        description: "Deep expertise across platforms — we speak every system language.",
      },
    ],
    illustration: {
      src: "/images/results-illustration.svg",
      alt: "Data dashboard illustration",
    },
  },
};
