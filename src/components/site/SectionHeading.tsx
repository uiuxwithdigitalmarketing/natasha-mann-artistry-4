import type { ReactNode } from "react";

import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2
        className={cn(
          "mt-5 font-display text-[2.1rem] leading-[1.1] sm:text-5xl",
          tone === "light" ? "text-onink" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-6 text-base leading-relaxed",
            tone === "light" ? "text-onink-muted" : "text-muted-foreground",
          )}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}
