import { createFileRoute, Link } from "@tanstack/react-router";

import { breadcrumbSchema } from "@/components/site/Breadcrumbs";
import { CtaBand } from "@/components/site/CtaBand";
import { ExperienceSteps } from "@/components/site/ExperienceSteps";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { ServiceBlocks } from "@/components/site/ServiceBlocks";

const title = "Makeup & Hairstyling Services in Brampton | Natasha Mann Artistry";
const description =
  "Bridal makeup, bridal hairstyling, party makeup and party hairstyling in Brampton, Ontario. Explore each service and request an appointment with Natasha Mann.";

const crumbs = [
  { label: "Home", to: "/" },
  { label: "Services" },
];

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/services" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema(crumbs)),
      },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            Bridal and occasion
            <br />
            <span className="italic">beauty artistry.</span>
          </>
        }
        lead="Five ways to work with Natasha Mann Artistry in Brampton — makeup and hairstyling booked together as one look, or each on its own."
        crumbs={crumbs}
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <ServiceBlocks />
          <Reveal className="mt-20 flex flex-wrap gap-4">
            <Link to="/portfolio" className="btn-lux">
              See these looks in the portfolio
            </Link>
            <Link
              to="/bridal-makeup-brampton"
              className="btn-outline-lux text-foreground"
            >
              Bridal makeup in Brampton
            </Link>
          </Reveal>
        </div>
      </section>

      <ExperienceSteps />
      <CtaBand />
    </>
  );
}
