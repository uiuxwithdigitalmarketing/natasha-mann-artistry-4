import { createFileRoute, Link } from "@tanstack/react-router";

import { breadcrumbSchema } from "@/components/site/Breadcrumbs";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { Testimonials } from "@/components/site/Testimonials";
import { business } from "@/content/site";

const title = "Reviews | Natasha Mann Artistry, Brampton";
const description =
  "Client reviews and testimonials for Natasha Mann Artistry — bridal makeup, hairstyling and special occasion beauty in Brampton, Ontario.";

const crumbs = [
  { label: "Home", to: "/" },
  { label: "Reviews" },
];

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/reviews" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema(crumbs)),
      },
    ],
  }),
  component: Reviews,
});

function Reviews() {
  return (
    <>
      <PageHeader
        eyebrow="Reviews"
        title={
          <>
            Beauty that speaks
            <br />
            <span className="italic">for itself.</span>
          </>
        }
        lead="Genuine client words matter more than anything we could claim. Reviews are published here exactly as clients share them — nothing is written on their behalf."
        crumbs={crumbs}
      />

      <Testimonials showCta={false} />

      <section className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 sm:py-24">
          <Reveal>
            <p className="eyebrow">Google Business Profile</p>
            <h2 className="mt-6 font-display text-3xl leading-tight sm:text-4xl">
              Worked with Natasha? Share your experience.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Reviews left on Google help other brides and clients across
              Brampton find {business.name}. Ratings shown on this site are only
              ever real, client-submitted reviews.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={business.social.googleBusinessProfile}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-lux"
              >
                Leave a Google review
              </a>
              <Link to="/portfolio" className="btn-outline-lux text-foreground">
                View the portfolio
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
