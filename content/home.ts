import type { HomePageContent } from './types';

export const homeContent: Pick<HomePageContent, 'hero'> = {
  hero: {
    headline: "We Deliver and Care",
    integrations: [
      { name: "Kubernetes",  src: "/kuber.svg",                  alt: "Kubernetes" },
      { name: "AWS",         src: "/aws-1.svg",                  alt: "AWS" },
      { name: "Databricks",  src: "/databricks-1.svg",           alt: "Databricks" },
      { name: "Azure",       src: "/azure.svg",                  alt: "Microsoft Azure" },
      { name: "Informatica", src: "/informatica.png",            alt: "Informatica" },
      { name: "Kong",        src: "/Kong-small.png",             alt: "Kong" },
      { name: "Salesforce",  src: "/salesforce-logo-vector.svg", alt: "Salesforce" },
      { name: "MuleSoft",    src: "/mulesoft.svg",               alt: "MuleSoft" },
      { name: "Claude",      src: "/Claude-Ai.svg",              alt: "Anthropic Claude" },
    ],
  },
};
