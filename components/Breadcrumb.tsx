import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';

type Crumb = { label: string; href?: string };

interface BreadcrumbProps {
  items: Crumb[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <Container className="pt-8 md:pt-10">
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 md:gap-3 text-sm md:text-base font-medium">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={i} className="flex items-center gap-2 md:gap-3">
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="text-brand-navy/60 hover:text-brand-navy transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-brand-cyan">
                    {item.label}
                  </span>
                )}
                {!isLast && (
                  <ArrowRight aria-hidden className="size-4 text-brand-navy/40" />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </Container>
  );
}
