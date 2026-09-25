import { createFileRoute, Link } from "@tanstack/react-router";

import { breadcrumbSchema } from "@/components/site/Breadcrumbs";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";
import { PortfolioGallery } from "@/components/site/PortfolioGallery";
import { SocialGallery } from "@/components/site/SocialGallery";
import { Reveal } from "@/components/site/Reveal";

const title = "Portfolio | Bridal & Occasion Makeup in Brampton";
const description =
  "A gallery of bridal makeup, bridal hairstyling, soft glam and special occasion looks created by Natasha Mann Artistry in Brampton, Ontario.";

const crumbs = [
  { label: "Home", to: "/" },
  { label: "Portfolio" },
];

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/portfolio" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema(crumbs)),
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title={
          <>
            The work,
            <br />
            <span className="italic">up close.</span>
          </>
        }
        lead="Bridal beauty, soft glam, hairstyling and special occasion looks. Select any image for a larger view — use the arrow keys or swipe to move through the gallery."
        crumbs={crumbs}
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <PortfolioGallery />
          <Reveal className="mt-16 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-lux">
              Book a look like this
            </Link>
            <Link to="/services" className="btn-outline-lux text-foreground">
              Browse services
            </Link>
          </Reveal>
        </div>
      </section>

      <SocialGallery />

      <CtaBand

        title="Ready to be in front of the camera?"
        body="Tell Natasha which looks you are drawn to and she will design something built for your features and your occasion."
      />
    </>
  );
}
