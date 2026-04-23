import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { siteContent } from '@/content/site';
import './globals.css';

const museoSans = localFont({
  src: [
    {
      path: './fonts/MuseoSans-300.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/MuseoSans.otf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-museo-sans',
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
    <html lang="en" className={museoSans.variable}>
      <body className="mx-auto max-w-[1920px] bg-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}