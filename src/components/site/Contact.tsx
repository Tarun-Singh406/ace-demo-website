import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { SITE, whatsAppUrl } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./Reveal";

export function Contact() {
  return (
    <section className="bg-secondary/50 py-20 md:py-28">
      <div className="tc-container">
        <SectionHeading
          eyebrow="Visit or Call Us"
          title="We're easy to reach — and happy to meet."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <Reveal variant="fade-up">
            <div className="grid gap-4 rounded-3xl border border-border bg-card p-6 tc-shadow-md md:p-8">
              <InfoRow icon={MapPin} label="Address" value={SITE.address} />
              <InfoRow icon={Phone} label="Phone" value={SITE.phone} href={`tel:${SITE.phoneRaw}`} />
              <InfoRow icon={Mail} label="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
              <InfoRow icon={Clock} label="Opening Hours" value={SITE.hours} />
              <a
                href={whatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="tc-cta mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full text-sm font-semibold"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal variant="scale-in" delay={120}>
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-3xl border border-border bg-card tc-shadow-md">
              {/* Static map placeholder — replace with real embed/key later */}
              <img
                src="https://staticmap.openstreetmap.de/staticmap.php?center=23.3441,85.3096&zoom=14&size=900x600&maptype=mapnik&markers=23.3441,85.3096,red-pushpin"
                alt="Map showing Tarun Coaching location in Ranchi"
                loading="lazy"
                width={900}
                height={600}
                className="h-full w-full object-cover"
                onError={(e) => {
                  // graceful fallback if external static map fails
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-card via-card/70 to-transparent p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Our Centre</p>
                <p className="mt-1 text-base font-semibold text-foreground">{SITE.address}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const Content = (
    <div className="flex gap-3">
      <span className="mt-0.5 grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
        <Icon className="h-4 w-4 text-[color:var(--gold)]" />
      </span>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
        <p className="mt-0.5 text-sm font-medium text-foreground">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block rounded-xl transition-colors hover:bg-secondary/60">
      {Content}
    </a>
  ) : (
    Content
  );
}