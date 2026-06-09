import { Lightbulb, UserCheck, Target, LineChart, type LucideIcon } from "lucide-react";
import { ABOUT_CARDS } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./Reveal";

const ICONS: LucideIcon[] = [Lightbulb, UserCheck, Target, LineChart];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="tc-container">
        <SectionHeading
          eyebrow="About"
          title="Chemistry Is Not About Memorization. It's About Understanding."
          desc="Chemistry by Shashi Bhushan has helped students build strong conceptual foundations for Board examinations, JEE and NEET preparation through disciplined teaching, structured practice and personal guidance."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ABOUT_CARDS.map((c, i) => {
            const Icon = ICONS[i] ?? Lightbulb;
            return (
              <Reveal key={c.title} variant="fade-up" delay={i * 80}>
                <article className="group relative h-full rounded-2xl border border-border bg-card p-6 tc-card-hover">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground tc-shadow-md">
                    <Icon className="h-5 w-5 text-[color:var(--gold)]" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
