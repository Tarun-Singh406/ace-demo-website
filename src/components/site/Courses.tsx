import { Check, ArrowRight, Star } from "lucide-react";
import { COURSES } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./Reveal";
import { cn } from "@/lib/utils";

export function Courses() {
  return (
    <section id="courses" className="bg-secondary/50 py-20 md:py-28">
      <div className="tc-container">
        <SectionHeading
          eyebrow="Our Courses"
          title="Programs Designed for Chemistry Excellence."
          desc="Four focused Chemistry programs — Class 11, Class 12, JEE and NEET — each with structured syllabus, weekly testing and personal mentorship."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {COURSES.map((c, i) => (
            <Reveal key={c.name} variant="fade-up" delay={i * 70}>
              <article
                className={cn(
                  "group relative flex h-full flex-col rounded-2xl border bg-card p-6 tc-card-hover",
                  c.featured
                    ? "border-[color:var(--cta)]/40 ring-1 ring-[color:var(--cta)]/15 tc-shadow-lg"
                    : "border-border"
                )}
              >
                {c.featured && (
                  <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-[color:var(--cta)] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[color:var(--cta-foreground)] tc-shadow-md">
                    <Star className="h-3 w-3 fill-current" />
                    Most Enrolled
                  </span>
                )}
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{c.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    {c.suitableFor} · {c.duration}
                  </p>
                </div>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {c.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[color:var(--cta)]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#admission"
                  className={cn(
                    "mt-6 inline-flex h-10 items-center justify-center gap-1.5 rounded-full px-4 text-sm font-semibold transition-colors",
                    c.featured
                      ? "tc-cta"
                      : "border border-border bg-card text-foreground hover:border-[color:var(--cta)]/40 hover:text-[color:var(--cta)]"
                  )}
                >
                  Enroll Now
                  <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}