import type { SiteConfig } from './types';

export const siteContent: SiteConfig = {
  name: 'FlorenceNext',
  tagline: 'A Sirocco Group Company',
  logo: { src: '/header_logo.svg', alt: 'FlorenceNext', width: 315, height: 76 },
  nav: [
    { label: 'Company', href: '/company' },
    { label: 'AI', href: '/ai' },
    { label: 'Integration', href: '/integration' },
    { label: 'Services', href: '/services' },
    { label: 'News', href: '/news' },
  ],
  cta: { label: 'Contact Us', href: '/contact' },
  footer: {
    address: {
      line1: '3972 Westheimer Rd. Santa Ana,',
      line2: 'Illinois 85486',
    },
    email: 'support@example.com',
    phone: '+1 (406) 555-0120',
    columns: [
      {
        title: 'Works',
        links: [
          { label: 'Expertise', href: '/expertise' },
          { label: 'About', href: '/about' },
          { label: 'Team', href: '/team' },
          { label: 'Awards', href: '/awards' },
        ],
      },
      {
        title: 'Blog',
        links: [
          { label: 'Careers', href: '/careers' },
          { label: 'Partnerships', href: '/partnerships' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    copyright: '© 2026 FlorenceNext. All Rights Reserved.',
  },
};
