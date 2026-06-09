import { Phone, Clock, GraduationCap } from "lucide-react";
import { SITE } from "@/lib/site-data";

export function TopBar() {
  return (
    <div className="hidden border-b border-white/10 bg-primary text-primary-foreground md:block">
      <div className="tc-container flex h-9 items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-white/90">
          <GraduationCap className="h-3.5 w-3.5 text-[color:var(--gold)]" />
          <span className="font-semibold tracking-wide">{SITE.name}</span>
          <span className="mx-2 h-3 w-px bg-white/20" aria-hidden />
          <span className="text-white/70">{SITE.tagline}</span>
        </div>
        <div className="flex items-center gap-5 text-white/85">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {SITE.hours}
          </span>
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-[color:var(--gold)] transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            {SITE.phone}
          </a>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--gold)]/15 px-2.5 py-0.5 font-semibold text-[color:var(--gold)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
            Admissions Open · JEE & NEET · Free Demo Class
          </span>
        </div>
      </div>
    </div>
  );
}