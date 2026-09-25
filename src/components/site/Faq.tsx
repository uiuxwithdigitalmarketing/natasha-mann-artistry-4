import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq({
  items,
}: {
  items: ReadonlyArray<{ q: string; a: string }>;
}) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, i) => (
        <AccordionItem key={item.q} value={`faq-${i}`} className="border-border">
          <AccordionTrigger className="py-6 text-left font-display text-xl hover:no-underline sm:text-2xl">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="max-w-3xl pb-8 text-base leading-relaxed text-muted-foreground">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function faqSchema(items: ReadonlyArray<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
