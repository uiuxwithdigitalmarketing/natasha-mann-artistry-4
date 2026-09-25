import { business, services } from "@/content/site";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "@id": "/#business",
  name: business.name,
  description:
    "Professional bridal makeup, hairstyling, party makeup and special occasion beauty services in Brampton, Ontario and surrounding areas.",
  url: "/",
  telephone: `+1-${business.phone}`,
  email: business.email,
  image: "/",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: business.locality,
    addressRegion: business.regionCode,
    addressCountry: "CA",
  },
  areaServed: business.serviceAreas.map((a) => ({ "@type": "Place", name: a })),
  sameAs: [
    business.social.instagram,
    business.social.facebook,
    business.social.tiktok,
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Makeup and hairstyling services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        url: `/services/${s.slug}`,
      },
    })),
  },
};

export function serviceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    serviceType: name,
    provider: {
      "@type": "BeautySalon",
      name: business.name,
      telephone: `+1-${business.phone}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: business.locality,
        addressRegion: business.regionCode,
        addressCountry: "CA",
      },
    },
    areaServed: business.serviceAreas.map((a) => ({ "@type": "Place", name: a })),
  };
}
