import { createFileRoute, Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Music2, Phone } from "lucide-react";

import { BookingForm } from "@/components/site/BookingForm";
import { breadcrumbSchema } from "@/components/site/Breadcrumbs";
import { Faq, faqSchema } from "@/components/site/Faq";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { business, faqs } from "@/content/site";

const title = "Contact & Booking | Natasha Mann Artistry, Brampton";
const description =
  "Book bridal makeup, hairstyling or party makeup with Natasha Mann Artistry in Brampton West, Ontario. Call 647-920-7117 or send an appointment request.";

const crumbs = [
  { label: "Home", to: "/" },
  { label: "Contact" },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema(crumbs)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqSchema(faqs.slice(2, 7))),
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Booking"
        title={
          <>
            Let&apos;s create
            <br />
            <span className="italic">your look.</span>
          </>
        }
        lead="Share your occasion, date and the look you have in mind. Natasha replies personally to confirm availability and next steps."
        crumbs={crumbs}
      />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <h2 className="font-display text-3xl">{business.name}</h2>
            <ul className="mt-8 space-y-6 text-sm">
              <li className="flex gap-4">
                <MapPin className="mt-0.5 size-4 shrink-0 text-rosegold" aria-hidden="true" />
                <span>
                  <span className="block font-semibold">{business.addressLine}</span>
                  <span className="mt-1 block text-muted-foreground">
                    Serving Brampton, Mississauga, Caledon, Vaughan, Etobicoke and
                    the wider Greater Toronto Area.
                  </span>
                </span>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-0.5 size-4 shrink-0 text-rosegold" aria-hidden="true" />
                <a href={business.phoneHref} className="link-underline font-semibold">
                  {business.phone}
                </a>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-0.5 size-4 shrink-0 text-rosegold" aria-hidden="true" />
                <a href={business.emailHref} className="link-underline font-semibold break-all">
                  {business.email}
                </a>
              </li>
            </ul>

            <div className="rule-champagne my-10" />

            <h3 className="eyebrow">Follow the work</h3>
            <ul className="mt-5 flex gap-3">
              <li>
                <a
                  href={business.social.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Natasha Mann Artistry on Instagram"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center border border-border transition-colors hover:border-rosegold"
                >
                  <Instagram className="size-4" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={business.social.facebook}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Natasha Mann Artistry on Facebook"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center border border-border transition-colors hover:border-rosegold"
                >
                  <Facebook className="size-4" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={business.social.tiktok}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Natasha Mann Artistry on TikTok"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center border border-border transition-colors hover:border-rosegold"
                >
                  <Music2 className="size-4" aria-hidden="true" />
                </a>
              </li>
            </ul>

            <p className="mt-10 text-sm leading-relaxed text-muted-foreground">
              Planning a wedding? Start with the guide to{" "}
              <Link to="/bridal-makeup-brampton" className="link-underline text-foreground">
                bridal makeup in Brampton
              </Link>{" "}
              or browse{" "}
              <Link to="/services" className="link-underline text-foreground">
                all makeup and hairstyling services
              </Link>
              .
            </p>
          </Reveal>

          <Reveal delay={80}>
            <BookingForm />
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <SectionHeading eyebrow="Booking questions" title="Good to know" />
          <div className="mt-10">
            <Faq items={faqs.slice(2, 7)} />
          </div>
        </div>
      </section>
    </>
  );
}
