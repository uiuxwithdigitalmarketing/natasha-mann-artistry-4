import { Link } from "@tanstack/react-router";

export type Crumb = { label: string; to?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-5 pt-28 sm:px-8">
      <ol className="flex flex-wrap items-center gap-2 text-[0.66rem] tracking-[0.22em] text-muted-foreground uppercase">
        {items.map((c, i) => (
          <li key={c.label} className="flex items-center gap-2">
            {c.to ? (
              <Link to={c.to} className="link-underline hover:text-foreground">
                {c.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-foreground">
                {c.label}
              </span>
            )}
            {i < items.length - 1 && <span aria-hidden="true">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function breadcrumbSchema(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.to ? { item: c.to } : {}),
    })),
  };
}
