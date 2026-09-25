import { createFileRoute, Link } from "@tanstack/react-router";

import { breadcrumbSchema } from "@/components/site/Breadcrumbs";
import { CtaBand } from "@/components/site/CtaBand";
import { ExperienceSteps } from "@/components/site/ExperienceSteps";
import { Faq, faqSchema } from "@/components/site/Faq";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Testimonials } from "@/components/site/Testimonials";
import { images } from "@/content/images";
import { business, faqs } from "@/content/site";
import { serviceSchema } from "@/lib/schema";

const title = "Bridal Makeup Artist in Brampton, Ontario | Natasha Mann Artistry";
const description =
  "Bridal makeup and hairstyling in Brampton, Ontario by Natasha Mann Artistry. A personalised bridal beauty experience for brides in Brampton and the GTA.";

const crumbs = [
  { label: "Home", to: "/" },
  { label: "Bridal Makeup in Brampton" },
];

export const Route = createFileRoute("/bridal-makeup-brampton")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/bridal-makeup-brampton" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/bridal-makeup-brampton" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          serviceSchema(
            "Bridal makeup and hairstyling in Brampton",
            description,
            "/bridal-makeup-brampton",
          ),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema(crumbs)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqSchema(faqs)),
      },
    ],
  }),
  component: BridalBrampton,
});

function BridalBrampton() {
  return (
    <>
      <PageHeader
        eyebrow="Brampton, Ontario"
        title={
          <>
            Bridal Makeup Artist
            <br />
            <span className="italic">in Brampton, Ontario</span>
          </>
        }
        lead="Natasha Mann Artistry is a bridal makeup artist in Brampton West, creating bridal makeup and hairstyling for brides across Brampton and the surrounding Greater Toronto Area."
        crumbs={crumbs}
      >
        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/contact" className="btn-lux">
            Check your wedding date
          </Link>
          <Link to="/portfolio" className="btn-outline-lux text-foreground">
            See bridal work
          </Link>
        </div>
      </PageHeader>

      {/* Introduction */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-20">
          <Reveal className="zoom-slow">
            <img
              src={images.bridalPortrait}
              alt="Bride in Brampton with finished bridal makeup, soft blush and delicate gold jewellery"
              width={1200}
              height={900}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Meet your artist"
              title="A bridal beauty experience, not just an appointment."
              lead="Natasha is a professional makeup artist in Brampton whose work sits between editorial refinement and comfortable wearability. Bridal bookings are planned in advance, unhurried on the day, and designed to hold from the first photograph to the last dance."
            />
            <Reveal delay={100}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Because makeup and hair are created by the same artist, nothing
                competes. Colour, structure and styling are balanced together, so
                your bridal look reads as one considered whole in person and on
                camera.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Bridal makeup + hairstyling */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow="What is offered"
            title="Bridal makeup and hairstyling in Brampton"
            lead="Book the complete look, or makeup and hair individually depending on what your day needs."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <Reveal className="zoom-slow">
              <img
                src={images.bridalMakeup}
                alt="Bridal makeup artist in Brampton creating a soft glam bridal look with shimmer eyeshadow"
                width={1200}
                height={1500}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
              <h3 className="mt-8 font-display text-3xl">Bridal makeup</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Skin prepared for the season, a base built for longevity and
                photography, and eyes shaped to your features. Read the full{" "}
                <Link
                  to="/services/$slug"
                  params={{ slug: "bridal-makeup" }}
                  className="link-underline text-foreground"
                >
                  bridal makeup service details
                </Link>
                .
              </p>
            </Reveal>
            <Reveal delay={90} className="zoom-slow">
              <img
                src={images.bridalHair}
                alt="Professional bridal hairstyling in Brampton with a twisted low bun and pearl pins"
                width={1200}
                height={1500}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
              <h3 className="mt-8 font-display text-3xl">Bridal hairstyling</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Updos, soft waves and structured styling designed around your
                outfit, veil and jewellery. Available as part of{" "}
                <Link
                  to="/services/$slug"
                  params={{ slug: "bridal-makeup-hairstyling" }}
                  className="link-underline text-foreground"
                >
                  bridal makeup and hairstyling together
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <ExperienceSteps />

      {/* Location */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="Location"
            title="Based in Brampton West, serving the GTA."
            lead="Natasha Mann Artistry works with brides looking for professional bridal beauty services near Brampton, including nearby Greater Toronto Area communities."
          />
          <Reveal delay={80}>
            <ul className="grid grid-cols-2 gap-px border border-border bg-border">
              {business.serviceAreas.map((a) => (
                <li
                  key={a}
                  className="bg-background px-5 py-6 text-[0.68rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase"
                >
                  {a}
                </li>
              ))}
            </ul>
            <ul className="mt-8 space-y-3 text-sm">
              <li>
                <span className="font-semibold">{business.addressLine}</span>
              </li>
              <li>
                <a href={business.phoneHref} className="link-underline">
                  {business.phone}
                </a>
              </li>
              <li>
                <a href={business.emailHref} className="link-underline break-all">
                  {business.email}
                </a>
              </li>
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              Travel to venues within Brampton and nearby areas can be arranged —
              share your location when you{" "}
              <Link to="/contact" className="link-underline text-foreground">
                request a bridal appointment
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <Testimonials showCta />

      {/* FAQ */}
      <section className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading eyebrow="Bridal FAQ" title="Brampton bride questions" />
          <div className="mt-10">
            <Faq items={faqs} />
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Bridal booking"
        title="Hold your wedding date."
        body="Send your date, venue and outfit details and Natasha will confirm availability for your bridal makeup and hairstyling."
      />
    </>
  );
}
