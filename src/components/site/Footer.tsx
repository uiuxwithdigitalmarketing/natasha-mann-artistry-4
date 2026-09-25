import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Music2 } from "lucide-react";

import { business, nav, services } from "@/content/site";

export function Footer() {
  return (
    <footer className="grain bg-secondary text-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl leading-none tracking-[0.16em]">
              {business.monogram}
            </p>
            <p className="mt-4 font-sans text-[0.7rem] font-semibold tracking-[0.3em] uppercase">
              {business.name}
            </p>
            <p className="mt-4 font-display text-xl text-champagne italic">
              {business.tagline}
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Professional makeup artistry and hairstyling for bridal and
              special occasions, based in {business.addressLine} and serving
              Brampton and surrounding Greater Toronto Area communities.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="eyebrow">Explore</h2>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/journal"
                  className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Beauty Guide
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow">Services</h2>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {s.navTitle}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="eyebrow mt-10">Contact</h2>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>
                <a href={business.phoneHref} className="link-underline hover:text-foreground">
                  {business.phone}
                </a>
              </li>
              <li>
                <a href={business.emailHref} className="link-underline break-all hover:text-foreground">
                  {business.email}
                </a>
              </li>
              <li>{business.addressLine}</li>
            </ul>

            <ul className="mt-6 flex items-center gap-3">
              <li>
                <a
                  href={business.social.instagram}
                  aria-label="Natasha Mann Artistry on Instagram"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center border border-foreground/20 transition-colors hover:border-champagne"
                >
                  <Instagram className="size-4" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={business.social.facebook}
                  aria-label="Natasha Mann Artistry on Facebook"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center border border-foreground/20 transition-colors hover:border-champagne"
                >
                  <Facebook className="size-4" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={business.social.tiktok}
                  aria-label="Natasha Mann Artistry on TikTok"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center border border-foreground/20 transition-colors hover:border-champagne"
                >
                  <Music2 className="size-4" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="rule-champagne mt-14 opacity-40" />
        <p className="mt-6 text-center text-xs tracking-[0.14em] text-muted-foreground uppercase">
          © {new Date().getFullYear()} {business.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
