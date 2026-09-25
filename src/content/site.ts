/**
 * Single source of truth for Natasha Mann Artistry content.
 * Edit here — components read from this file so copy stays easy to update.
 * NOTE: Only verified, client-supplied facts belong here. Placeholders are
 * marked with `isPlaceholder` and must not be presented as real claims.
 */

export const business = {
  name: "Natasha Mann Artistry",
  shortName: "Natasha Mann",
  monogram: "N | M",
  tagline: "Timeless Beauty. Every Occasion.",
  role: "Professional Makeup Artist & Hairstylist",
  phone: "647-920-7117",
  phoneHref: "tel:+16479207117",
  email: "natashamannartistry@gmail.com",
  emailHref: "mailto:natashamannartistry@gmail.com",
  locality: "Brampton West",
  region: "Ontario",
  regionCode: "ON",
  country: "Canada",
  addressLine: "Brampton West, Ontario",
  serviceAreas: [
    "Brampton",
    "Mississauga",
    "Caledon",
    "Vaughan",
    "Etobicoke",
    "Greater Toronto Area",
  ],
  social: {
    // TODO: replace with Natasha's live profile URLs when supplied.
    instagram: "https://www.instagram.com/natashamannartistry/",
    instagramHandle: "@natashamannartistry",
    facebook: "https://www.facebook.com/",
    tiktok: "https://www.tiktok.com/",
    googleBusinessProfile: "https://www.google.com/maps",
  },
  // Placeholders — do not hard-code real verification IDs.
  analytics: {
    googleSearchConsoleVerification: "",
    googleAnalyticsId: "",
  },
} as const;

export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Bridal", to: "/bridal-makeup-brampton" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
] as const;

export type ServiceSlug =
  | "bridal-makeup-hairstyling"
  | "bridal-makeup"
  | "party-makeup-hairstyling"
  | "party-hairstyling"
  | "party-makeup";

export const services: Array<{
  index: string;
  slug: ServiceSlug;
  title: string;
  navTitle: string;
  lead: string;
  intro: string;
  expect: string[];
  occasions: string;
  image: "bridalHair" | "bridalMakeup" | "partyMakeup" | "partyHair";
  alt: string;
}> = [
  {
    index: "01",
    slug: "bridal-makeup",
    title: "Bridal Makeup",
    navTitle: "Bridal Makeup",
    lead: "A combo hair and makeup package for brides, at a price you will love.",
    intro:
      "Makeup and hair designed together, as one look. From the first conversation to the final pin, your bridal beauty is planned around your outfit, your venue, your photography and the way you want to feel walking into the room.",
    expect: [
      "A conversation about your vision, outfits and timeline",
      "Long-wearing, photography-considered makeup application",
      "Hairstyling built to hold through a full wedding day",
      "Coordination of makeup and hair so nothing competes",
      "Finishing touches before you step out",
    ],
    occasions: "Weddings, receptions, engagements and multi-day celebrations.",
    image: "bridalHair",
    alt: "Bridal makeup and hairstyling in Brampton finished with a soft twisted low bun and pearl pins",
  },
  {
    index: "02",
    slug: "pre-bridal-makeup",
    title: "Pre-Bridal Makeup",
    navTitle: "Pre-Bridal Makeup",
    lead: "Sophisticated makeup created for your once-in-a-lifetime moment.",
    intro:
      "Going to get married and searching for a professional makeup artist? A refined bridal makeup application built on skin preparation, considered structure and colour chosen for you — never a template look copied from a photograph.",
    expect: [
      "Skin prep suited to your skin type and the season",
      "Base built for longevity, movement and photography",
      "Eyes shaped to complement your features",
      "Lashes and lip finished to your comfort level",
      "A quiet, unhurried getting-ready experience",
    ],
    occasions: "Wedding days, civil ceremonies, engagements and bridal shoots.",
    image: "bridalMakeup",
    alt: "Bridal makeup artist in Brampton blending soft glam eyeshadow on a bride",
  },
  {
    index: "03",
    slug: "full-glam-makeup",
    title: "Full Glam Makeup",
    navTitle: "Full Glam Makeup",
    lead: "A combo package offering both party makeup and hairstyle for a lower price.",
    intro:
      "Makeup that matches your outfit paired with a hair updo that perfectly complements your style — booked together as one occasion package.",
    expect: [
      "A short consultation on outfit, mood and finish",
      "Occasion makeup, luminous or matte",
      "A complementary updo, half-up or styled waves",
      "Makeup and hair balanced as one look",
      "Touch-up guidance for the evening",
    ],
    occasions:
      "Receptions, engagements, birthdays, graduations and festive events.",
    image: "partyHair",
    alt: "Party makeup and hairstyling in Brampton with an evening updo and bronzed makeup",
  },
  {
    index: "04",
    slug: "soft-glam-makeup",
    title: "Soft Glam Makeup",
    navTitle: "Soft Glam Makeup",
    lead: "Sleek buns, soft curls and braided styling, tailored to you.",
    intro:
      "Want a beautiful hairstyle for a party? Whether you love a sleek bun, soft curls or a braided style to match your look, you get stunning hair updos created for your hair type, your outfit and how long you need it to last.",
    expect: [
      "Style direction chosen with you",
      "Heat protection and preparation",
      "Updos, half-ups, soft waves or blowout styling",
      "Secure setting for long events",
      "Optional accessory placement",
    ],
    occasions: "Receptions, family functions, formals and evening events.",
    image: "partyHair",
    alt: "Party hairstyling in Brampton with voluminous soft curls and a half updo",
  },
  {
    index: "05",
    slug: "regular-party-makeup",
    title: "Regular Party Makeup",
    navTitle: "Regular Party Makeup",
    lead: "Flawless makeup for your next occasion.",
    intro:
      "Heading to a party, an event or hosting one yourself? A flawless, beautiful makeup look from a reliable professional with years of industry experience — soft glam, bronzed neutrals or something bolder, styled to your outfit and the evening ahead.",
    expect: [
      "A short consultation on outfit, mood and finish",
      "Luminous or matte base, your preference",
      "Eye design from soft glam to defined smoke",
      "Optional lashes",
      "Touch-up guidance for the night",
    ],
    occasions:
      "Receptions, engagements, birthdays, graduations, festive events and photoshoots.",
    image: "partyMakeup",
    alt: "Party makeup in Brampton featuring a bronzed smoky eye and glossy lip",
  },
  {
    index: "06",
    slug: "traditional-makeup",
    title: "Traditional Makeup",
    navTitle: "Traditional Makeup",
    lead: "Flawless makeup for your next occasion.",
    intro:
      "Heading to a party, an event or hosting one yourself? A flawless, beautiful makeup look from a reliable professional with years of industry experience — soft glam, bronzed neutrals or something bolder, styled to your outfit and the evening ahead.",
    expect: [
      "A short consultation on outfit, mood and finish",
      "Luminous or matte base, your preference",
      "Eye design from soft glam to defined smoke",
      "Optional lashes",
      "Touch-up guidance for the night",
    ],
    occasions:
      "Receptions, engagements, birthdays, graduations, festive events and photoshoots.",
    image: "partyMakeup",
    alt: "Party makeup in Brampton featuring a bronzed smoky eye and glossy lip",
  },
  {
    index: "07",
    slug: "photoshoot-makeup",
    title: "Photoshoot Makeup",
    navTitle: "Photoshoot Makeup",
    lead: "Flawless makeup for your next occasion.",
    intro:
      "Heading to a party, an event or hosting one yourself? A flawless, beautiful makeup look from a reliable professional with years of industry experience — soft glam, bronzed neutrals or something bolder, styled to your outfit and the evening ahead.",
    expect: [
      "A short consultation on outfit, mood and finish",
      "Luminous or matte base, your preference",
      "Eye design from soft glam to defined smoke",
      "Optional lashes",
      "Touch-up guidance for the night",
    ],
    occasions:
      "Receptions, engagements, birthdays, graduations, festive events and photoshoots.",
    image: "partyMakeup",
    alt: "Party makeup in Brampton featuring a bronzed smoky eye and glossy lip",
  },
];

/** Client-stated brand promises, from the studio's own service card. */
export const pillars = [
  {
    title: "Flawless Confidence",
    body: "Makeup and hair finished to a professional standard, so you never think about it again once you step out.",
  },
  {
    title: "Personalized Just For You",
    body: "Nothing copied from a photograph. Every look is designed around your features, outfit and occasion.",
  },
  {
    title: "Beauty With Care",
    body: "Gentle preparation, clean products and an unhurried appointment that feels calm from start to finish.",
  },
] as const;

export const mobileService = {
  headline: "Mobile Service — Call to Discuss",
  body: "Proudly based in Brampton West, serving Brampton and surrounding areas.",
} as const;

export const experience = [
  {
    step: "01",
    title: "Consult",
    body: "We understand your vision — your outfit, your venue and the way you want to feel.",
  },
  {
    step: "02",
    title: "Create",
    body: "Your look is tailored to you: your features, your skin and your occasion.",
  },
  {
    step: "03",
    title: "Refine",
    body: "Every detail is thoughtfully perfected, from base longevity to a single strand of hair.",
  },
  {
    step: "04",
    title: "Glow",
    body: "You step into your moment feeling confident, comfortable and beautifully yourself.",
  },
] as const;

export const trustSignals = [
  "Professional Makeup Artistry",
  "Makeup & Hairstyling Together",
  "Bridal & Special Occasion",
  "Brampton West, Ontario",
] as const;

/**
 * Testimonials. `isPlaceholder: true` entries are clearly marked in the UI and
 * are NOT used for review structured data. Replace with real, client-supplied
 * testimonials — never fabricate reviews.
 */
export const testimonials = [
  {
    quote:
      "Placeholder — add a real client testimonial here once Natasha supplies it.",
        author: "Client name",
    detail: "Bridal makeup & hairstyling",
    isPlaceholder: true,
  },
  {
    quote:
      "Placeholder — add a real client testimonial here once Natasha supplies it.",
    author: "Client name",
    detail: "Party makeup",
    isPlaceholder: true,
  },
  {
    quote:
      "Placeholder — add a real client testimonial here once Natasha supplies it.",
    author: "Client name",
    detail: "Bridal makeup",
    isPlaceholder: true,
  },
] as const;

export const faqs = [
  {
    q: "Do you offer bridal makeup in Brampton?",
    a: "Yes. Bridal makeup is a core part of Natasha Mann Artistry, based in Brampton West, Ontario and available to brides across Brampton and surrounding Greater Toronto Area communities.",
  },
  {
    q: "Do you provide hairstyling along with makeup?",
    a: "Yes. Makeup and hairstyling can be booked together as one complete look, or separately if you already have hair arranged.",
  },
  {
    q: "Do you travel for bridal appointments?",
    a: "Travel within Brampton and nearby areas can be arranged. Share your venue and timing in your booking request and Natasha will confirm availability and any travel details.",
  },
  {
    q: "How far in advance should I book bridal makeup?",
    a: "Earlier is always better, especially for peak wedding dates. If your date is set, send an enquiry as soon as you can so the time can be held for you.",
  },
  {
    q: "Do you offer makeup for parties and special occasions?",
    a: "Yes — party makeup and party hairstyling are available for receptions, engagements, birthdays, graduations and festive events.",
  },
  {
    q: "Can I request a specific makeup style?",
    a: "Absolutely. Bring photographs, outfit details or a mood you love. Your look is then adapted to your features rather than copied directly.",
  },
  {
    q: "How do I book an appointment?",
    a: "Send an appointment request through the contact page, or call or email directly. You will receive a reply to confirm availability and the details of your booking.",
  },
] as const;

export const portfolio = [
  {
    key: "bridalHair",
    category: "Bridal",
    caption: "Bridal hairstyling — soft twisted low bun",
    alt: "Professional bridal hairstyling in Brampton with a twisted low bun and pearl pins",
    span: "tall",
  },
  {
    key: "bridalMakeup",
    category: "Bridal",
    caption: "Bridal makeup — luminous soft glam",
    alt: "Bridal makeup artist in Brampton creating a soft glam bridal look",
    span: "tall",
  },
  {
    key: "softGlam",
    category: "Soft Glam",
    caption: "Soft glam — champagne skin, neutral lip",
    alt: "Soft glam makeup in Brampton with champagne skin and a neutral rose lip",
    span: "tall",
  },
  {
    key: "partyMakeup",
    category: "Makeup",
    caption: "Party makeup — bronzed smoke",
    alt: "Party makeup in Brampton with a bronzed smoky eye for an evening celebration",
    span: "tall",
  },
  {
    key: "partyHair",
    category: "Hairstyle",
    caption: "Party hairstyling — soft waves, half updo",
    alt: "Party hairstyling in Brampton with soft waves and a half updo",
    span: "tall",
  },
  {
    key: "occasion",
    category: "Special Occasion",
    caption: "Special occasion — classic definition",
    alt: "Special occasion makeup and hairstyling in Brampton with classic definition",
    span: "tall",
  },
  {
    key: "bridalPortrait",
    category: "Bridal",
    caption: "Bridal beauty — finished look",
    alt: "Bride in Brampton smiling with finished bridal makeup and gold jewellery",
    span: "wide",
  },
  {
    key: "detail",
    category: "Makeup",
    caption: "Behind the artistry",
    alt: "Professional makeup brushes and a neutral eyeshadow palette on ivory silk",
    span: "wide",
  },
] as const;

/**
 * Locally relevant FAQs per service. Used for on-page accordions and FAQPage
 * structured data on each individual service page.
 */
export const serviceFaqs: Record<
  ServiceSlug,
  ReadonlyArray<{ q: string; a: string }>
> = {
  "bridal-makeup-hairstyling": [
    {
      q: "Do you offer bridal makeup and hairstyling together in Brampton?",
      a: "Yes. The combined package covers both bridal makeup and bridal hairstyling as one designed look, for brides in Brampton West, Brampton and the surrounding Greater Toronto Area.",
    },
    {
      q: "Will you travel to my venue or hotel in Brampton or Mississauga?",
      a: "Mobile service is available across Brampton, Mississauga, Caledon, Vaughan and Etobicoke. Share your venue and getting-ready time and Natasha will confirm travel and arrival details.",
    },
    {
      q: "How early do you arrive on a Brampton wedding morning?",
      a: "Arrival is planned backwards from your photography and ceremony times, with buffer built in for traffic on Queen Street and Highway 410, so hair and makeup are finished calmly and on schedule.",
    },
    {
      q: "Can you cover a multi-day South Asian wedding?",
      a: "Yes. Many Brampton celebrations run over several days, and looks can be planned per function so each event feels different while staying cohesive.",
    },
    {
      q: "How far in advance should I book?",
      a: "Peak Brampton wedding dates book months ahead. Once your date is set, send an enquiry so the morning can be held for you.",
    },
  ],
  "bridal-makeup": [
    {
      q: "Are you a bridal makeup artist based in Brampton?",
      a: "Yes — Natasha Mann Artistry is based in Brampton West, Ontario and works with brides throughout Brampton and nearby Greater Toronto Area communities.",
    },
    {
      q: "Will my bridal makeup last through a full Ontario wedding day?",
      a: "The base is built for longevity and photography, with product choices adjusted for humid Ontario summers or dry winter venues.",
    },
    {
      q: "Can I bring inspiration photos?",
      a: "Please do. Photographs, outfit details and jewellery help set the direction, and the look is then adapted to your features rather than copied.",
    },
    {
      q: "Do you work with all skin tones and skin types?",
      a: "Yes. Shades are matched and blended for you, and preparation is chosen to suit your skin type and the season.",
    },
    {
      q: "Is hairstyling available if I only book makeup?",
      a: "Hairstyling can be added, or you can book the combined bridal makeup and hairstyling package for one coordinated look.",
    },
  ],
  "party-makeup-hairstyling": [
    {
      q: "Do you offer party makeup and hairstyling as one package in Brampton?",
      a: "Yes. The combined party package includes occasion makeup and a complementary updo or styled hair, priced lower than booking the two separately.",
    },
    {
      q: "What kinds of events do Brampton clients book this for?",
      a: "Receptions, engagements, birthdays, graduations, festive events and family functions across Brampton and the wider GTA.",
    },
    {
      q: "How long does a combined appointment take?",
      a: "Plan for roughly two to two and a half hours for makeup and hair together, depending on hair length, density and the style chosen.",
    },
    {
      q: "Can several guests book on the same day?",
      a: "Group bookings are often possible. Share how many people and your event time so the schedule can be planned properly.",
    },
    {
      q: "Do you come to my home in Brampton?",
      a: "Mobile appointments in Brampton and surrounding areas can be arranged — call to discuss location and timing.",
    },
  ],
  "party-hairstyling": [
    {
      q: "What party hairstyles can I book in Brampton?",
      a: "Sleek buns, soft curls, half updos, braided styling and blowout waves — chosen for your hair type, outfit and how long the event runs.",
    },
    {
      q: "Will my style hold through a long reception?",
      a: "Styles are prepared with heat protection and set securely so they hold through dancing and a full evening.",
    },
    {
      q: "Can I add hair accessories or extensions?",
      a: "Yes. Bring your pins, clips, dupatta or extensions and they will be worked into the style and placed with your outfit in mind.",
    },
    {
      q: "Do you style short hair?",
      a: "Absolutely — short and mid-length hair can be styled with volume, waves or a polished finish suited to the occasion.",
    },
    {
      q: "Can makeup be added to a hairstyling booking?",
      a: "Yes. Many Brampton clients add party makeup, or book the combined party makeup and hairstyling package.",
    },
  ],
  "party-makeup": [
    {
      q: "Do you offer party makeup in Brampton and nearby areas?",
      a: "Yes — party makeup is available across Brampton, Mississauga, Caledon, Vaughan, Etobicoke and the Greater Toronto Area.",
    },
    {
      q: "Which looks are most requested?",
      a: "Soft glam and bronzed neutrals are the most popular for Brampton receptions and family functions, with bolder smoked eyes for evening events.",
    },
    {
      q: "How long does a party makeup appointment take?",
      a: "Usually about an hour to seventy-five minutes, including a short consultation on your outfit, mood and preferred finish.",
    },
    {
      q: "Are lashes included?",
      a: "Lashes are optional and can be added to suit your comfort level and the occasion.",
    },
    {
      q: "Can I book on short notice?",
      a: "Sometimes — call 647-920-7117 and if the time is open it can often be arranged.",
    },
  ],
};

/** Portfolio categories curated for each service page gallery. */
export const serviceGalleryCategories: Record<ServiceSlug, readonly string[]> = {
  "bridal-makeup-hairstyling": ["Bridal", "Hairstyle"],
  "bridal-makeup": ["Bridal", "Soft Glam"],
  "party-makeup-hairstyling": ["Makeup", "Hairstyle", "Special Occasion"],
  "party-hairstyling": ["Hairstyle", "Special Occasion"],
  "party-makeup": ["Makeup", "Soft Glam", "Special Occasion"],
};
