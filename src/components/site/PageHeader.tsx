import type { ReactNode } from "react";

import { Breadcrumbs, type Crumb } from "@/components/site/Breadcrumbs";
import { Reveal } from "@/components/site/Reveal";

export function PageHeader({
  eyebrow,
  title,
  lead,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  crumbs: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border">
      <Breadcrumbs items={crumbs} />
      <div className="mx-auto max-w-7xl px-5 pt-10 pb-16 sm:px-8 sm:pt-14 sm:pb-24">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-6 max-w-4xl font-display text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {lead && (
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {lead}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
