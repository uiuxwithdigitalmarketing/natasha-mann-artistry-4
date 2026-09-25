import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { experience } from "@/content/site";

export function ExperienceSteps() {
  return (
    <section className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="Signature process"
          title="The Natasha Experience"
          lead="Four considered steps that turn a booking into a beauty experience — the same care whether it is a wedding morning or an evening celebration."
        />
        <ol className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {experience.map((s, i) => (
            <Reveal as="li" key={s.step} delay={i * 80} className="bg-background p-8 sm:p-10">
              <p className="font-display text-4xl text-rosegold">{s.step}</p>
              <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
