import { createFileRoute, Link } from "@tanstack/react-router";

import { breadcrumbSchema } from "@/components/site/Breadcrumbs";
import { CtaBand } from "@/components/site/CtaBand";
import { ExperienceSteps } from "@/components/site/ExperienceSteps";
import { LogoMark } from "@/components/site/Logo";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { images } from "@/content/images";
import { business } from "@/content/site";

const title = "About Natasha Mann | Makeup Artist & Hairstylist in Brampton";
const description =
  "Meet Natasha Mann — a professional makeup artist and hairstylist in Brampton West, Ontario, specialising in bridal and special occasion beauty across the GTA.";

const crumbs = [
  { label: "Home", to: "/" },
  { label: "About" },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema(crumbs)),
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        eyebrow="Meet Natasha"
        title={
          <>
            The artist behind
            <br />
            <span className="italic">the look.</span>
          </>
        }
        lead="Natasha Mann is a professional makeup artist and hairstylist based in Brampton West, Ontario, creating bridal and special occasion beauty for clients across Brampton and the surrounding Greater Toronto Area."
        crumbs={crumbs}
      />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal className="zoom-slow lg:sticky lg:top-28 lg:self-start">
            <img
              src={images.portrait}
              alt="Portrait of Natasha Mann, professional makeup artist and hairstylist in Brampton West, Ontario"
              width={1200}
              height={1504}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>

          <div className="max-w-2xl">
            <Reveal>
              <h2 className="font-display text-3xl leading-tight sm:text-4xl">
                Her approach
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Every appointment begins with listening. Before a single brush is
                lifted, Natasha wants to understand the occasion, the outfit, the
                light you will be photographed in, and the version of yourself
                you feel most confident as. The look is then designed around that
                — not around whichever trend happens to be circulating.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-14 font-display text-3xl leading-tight sm:text-4xl">
                Her artistry
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Makeup and hairstyling are treated as one composition. Skin is
                prepared thoughtfully so the base sits comfortably for hours.
                Structure — brow, eye, cheek — is shaped to your own features.
                Hair is built to hold through a full day of movement, embraces
                and photographs, without ever looking rigid.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <h2 className="mt-14 font-display text-3xl leading-tight sm:text-4xl">
                Her philosophy
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Luxury beauty is not about doing more. It is about restraint,
                precision, and the confidence of knowing every detail has been
                considered. Natasha&apos;s aim is that you look in the mirror and
                recognise yourself immediately — simply at your most polished.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <h2 className="mt-14 font-display text-3xl leading-tight sm:text-4xl">
                Your experience
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Appointments are unhurried and calm. You are welcome to bring
                inspiration, outfit photographs, or nothing at all. Whether it is
                a{" "}
                <Link
                  to="/services/$slug"
                  params={{ slug: "bridal-makeup-hairstyling" }}
                  className="link-underline text-foreground"
                >
                  complete bridal makeup and hairstyling booking
                </Link>{" "}
                or{" "}
                <Link
                  to="/services/$slug"
                  params={{ slug: "party-makeup" }}
                  className="link-underline text-foreground"
                >
                  party makeup for an evening celebration
                </Link>
                , the same attention applies.
              </p>

              <p className="script mt-12 text-5xl text-rosegold">Natasha Mann</p>
              <p className="mt-2 text-[0.66rem] tracking-[0.24em] text-muted-foreground uppercase">
                {business.role} · {business.addressLine}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/portfolio" className="btn-lux">
                  See the portfolio
                </Link>
                <Link to="/contact" className="btn-outline-lux text-foreground">
                  Book an appointment
                </Link>
              </div>
            </Reveal>

            <Reveal delay={260} className="mt-16 max-w-xs">
              <LogoMark />
            </Reveal>
          </div>
        </div>
      </section>

      <ExperienceSteps />
      <CtaBand
        eyebrow="Next step"
        title="Let's plan your look."
        body="Share your occasion and Natasha will reply with availability and the details of your appointment."
      />
    </>
  );
}
