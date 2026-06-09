import { Award, GraduationCap, BookOpen } from "lucide-react";
import { FACULTY } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./Reveal";

export function Faculty() {
  const f = FACULTY[0];
  return (
    <section id="faculty" className="py-20 md:py-28">
      <div className="tc-container">
        <SectionHeading
          eyebrow="Meet the Mentor"
          title="One mentor. One subject. One mission — your Chemistry success."
          desc="Decades of focused teaching experience in Chemistry. Hands-on, accessible and personally accountable for every student's progress."
        />

        <div className="mt-14">
          <Reveal variant="fade-up">
            <article className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl border border-border bg-card tc-shadow-lg md:grid-cols-[0.9fr_1.1fr]">
              <div className="relative aspect-[4/5] overflow-hidden bg-muted md:aspect-auto">
                <img
                  src={f.photo}
                  alt={f.name}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent md:hidden" />
                <span className="absolute left-4 top-4 rounded-full bg-card/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground backdrop-blur">
                  {f.years} experience
                </span>
              </div>
              <div className="flex flex-col justify-center p-8 md:p-10">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
                  Founder & Chemistry Mentor
                </span>
                <h3 className="mt-4 text-2xl font-bold text-foreground md:text-3xl">{f.name}</h3>
                <p className="mt-1 text-sm font-medium text-[color:var(--cta)]">{f.subject}</p>
                <p className="mt-1 text-[12px] uppercase tracking-[0.12em] text-muted-foreground">
                  {f.qual}
                </p>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">{f.intro}</p>

                <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[
                    { Icon: GraduationCap, t: "Concept-First" },
                    { Icon: Award, t: "Proven Results" },
                    { Icon: BookOpen, t: "Personal Mentor" },
                  ].map(({ Icon, t }) => (
                    <li
                      key={t}
                      className="flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2.5 text-xs font-semibold text-foreground"
                    >
                      <Icon className="h-4 w-4 text-[color:var(--cta)]" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
