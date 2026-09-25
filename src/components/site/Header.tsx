import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Logo } from "@/components/site/Logo";
import { business, nav, services } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
        scrolled || open
          ? "border-b border-border bg-background/92 backdrop-blur-md"
          : "border-b border-transparent bg-background/80 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {nav.map((item) =>
              item.to === "/services" ? (
                <li key={item.to} className="group relative">
                  <Link
                    to={item.to}
                    className="link-underline font-sans text-[0.68rem] font-medium tracking-[0.24em] text-foreground/80 uppercase transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                  <ul className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 border border-border bg-background/98 p-2 opacity-0 shadow-lg backdrop-blur-md transition-opacity duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link
                          to="/services/$slug"
                          params={{ slug: s.slug }}
                          className="block px-4 py-3 font-sans text-[0.68rem] tracking-[0.18em] text-foreground/75 uppercase transition-colors hover:text-foreground"
                        >
                          {s.navTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    className="link-underline font-sans text-[0.68rem] font-medium tracking-[0.24em] text-foreground/80 uppercase transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>


        <div className="flex items-center gap-3">
          <Link to="/contact" className="btn-lux hidden sm:inline-flex">
            Book an Appointment
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex min-h-11 min-w-11 items-center justify-center border border-border lg:hidden"
          >
            {open ? (
              <X className="size-4" aria-hidden="true" />
            ) : (
              <Menu className="size-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-border bg-background lg:hidden"
      >
        <nav aria-label="Mobile" className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.to} className="border-b border-border/60 last:border-0">
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="block py-4 font-display text-2xl"
                >
                  {item.label}
                </Link>
                {item.to === "/services" && (
                  <ul className="mb-4 space-y-2 border-l border-border/60 pl-4">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link
                          to="/services/$slug"
                          params={{ slug: s.slug }}
                          className="block py-1.5 font-sans text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase"
                        >
                          {s.navTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <Link to="/contact" className="btn-lux w-full">
              Book an Appointment
            </Link>
            <a
              href={business.phoneHref}
              className="btn-outline-lux w-full text-foreground"
            >
              Call {business.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
