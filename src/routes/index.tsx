import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight } from "lucide-react";

import { CtaBand } from "@/components/site/CtaBand";
import { ExperienceSteps } from "@/components/site/ExperienceSteps";
import { Faq, faqSchema } from "@/components/site/Faq";
import { LogoMark } from "@/components/site/Logo";
import { PortfolioGallery } from "@/components/site/PortfolioGallery";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SocialGallery } from "@/components/site/SocialGallery";
import { Testimonials } from "@/components/site/Testimonials";
import { TrustStrip } from "@/components/site/TrustStrip";
import { images } from "@/content/images";
import { business, faqs, pillars, services } from "@/content/site";

const title =
  "Natasha Mann Artistry | Makeup Artist & Bridal Hair in Brampton";
const description =
  "Natasha Mann Artistry offers professional bridal makeup, hairstyling, party makeup and special occasion beauty services in Brampton, Ontario and surrounding areas.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(faqSchema(faqs)),
      },
    ],
  }),
  component: Home,
});

function Hero() {
  return (
    <section className="relative isolate grain min-h-[94svh] overflow-hidden bg-background">
      <img
        src={images.heroBridal}
        alt="Bridal makeup artist in Brampton finished look — bride with soft glam makeup and a romantic low chignon"
        width={1408}
        height={1760}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 size-full animate-in fade-in object-cover object-[70%_center] duration-[1600ms]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/10 to-black/100"
      />

      <div className="relative mx-auto flex min-h-[94svh] max-w-4xl flex-col items-center justify-center px-5 py-32 text-center sm:px-8">
      
        <Reveal delay={420}>
          <h1 className="mt-10 font-display text-[2.6rem] leading-[1.02] text-foreground sm:text-6xl lg:text-7xl text-white">
            Bridal &amp; Occasion Makeup Artist
            <span className="mt-2 block text-rosegold italic">
              in Brampton West, Ontario
            </span>
          </h1>
        </Reveal>
        <Reveal delay={640}>
          <p className="mx-auto mt-8 text-sm leading-relaxed text-foreground-muted sm:text-base text-white">
            Professional makeup artistry and hairstyling by Natasha Mann —
            personalised for your features, your outfit and your occasion, and
            available across Brampton and the surrounding GTA.
          </p>
        </Reveal>
        <Reveal delay={820}>
          <div className="mt-11 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-lux">
              Book an Appointment
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
            <a href={business.phoneHref} className="btn-outline-lux hero-accent-text">
              Mobile Services In studio
            </a>
          </div>
        </Reveal>
        <Reveal delay={1000}>
          <p className="mt-14 flex items-center justify-center gap-3 text-[0.62rem] tracking-[0.26em] text-foreground-muted uppercase text-white">
            <ArrowDown className="size-3.5 animate-bounce" aria-hidden="true" />
            Mobile service · Serving Brampton &amp; surrounding areas
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section
      aria-label="Why clients choose Natasha Mann Artistry"
      className="border-b border-border bg-secondary"
    >
      <ul className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-3">
        {pillars.map((p, i) => (
          <Reveal as="li" key={p.title} delay={i * 100}>
            <p className="eyebrow">{`0${i + 1}`}</p>
            <h2 className="mt-4 font-display text-2xl">{p.title}</h2>
            <div className="gilt-rule mt-4 w-16" />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {p.body}
            </p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Pillars />

      {/* About */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-20">
          <Reveal className="zoom-slow">
            <img
              src={images.portrait}
              alt="Natasha Mann, professional makeup artist and hairstylist in Brampton, holding a makeup brush"
              width={1200}
              height={1504}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Meet Natasha"
              title="The artist behind the look."
              lead="Hi, I'm Natasha Mann, a certified professional makeup artist and the founder of Natasha Mann Artistry."
            />
            <Reveal delay={120}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                Makeup has always been more than just beauty to me—it’s a form of art, confidence, and self-expression. I’m passionate about creating flawless, elegant looks that are customized to suit each client’s features, personality, outfit, and occasion.
              </p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
My specialty is Glam & Soft Glam Makeup, with a focus on beautiful, long-lasting and camera-ready finishes.</p>

              <p className="script mt-10 text-5xl text-rosegold">Natasha Mann</p>
              <div className="mt-8">
                <Link to="/about" className="btn-lux">
                  Discover Her Story
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow="Services"
            title="Makeup &amp; hairstyling in Brampton, designed as one experience."
            lead="Bridal and special occasion artistry — book makeup and hair together, or either on its own."
          />
          <ul className="mt-14 flex flex-col gap-4">
            {services.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={i * 70}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="gilt-card group grid grid-cols-1 items-center gap-6 p-6 sm:grid-cols-[4rem_1fr_auto] sm:gap-8 sm:p-8"
                >
                  <span className="font-display text-3xl text-rosegold sm:text-4xl">
                    {s.index}
                  </span>
                  <span className="block">
                    <h3 className="font-display text-2xl sm:text-3xl">
                      {s.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {s.lead}
                    </p>
                  </span>
                  <span className="inline-flex items-center gap-2 text-[0.64rem] font-semibold tracking-[0.22em] text-rosegold uppercase">
                    View service
                    <ArrowRight
                      className="size-3.5 transition-transform duration-500 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-12">
            <Link to="/services" className="btn-outline-lux text-foreground">
              See all services
            </Link>
          </Reveal>
        </div>
      </section>

      <ExperienceSteps />

      {/* Bridal cinematic band */}
      <section className="relative isolate grain overflow-hidden bg-background">
        <img
          src={images.bridalExperience}
          alt="Bride in Brampton standing at a window in ivory bridal wear with a soft veil before her ceremony"
          width={1800}
          height={1100}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 size-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/10 to-black/100" />
        <div className="relative mx-auto max-w-4xl px-5 py-28 text-center sm:px-8 sm:py-40">
          <Reveal>
            <p className="eyebrow">Bridal beauty</p>
            <h2 className="mt-6 font-display text-[2.3rem] leading-tight text-foreground sm:text-6xl text-white">
              Your Day Deserves More Than a Makeup Look.
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-foreground-muted sm:text-base text-white">
              From the first conversation to the final finishing touch, every
              detail is designed to make your bridal beauty experience feel
              effortless, personal, and unforgettable.
            </p>
            <div className="mt-10">
              <Link
                to="/bridal-makeup-brampton"
                className="btn-lux border-champagne bg-champagne text-ink"
              >
                Explore Bridal Beauty
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Portfolio */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected work."
            lead="Bridal, soft glam, hairstyling and special occasion looks created in Brampton and across the GTA."
          />
          <div className="mt-12">
            <PortfolioGallery limit={6} />
          </div>
          <Reveal className="mt-12">
            <Link to="/portfolio" className="btn-lux">
              View the full portfolio
            </Link>
          </Reveal>
        </div>
      </section>

      <SocialGallery />

      <Testimonials />


      {/* FAQ */}
      <section className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow="Questions"
            title="Everything you might be wondering."
          />
          <div className="mt-10">
            <Faq items={faqs} />
          </div>
          <Reveal className="mt-12">
            <Link to="/contact" className="btn-lux">
              Ask Natasha directly
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
