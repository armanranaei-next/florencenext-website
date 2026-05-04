import type { OurStoryPageContent } from './types';

export const ourStoryContent: OurStoryPageContent = {
  hero: {
    eyebrow: 'Our Story',
    headline: 'We are Florence Next',
    subtitle: 'A journey of success',
  },
  origins: {
    eyebrow: 'Company overview',
    headline: [
      { text: 'Bridging north and south: ' },
      { text: 'the origins', color: 'cyan' },
    ],
    paragraphs: [
      [
        'After more than a decade of travelling the word and deliver project globally, our ',
        { strong: 'CEO and founder Andrea Martinello' },
        ', spent three years in the ',
        { strong: 'Nordics' },
        ', delivering integration programs across the region and leading part of the Spotify IPO integration effort.',
      ],
      [
        'Living there changed his view of technology and collaboration. He saw how ',
        { em: 'the clear, disciplined engineering culture of the North could blend beautifully with the creativity, passion, and problem-solving mindset of ' },
        { strong_em: 'Southern Europe' },
        { em: '.' },
      ],
    ],
    standout: 'Florence Next was founded to connect those two worlds',
    illustration: {
      src: '/our-story/origins-integration.svg',
      alt: 'Stylised illustration of a system being integrated through multiple connectors',
    },
  },
  stats: {
    items: [
      { value: '15+', label: 'Years of Experience' },
      { value: '5+', label: 'Countries of Presence' },
      { value: '100+', label: 'Certifications' },
      { value: '750+', label: 'Satisfied Customers' },
    ],
  },
  connect: {
    eyebrow: 'Connect with us',
    headline: [
      { text: 'Small by design, ' },
      { text: 'powerful by nature', color: 'cyan' },
    ],
    paragraphs: [
      [
        'From day one, we chose to be a ',
        { strong: 'small, hyper-performant boutique' },
        ' — a team of architects, developers, and integrators who could innovate fast, deliver with precision, and still enjoy the work. No bureaucracy.',
      ],
      ['No bloat. Just talent, trust, and execution.'],
    ],
    cta: { label: 'Contact Us', href: '/contact' },
    illustration: {
      src: '/our-story/connect-illustration.svg',
      alt: 'Isometric illustration of a customer support agent on a phone screen',
    },
  },
  partnership: {
    eyebrow: 'Highlight features',
    headline: [
      { text: 'Growing stronger through ' },
      { text: 'partnership', color: 'cyan' },
    ],
    video: {
      src: null,
      poster: '/our-story/partnership-poster.jpg',
      title: 'Florence Next and Sirocco Group partnership',
    },
    body: {
      left: [
        ['During the first five years, Florence Next delivered project after project across Sweden, Norway, and Finland. As we grew, one truth became increasingly clear: if we truly wanted to stay close to our clients and to the Nordic ecosystem, we needed a stronger local presence. That realization opened the door to a conversation with Sirocco Group.'],
        [
          "The strategic partnership wasn't about becoming bigger — it was about becoming ",
          { strong: 'stronger and more deeply embedded' },
          '. Sirocco brought a Nordic headquarters with 15 years of history, deep CRM and CPQ expertise, and a culture that aligned naturally with ours. We brought our obsession with integration and architecture, and our readiness to push AI into real enterprise execution.',
        ],
      ],
      right: [
        [
          'Together, we shaped a unified vision: ',
          { strong: 'Integration as the backbone of digital business, AI as its new accelerant.' },
          ' Even though we started close to Salesforce, our approach has always been ',
          { strong: 'vendor-agnostic and deeply technical' },
          ". We've never been defined by products — only by engineering excellence.",
        ],
        ['Today, Florence Next remains exactly what it set out to be: a boutique of thinkers and builders, a bridge between cultures, and a partner that delivers global impact without unnecessary complexity — now amplified by the reach and strength of Sirocco Group.'],
      ],
    },
    features: [
      {
        icon: 'results',
        title: 'Focus on driving results',
        description: 'Our quick time and proactive approach assist our clients to rehearse the future and outperform the competition.',
      },
      {
        icon: 'growth',
        title: 'Help your business grow',
        description: 'Our dynamic resourcing calibration can replicate any solution for a much larger playing ground.',
      },
      {
        icon: 'quality',
        title: 'Best quality customer service',
        description: 'Cognitive capabilities and data analytics bring efficiency and competitive edge.',
      },
    ],
  },
};
