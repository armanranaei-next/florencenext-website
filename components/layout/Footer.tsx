import Link from 'next/link';
import { siteContent } from '@/content/site';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <Container>
        <div className="py-16 grid gap-12 md:grid-cols-[2fr_1fr_1fr_1.5fr]">
          <div>
            <p className="font-display text-2xl font-bold">{siteContent.name}</p>
            <p className="mt-2 text-sm text-white/60">{siteContent.tagline}</p>
          </div>

          {siteContent.footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold mb-4">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold mb-4">Head office</h3>
            <address className="not-italic text-sm text-white/60 space-y-1">
              <p>{siteContent.footer.address.line1}</p>
              <p>{siteContent.footer.address.line2}</p>
              {siteContent.footer.phone && <p className="pt-2">{siteContent.footer.phone}</p>}
            </address>
          </div>
        </div>
        <div className="border-t border-white/10 py-6">
          <p className="text-xs text-white/40">{siteContent.footer.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}