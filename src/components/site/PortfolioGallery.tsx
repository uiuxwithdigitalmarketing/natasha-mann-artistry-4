import { X } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

import { Reveal } from "@/components/site/Reveal";
import { images, type ImageKey } from "@/content/images";
import { portfolio } from "@/content/site";
import { cn } from "@/lib/utils";

const allCategories = [
  "Bridal",
  "Makeup",
  "Hairstyle",
  "Soft Glam",
  "Special Occasion",
] as const;

export function PortfolioGallery({
  limit,
  only,
}: {
  limit?: number;
  /** Restrict the gallery (and its filters) to these portfolio categories. */
  only?: readonly string[];
}) {
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<number | null>(null);
  const [touchX, setTouchX] = useState<number | null>(null);

  const categories = useMemo(
    () => ["All", ...(only ?? allCategories)],
    [only],
  );
  const showFilters = !limit || !!only;

  const items = useMemo(() => {
    const pool = only
      ? portfolio.filter((p) => only.includes(p.category))
      : [...portfolio];
    const filtered =
      filter === "All" ? pool : pool.filter((p) => p.category === filter);
    return limit ? filtered.slice(0, limit) : filtered;
  }, [filter, limit, only]);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setActive((cur) => (cur === null ? cur : (cur + dir + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close, step]);

  const current = active === null ? null : items[active];

  return (
    <div>
      {showFilters && (
        <ul className="flex flex-wrap gap-2" role="list">
          {categories.map((c) => (
            <li key={c}>
              <button
                type="button"
                onClick={() => setFilter(c)}
                aria-pressed={filter === c}
                className={cn(
                  "min-h-11 border px-5 py-2 text-[0.66rem] font-semibold tracking-[0.2em] uppercase transition-colors",
                  filter === c
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:border-rosegold hover:text-foreground",
                )}
              >
                {c}
              </button>
            </li>
          ))}
        </ul>
      )}

      <ul className={cn("grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4", showFilters && "mt-10")}>
        {items.map((item, i) => (
          <Reveal
            as="li"
            key={item.key}
            delay={(i % 4) * 70}
            className={cn(item.span === "wide" && "col-span-2")}
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              className="zoom-slow group relative block w-full text-left"
              aria-label={`Open larger view: ${item.caption}`}
            >
              <img
                src={images[item.key as ImageKey]}
                alt={item.alt}
                width={item.span === "wide" ? 1400 : 1100}
                height={item.span === "wide" ? 1000 : 1400}
                loading="lazy"
                decoding="async"
                className={cn(
                  "w-full object-cover",
                  item.span === "wide" ? "aspect-[7/5]" : "aspect-[4/5]",
                )}
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/20 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="text-[0.66rem] tracking-[0.2em] text-background uppercase">
                  {item.category}
                </span>
                <span className="mt-1 block font-display text-lg text-background">
                  {item.caption}
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </ul>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          className="fixed inset-0 z-[60] flex flex-col bg-background/97 p-4 sm:p-8"
          onTouchStart={(e) => setTouchX(e.touches[0]?.clientX ?? null)}
          onTouchEnd={(e) => {
            if (touchX === null) return;
            const dx = (e.changedTouches[0]?.clientX ?? touchX) - touchX;
            if (Math.abs(dx) > 45) step(dx < 0 ? 1 : -1);
            setTouchX(null);
          }}
        >
          <div className="flex items-center justify-between">
            <p className="text-[0.66rem] tracking-[0.24em] text-muted-foreground uppercase">
              {current.category}
            </p>
            <button
              type="button"
              onClick={close}
              autoFocus
              aria-label="Close image viewer"
              className="inline-flex min-h-11 min-w-11 items-center justify-center border border-onink/25 text-background"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          </div>
          <div className="flex min-h-0 flex-1 items-center justify-center py-6">
            <img
              src={images[current.key as ImageKey]}
              alt={current.alt}
              className="max-h-full w-auto max-w-full object-contain"
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => step(-1)}
              className="btn-outline-lux text-background"
            >
              Previous
            </button>
            <p className="font-display text-lg text-background">{current.caption}</p>
            <button type="button" onClick={() => step(1)} className="btn-outline-lux text-background">
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
