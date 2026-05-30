import { GraduationCap, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { NAV, SITE, whatsAppUrl } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA strip */}
      <div className="border-b border-white/10">
        <div className="tc-container flex flex-col items-start justify-between gap-5 py-10 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--gold)]">
              Admissions Open · Limited Seats
            </p>
            <h3 className="mt-2 max-w-xl text-2xl font-bold text-white md:text-3xl">
              Give your child the mentorship that turns effort into results.
            </h3>
          </div>
          <a
            href="#admission"
            className="tc-cta inline-flex h-12 items-center justify-center rounded-full px-7 text-sm font-semibold"
          >
            Book a Free Demo
          </a>
        </div>
      </div>

      <div className="tc-container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10">
              <GraduationCap className="h-5 w-5 text-[color:var(--gold)]" />
            </span>
            <span className="text-lg font-bold tracking-tight text-white">{SITE.name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            A premium Commerce, B.Com and CA coaching institute focused on
            mentorship, results and the long-term success of every student.
          </p>
          <div className="mt-5 flex gap-2">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">Quick Links</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="text-white/80 transition-colors hover:text-white">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">Contact</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2.5"><MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[color:var(--gold)]" /><span className="text-white/80">{SITE.address}</span></li>
            <li><a href={`tel:${SITE.phoneRaw}`} className="flex gap-2.5 text-white/80 hover:text-white"><Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-[color:var(--gold)]" />{SITE.phone}</a></li>
            <li><a href={`mailto:${SITE.email}`} className="flex gap-2.5 text-white/80 hover:text-white"><Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-[color:var(--gold)]" />{SITE.email}</a></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">Hours</p>
          <p className="mt-4 text-sm text-white/80">{SITE.hours}</p>
          <a
            href={whatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex h-10 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            WhatsApp Admissions
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="tc-container flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/60 md:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Built for students of Commerce, B.Com & CA.</p>
        </div>
      </div>
    </footer>
  );
}