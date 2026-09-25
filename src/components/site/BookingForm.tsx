import { useState } from "react";

import { business, services } from "@/content/site";

const eventTypes = [
  "Wedding",
  "Reception",
  "Engagement",
  "Birthday",
  "Graduation",
  "Photoshoot",
  "Other occasion",
];

const fieldClass =
  "mt-2 w-full border border-input bg-background px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:border-rosegold focus:outline-none";
const labelClass =
  "block text-[0.66rem] font-semibold tracking-[0.22em] text-muted-foreground uppercase";

export function BookingForm({
  /** Pre-selects the service dropdown, e.g. from a service page CTA. */
  defaultService,
}: {
  defaultService?: string;
} = {}) {
  const [sent, setSent] = useState(false);
  const selectedService =
    defaultService && services.some((s) => s.title === defaultService)
      ? defaultService
      : undefined;

  if (sent) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="border border-border bg-card p-10 text-center sm:p-16"
      >
        <p className="eyebrow">Request received</p>
        <p className="mt-6 font-display text-3xl leading-tight sm:text-4xl">
          Thank you. Your beauty journey starts here.
        </p>
        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
          Natasha will be in touch to confirm availability and the details of
          your appointment. For anything urgent, call{" "}
          <a href={business.phoneHref} className="link-underline text-foreground">
            {business.phone}
          </a>
          .
        </p>
        <button type="button" onClick={() => setSent(false)} className="btn-outline-lux mt-10 text-foreground">
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      className="border border-border bg-card p-6 sm:p-10"
      onSubmit={(e) => {
        e.preventDefault();
        // No backend connected yet: show the confirmation state.
        // Connect Lovable Cloud later to store and email requests.
        setSent(true);
      }}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="booking-name">
            Name
          </label>
          <input id="booking-name" name="name" required autoComplete="name" className={fieldClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="booking-email">
            Email
          </label>
          <input
            id="booking-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="booking-phone">
            Phone
          </label>
          <input
            id="booking-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="booking-service">
            Service
          </label>
          <select
            id="booking-service"
            name="service"
            required
            key={selectedService ?? "default"}
            defaultValue={selectedService}
            className={fieldClass}
          >
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="booking-date">
            Preferred date
          </label>
          <input id="booking-date" name="date" type="date" className={fieldClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="booking-event">
            Event type
          </label>
          <select id="booking-event" name="eventType" className={fieldClass}>
            {eventTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="booking-location">
            Location
          </label>
          <input
            id="booking-location"
            name="location"
            placeholder="City, venue or address"
            className={fieldClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="booking-message">
            Message
          </label>
          <textarea
            id="booking-message"
            name="message"
            rows={5}
            placeholder="Tell Natasha about your look, outfit and timing."
            className={fieldClass}
          />
        </div>
      </div>

      <button type="submit" className="btn-lux mt-8 w-full sm:w-auto">
        Request an Appointment
      </button>
      <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
        Prefer to talk? Call{" "}
        <a href={business.phoneHref} className="link-underline text-foreground">
          {business.phone}
        </a>{" "}
        or email{" "}
        <a href={business.emailHref} className="link-underline text-foreground">
          {business.email}
        </a>
        .
      </p>
    </form>
  );
}
