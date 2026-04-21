import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { siteContent } from '@/content/site';
import './globals.css';

// Placeholder fonts — replace with the actual brand fonts from Figma.
const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const fontDisplay = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk', 
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${siteContent.name} — MuleSoft Consultancy & Professional Services`,
    template: `%s | ${siteContent.name}`,
  },
  description:
    'FlorenceNext is an IT Enterprise Consultancy company that excels in digital transformation services.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontDisplay.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}