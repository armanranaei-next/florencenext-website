import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { siteContent } from "@/content/site";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-100">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" aria-label="FlorenceNext home">
            <Image
              src="/header_logo.svg"
              alt="FlorenceNext — A Sirocco Group Company"
              width={315}
              height={76}
              priority
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-x-6 text-gray-700 font-medium">
            {siteContent.nav.map((item, i) => (
              <Fragment key={item.href}>
                {i > 0 && (
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full bg-brand-blue"
                  />
                )}
                <Link
                  href={item.href}
                  className="transition-colors hover:text-brand-blue"
                >
                  {item.label}
                </Link>
              </Fragment>
            ))}
          </nav>

          <Link
            href={siteContent.cta.href}
            className="hidden md:flex items-center gap-3 rounded-full border border-gray-200 bg-white py-1 pl-1 pr-5 font-medium text-gray-700 transition-colors hover:border-brand-blue"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue">
              <ArrowRight className="h-4 w-4 text-white" />
            </span>
            {siteContent.cta.label}
          </Link>
        </div>
      </Container>
    </header>
  );
}
