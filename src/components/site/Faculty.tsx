import { FACULTY } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./Reveal";

export function Faculty() {
  return (
    <section id="faculty" className="py-20 md:py-28">
      <div className="tc-container">
        <SectionHeading
          eyebrow="Meet the Faculty"
          title="Mentors who've taught toppers — and treat your child like one."
          desc="Decades of combined teaching experience across Commerce, B.Com and CA. Every mentor is hands-on, accessible and accountable."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FACULTY.map((f, i) => (
            <Reveal key={f.name} variant="fade-up" delay={i * 80}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card tc-card-hover">
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={f.photo}
                    alt={f.name}
                    loading="lazy"
                    width={640}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-card/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground backdrop-blur">
                    {f.years}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-foreground">{f.name}</h3>
                  <p className="mt-0.5 text-sm font-medium text-[color:var(--cta)]">{f.subject}</p>
                  <p className="mt-1 text-[12px] uppercase tracking-[0.12em] text-muted-foreground">
                    {f.qual}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.intro}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}