import { Link } from "@tanstack/react-router";

import { Reveal } from "@/components/site/Reveal";
import { images } from "@/content/images";
import { services } from "@/content/site";

export function ServiceBlocks() {
  return (
    <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
      {services.map((s) => (
        <Reveal as="li" key={s.slug} className="h-full">
          <article className="group flex h-full flex-col overflow-hidden border border-border bg-card">
            {/* Image */}
            <figure className="zoom-slow overflow-hidden">
              <img
                src={images[s.image]}
                alt={s.alt}
                width={1200}
                height={750}
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </figure>

            {/* Content */}
            <div className="flex flex-1 flex-col px-8 py-8">
              {/* Number */}
              <p className="font-display text-4xl leading-none text-muted-foreground/20">
                {s.index}
              </p>

              {/* Title */}
              <h3 className="mt-7 font-display text-[1.65rem] leading-tight sm:text-[1.8rem]">
                {s.title}
              </h3>

              {/* Description */}
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                {s.intro}
              </p>

              {/* Link */}
              <div className="mt-auto pt-8">
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="inline-flex items-center text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-rosegold transition-opacity hover:opacity-70"
                >
                  Explore {s.navTitle}
                  <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </ul>
  );
}