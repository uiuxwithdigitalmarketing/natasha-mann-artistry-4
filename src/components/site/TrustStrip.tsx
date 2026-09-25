import { trustSignals } from "@/content/site";

export function TrustStrip() {
  return (
    <section aria-label="What Natasha Mann Artistry offers" className="border-y border-border">
      <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border sm:grid-cols-4">
        {trustSignals.map((t) => (
          <li
            key={t}
            className="bg-background px-5 py-7 text-center text-[0.64rem] font-semibold tracking-[0.2em] text-muted-foreground uppercase sm:text-[0.68rem]"
          >
            {t}
          </li>
        ))}
      </ul>
    </section>
  );
}
