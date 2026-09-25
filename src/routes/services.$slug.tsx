import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { breadcrumbSchema } from "@/components/site/Breadcrumbs";
import { CtaBand } from "@/components/site/CtaBand";
import { Faq, faqSchema } from "@/components/site/Faq";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Testimonials } from "@/components/site/Testimonials";
import { images } from "@/content/images";
import { faqs, services } from "@/content/site";
import { serviceSchema } from "@/lib/schema";

function findService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = findService(params.slug);
    if (!service) throw notFound();
    return { slug: service.slug };
  },
  head: ({ params }) => {
    const service = findService(params.slug);
    if (!service) {
      return {
        meta: [
          { title: "Service not found | Natasha Mann Artistry" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${service.title} in Brampton | Natasha Mann Artistry`;
    const description = `${service.lead} ${service.intro}`.slice(0, 155);
    const url = `/services/${service.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            serviceSchema(service.title, service.intro, url),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbSchema([
              { label: "Home", to: "/" },
              { label: "Services", to: "/services" },
              { label: service.navTitle },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(faqSchema(faqs.slice(0, 4))),
        },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { slug } = Route.useLoaderData();
  const service = findService(slug)!;
  const others = services.filter((s) => s.slug !== slug);

  return (
    <>
      <PageHeader
        eyebrow={`${service.index} — Service`}
        title={service.title}
        lead={service.lead}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: service.navTitle },
        ]}
      />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-20">
          <Reveal className="zoom-slow">
            <img
              src={images[service.image]}
              alt={service.alt}
              width={1200}
              height={1500}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>
          <div>
            <Reveal>
              <h2 className="font-display text-3xl leading-tight sm:text-4xl">
                The service
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {service.intro}
              </p>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-14 font-display text-3xl leading-tight sm:text-4xl">
                What to expect
              </h2>
              <ul className="mt-6 space-y-4">
                {service.expect.map((e) => (
                  <li key={e} className="flex gap-4 text-sm text-muted-foreground">
                    <span aria-hidden="true" className="mt-2.5 h-px w-6 shrink-0 bg-rosegold" />
                    {e}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={150}>
              <h2 className="mt-14 font-display text-3xl leading-tight sm:text-4xl">
                Ideal occasions
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {service.occasions}
              </p>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Serving Brampton West and surrounding Greater Toronto Area
                communities. Brides can also read the dedicated guide to{" "}
                <Link
                  to="/bridal-makeup-brampton"
                  className="link-underline text-foreground"
                >
                  bridal makeup and hairstyling in Brampton
                </Link>
                .
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/contact" className="btn-lux">
                  Book this service
                </Link>
                <Link to="/portfolio" className="btn-outline-lux text-foreground">
                  See related work
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <SectionHeading eyebrow="Also available" title="Other services" />
          <ul className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-3">
            {others.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={i * 70} className="bg-background p-8">
                <p className="eyebrow">{s.index}</p>
                <h3 className="mt-4 font-display text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.lead}</p>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="link-underline mt-6 inline-block text-[0.66rem] font-semibold tracking-[0.22em] uppercase"
                >
                  Explore {s.navTitle}
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <SectionHeading eyebrow="Questions" title="Before you book" />
          <div className="mt-10">
            <Faq items={faqs.slice(0, 4)} />
          </div>
        </div>
      </section>

      <Testimonials />
      <CtaBand title={`Book ${service.title}.`} />
    </>
  );
}
