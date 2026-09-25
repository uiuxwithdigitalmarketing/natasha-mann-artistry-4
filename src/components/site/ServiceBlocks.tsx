import { Link } from "@tanstack/react-router";

import { Reveal } from "@/components/site/Reveal";
import { images } from "@/content/images";
import { services } from "@/content/site";
import { cn } from "@/lib/utils";

/** Large editorial service blocks, alternating image side. */
export function ServiceBlocks() {
  return (
    <ul className="space-y-24 sm:space-y-32">
      {services.map((s, i) => (
        <Reveal as="li" key={s.slug}>
          <article
            className={cn(
              "grid items-center gap-8 lg:grid-cols-2 lg:gap-16",
              i % 2 === 1 && "lg:[&>figure]:order-2",
            )}
          >
            <figure className="zoom-slow">
              <img
                src={images[s.image]}
                alt={s.alt}
                width={1200}
                height={1500}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
            </figure>
            <div>
              <p className="eyebrow">
                {s.index} — {s.title}
              </p>
              <h3 className="mt-5 font-display text-[2rem] leading-tight sm:text-4xl">
                {s.lead}
              </h3>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {s.intro}
              </p>

              <h4 className="mt-10 text-[0.66rem] font-semibold tracking-[0.24em] uppercase">
                What to expect
              </h4>
              <ul className="mt-4 space-y-3">
                {s.expect.map((e) => (
                  <li key={e} className="flex gap-3 text-sm text-muted-foreground">
                    <span aria-hidden="true" className="mt-2 h-px w-5 shrink-0 bg-rosegold" />
                    {e}
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Ideal for: </span>
                {s.occasions}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="btn-lux"
                >
                  Explore {s.navTitle}
                </Link>
                <Link to="/contact" className="btn-outline-lux text-foreground">
                  Book this service
                </Link>
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </ul>
  );
}
