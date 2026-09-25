import { Link } from "@tanstack/react-router";

import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { business, testimonials } from "@/content/site";

function Stars() {
  return (
    <span aria-hidden="true" className="text-sm tracking-[0.3em] text-rosegold">
      ★★★★★
    </span>
  );
}

export function Testimonials({ showCta = true }: { showCta?: boolean }) {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="Social proof"
          title="Beauty That Speaks for Itself."
          lead="Client words carry more weight than any claim we could make. Real testimonials are added here as clients share them."
          align="center"
        />

        <ul className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.author + i} delay={i * 90} className="bg-background p-8 sm:p-10">
              <Stars />
              <blockquote className="mt-6 font-display text-xl leading-snug text-foreground sm:text-2xl">
                “{t.quote}”
              </blockquote>
              <footer className="mt-8">
                <p className="text-[0.7rem] font-semibold tracking-[0.24em] uppercase">
                  {t.author}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">{t.detail}</p>
                {t.isPlaceholder && (
                  <p className="mt-4 text-[0.62rem] tracking-[0.18em] text-muted-foreground uppercase">
                    Placeholder — awaiting client testimonial
                  </p>
                )}
              </footer>
            </Reveal>
          ))}
        </ul>

        {showCta && (
          <Reveal className="mt-14 flex flex-wrap items-center justify-center gap-4">
            <Link to="/reviews" className="btn-lux">
              Read More Reviews
            </Link>
            <a
              href={business.social.googleBusinessProfile}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-outline-lux text-foreground"
            >
              Review on Google
            </a>
          </Reveal>
        )}
      </div>
    </section>
  );
}
