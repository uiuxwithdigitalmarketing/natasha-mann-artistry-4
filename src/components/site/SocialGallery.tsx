import { Instagram } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { images } from "@/content/images";
import { business } from "@/content/site";

const feed = [
  {
    src: images.softGlam,
    alt: "Soft glam makeup in Brampton with champagne skin and a neutral rose lip",
  },
  {
    src: images.bridalHair,
    alt: "Bridal hairstyling in Brampton — a soft twisted low bun with pearl pins",
  },
  {
    src: images.bridalMakeup,
    alt: "Luminous bridal soft glam makeup created by Natasha Mann Artistry",
  },
  {
    src: images.partyMakeup,
    alt: "Party makeup in Brampton with a warm bronze eye and glossy lip",
  },
  {
    src: images.detail,
    alt: "Makeup brushes and palettes arranged on ivory silk in the studio",
  },
  {
    src: images.occasion,
    alt: "Special occasion makeup and hairstyling for a celebration in Brampton",
  },
] as const;

/** Instagram feed band — editorial grid linking through to the profile. */
export function SocialGallery() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="Instagram"
          title="Follow the artistry."
          lead="Behind the looks, the beauty and the moments — shared from the chair, on location across Brampton and the GTA."
          align="center"
        />

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {feed.map((item, i) => (
            <Reveal key={item.alt} delay={i * 70} className="group">
              <a
                href={business.social.instagram}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`View on Instagram — ${item.alt}`}
                className="relative block overflow-hidden bg-card"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="aspect-square w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.07]"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 grid place-items-center bg-foreground/0 transition-colors duration-700 group-hover:bg-foreground/10"
                >
                  <Instagram className="size-6 text-rosegold opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140} className="mt-12 text-center">
          <a
            href={business.social.instagram}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-outline-lux text-foreground"
          >
            <Instagram className="size-3.5" aria-hidden="true" />
            Follow {business.social.instagramHandle}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
