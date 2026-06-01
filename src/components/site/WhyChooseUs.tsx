import { GraduationCap, Users, ClipboardCheck, Trophy, type LucideIcon } from "lucide-react";
import { FEATURES } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./Reveal";

const ICONS: Record<string, LucideIcon> = {
  GraduationCap, Users, ClipboardCheck, Trophy,
};

export function WhyChooseUs() {
  return (
    <section id="why" className="py-20 md:py-28">
      <div className="tc-container">
        <SectionHeading
          eyebrow="Why Ace Commerce Academy"
          title="A premium learning experience parents actually trust."
          desc="Every part of how we teach is built around one outcome — confident, well-prepared students who walk into exams ready."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => {
            const Icon = ICONS[f.icon] ?? GraduationCap;
            return (
              <Reveal key={f.title} variant="fade-up" delay={i * 80}>
                <article className="group relative h-full rounded-2xl border border-border bg-card p-6 tc-card-hover">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground tc-shadow-md">
                    <Icon className="h-5 w-5 text-[color:var(--gold)]" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-[color:var(--cta)]/8 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--cta)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--cta)]" />
                    {f.benefit}
                  </span>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}