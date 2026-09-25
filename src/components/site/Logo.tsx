import { Link } from "@tanstack/react-router";

import logo from "@/assets/nm-logo-white.png";
import { business } from "@/content/site";
import { cn } from "@/lib/utils";

/** Header lockup: the N|M monogram mark beside the business name. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      aria-label={`${business.name} — home`}
      className={cn("group inline-flex items-center gap-3.5", className)}
    >
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        width={711}
        height={752}
        className="h-17 w-auto object-contain object-top brightness-0"
      />

    </Link>
  );
}

/** The full brand logo lockup, for editorial brand moments. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="Natasha Mann Artistry logo — N|M monogram with the tagline Timeless Beauty. Every Occasion."
      width={711}
      height={752}
      loading="lazy"
      decoding="async"
      className={cn("h-auto w-full", className)}
    />
  );
}
