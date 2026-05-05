import type { SiroccoGroupPageContent } from './types';

export const siroccoTheGroupContent: SiroccoGroupPageContent = {
  hero: {
    videoSrc: '/videos/sirocco-the-group/hero.mp4',
    posterSrc: '/videos/sirocco-the-group/hero-poster.jpg',
    ariaLabel:
      'Sirocco Group offices across the world: United States, Spain, Italy, Sweden, UAE',
  },
  ourStory: {
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'Sirocco, The Group' },
    ],
    headline: [
      { text: 'Sirocco ' },
      { text: 'Group', color: 'cyan' },
    ],
    paragraphs: [
      'Sirocco Group is a Nordic-headquartered consulting and IT services company that helps organizations modernize sales, marketing and customer service through CRM, CPQ, data and AI solutions. From its base in Stockholm, it positions itself as one of Sweden\'s leading independent CRM partners, serving both scale-ups and large enterprises across sectors such as manufacturing, construction, real estate, banking, housing, energy, hospitality and public sector.',
      'In the Nordics, Sirocco focuses on designing and implementing customer-centric CRM architectures, sales automation and configure-price-quote (CPQ) solutions on platforms like Salesforce, Microsoft Dynamics, HubSpot, Oracle and other major SaaS ecosystems. The company emphasizes a vendor-agnostic, boutique approach: it runs workshops to map current processes, then delivers tailored implementations, integrations and data architectures using agile methods such as SAFe to ensure quick, iterative improvements.',
    ],
    illustration: {
      src: '/sirocco-the-group/rocket-with-clouds.svg',
      alt: 'Sirocco Group rocket illustration with clouds',
      width: 481,
      height: 632,
    },
  },
  partnership: {
    headline: [
      { text: 'Florence Next & ' },
      { text: 'Sirocco', color: 'cyan' },
    ],
    paragraphs: [
      'Ever since Salesforce acquired MuleSoft, IT companies have struggled to aggregate the diverse knowledge required to leverage the full power of CRM, API Integration and Process Automation. Florence Next, a MuleSoft vertical and international level system integrator firm, is joining forces with Sirocco, a Salesforce Golden Partner and independent CRM consultancy company.',
      'The result is a unique combination of Integration expertise and CRM knowledge capable of delivering E2E solutions across the whole Salesforce ecosystem. Your Digital Transformation process will switch from managing headaches with countless stakeholders to a journey with a single trusted partner ready to guide you every step of the way, letting you focus on what matters the most for your business.',
      'The adoption of the SAFe framework from both companies tightens the partnership into a shared delivery model. The cross-functional nature of SAFe teams let our Integration and CRM expertise seamlessly blend into a unified flow of continuous and incremental value delivery.',
    ],
    illustration: {
      src: '/sirocco-the-group/handshake.png',
      alt: 'Two people meeting on a path, representing the Florence Next and Sirocco partnership',
      width: 654,
      height: 357,
    },
  },
  technicalExpertise: {
    eyebrow: 'Who we are',
    headline: [
      { text: 'Technical ' },
      { text: 'expertise', color: 'cyan' },
    ],
    intro:
      'Our consultants combine deep, certified expertise with hands-on delivery experience across the leading CRM, CPQ, and customer experience platforms.',
    ctaHref: '/services',
    ctaLabel: 'View All Services',
    cards: [
      {
        id: 'salesforce',
        title: 'Salesforce',
        blurb:
          'We are a leading Salesforce partner. Our consultants are certified, knowledgeable and experienced.',
        logo: {
          src: '/logos/services/salesforce.svg',
          alt: 'Salesforce',
          width: 61,
          height: 43,
        },
      },
      {
        id: 'ms-dynamics-365',
        title: 'Microsoft Dynamics 365',
        blurb:
          'Sirocco is one of the oldest Microsoft partners in Sweden, dating back to our founding in 2008.',
        logo: {
          src: '/logos/services/dynamics-365.svg',
          alt: 'Microsoft Dynamics 365',
          width: 1017,
          height: 355,
        },
      },
      {
        id: 'hubspot',
        title: 'HubSpot',
        blurb:
          'HubSpot empowers businesses to grow better, attract visitors, convert leads, and nurture customer relationships.',
        logo: {
          src: '/logos/services/hubspot.svg',
          alt: 'HubSpot',
          width: 512,
          height: 149,
        },
      },
      {
        id: 'tacton',
        title: 'Tacton',
        blurb:
          'Tacton is a Swedish CPQ platform purpose-built for manufacturers, automating complex product configuration and quoting at scale.',
        logo: {
          src: '/logos/services/tacton.svg',
          alt: 'Tacton',
          width: 1000,
          height: 611,
        },
      },
      {
        id: 'experlogix',
        title: 'Experlogix',
        blurb:
          'Experlogix combines CPQ and document automation to turn intricate product rules and quotes into accurate, ready-to-send proposals.',
        logo: {
          src: '/logos/services/experlogix.svg',
          alt: 'Experlogix',
          width: 511,
          height: 101,
        },
      },
      {
        id: 'oracle',
        title: 'Oracle',
        blurb:
          "Oracle's customer experience cloud unifies sales, service and marketing, supporting enterprise CRM at global scale.",
        logo: {
          src: '/logos/services/oracle.svg',
          alt: 'Oracle',
          width: 231,
          height: 30,
        },
      },
    ],
  },
};
