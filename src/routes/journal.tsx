import { createFileRoute, Link } from "@tanstack/react-router";

import { breadcrumbSchema } from "@/components/site/Breadcrumbs";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

const title = "Beauty Guide | Natasha Mann Artistry, Brampton";
const description =
  "The Natasha Mann Artistry beauty guide — practical bridal and occasion beauty articles for Brampton clients, published as they are written.";

const crumbs = [
  { label: "Home", to: "/" },
  { label: "Beauty Guide" },
];

/** Planned articles. Nothing is published until it is genuinely written. */
const planned = [
  {
    heading: "Bridal Makeup Guide for Brampton Brides",
    note: "What to plan, when to plan it, and how to brief your artist.",
    to: "/bridal-makeup-brampton" as const,
    linkLabel: "Bridal makeup in Brampton",
  },
  {
    heading: "How to Prepare Your Skin Before Bridal Makeup",
    note: "The weeks before, the night before, and the morning of.",
    to: "/services" as const,
    linkLabel: "Bridal services",
  },
  {
    heading: "Bridal Makeup vs. Party Makeup: What's the Difference?",
    note: "Longevity, structure and finish — and why they are not the same booking.",
    to: "/services" as const,
    linkLabel: "Compare services",
  },
  {
    heading: "How Early Should You Book a Bridal Makeup Artist?",
    note: "Peak dates, holds and realistic timelines in the GTA.",
    to: "/contact" as const,
    linkLabel: "Check availability",
  },
  {
    heading: "How to Choose Your Bridal Hairstyle",
    note: "Matching hair to your outfit, veil, jewellery and hair type.",
    to: "/portfolio" as const,
    linkLabel: "Hairstyling portfolio",
  },
  {
    heading: "Soft Glam Makeup for Special Occasions",
    note: "The most requested occasion look, explained.",
    to: "/portfolio" as const,
    linkLabel: "Soft glam looks",
  },
];

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/journal" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/journal" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema(crumbs)),
      },
    ],
  }),
  component: Journal,
});

function Journal() {
  return (
    <>
      <PageHeader
        eyebrow="Beauty Guide"
        title={
          <>
            Notes on beauty,
            <br />
            <span className="italic">written properly.</span>
          </>
        }
        lead="This guide is intentionally empty for now. Rather than filling it with generic articles, each piece will be written from real client questions and published when it is genuinely useful."
        crumbs={crumbs}
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <SectionHeading
            eyebrow="Planned"
            title="Coming to the guide"
            lead="The first articles Natasha plans to publish. Each will link to the relevant service and booking page."
          />
          <ul className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {planned.map((p, i) => (
              <Reveal as="li" key={p.heading} delay={i * 60} className="bg-background p-8">
                <p className="eyebrow">In progress</p>
                <h3 className="mt-4 font-display text-2xl leading-snug">{p.heading}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.note}</p>
                <Link
                  to={p.to}
                  className="link-underline mt-6 inline-block text-[0.66rem] font-semibold tracking-[0.22em] uppercase"
                >
                  {p.linkLabel}
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Have a question worth an article?"
        body="Ask Natasha directly — the most useful questions become the next guide."
      />
    </>
  );
}
