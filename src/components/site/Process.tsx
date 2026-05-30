import { UserPlus, BookOpen, FileCheck2, MessagesSquare, Trophy, type LucideIcon } from "lucide-react";
import { PROCESS } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./Reveal";

const ICONS: LucideIcon[] = [UserPlus, BookOpen, FileCheck2, MessagesSquare, Trophy];

export function Process() {
  return (
    <section className="py-20 md:py-28">
      <div className="tc-container">
        <SectionHeading
          eyebrow="Your Success Process"
          title="A clear path from admission to success."
          desc="No guesswork. Every student follows the same proven five-step journey."
        />

        <div className="relative mt-14">
          {/* Connector line — desktop */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />

          <ol className="grid gap-8 md:grid-cols-5">
            {PROCESS.map((p, i) => {
              const Icon = ICONS[i];
              return (
                <Reveal key={p.step} variant="fade-up" delay={i * 80}>
                  <li className="relative text-center">
                    <div className="relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-card border border-border tc-shadow-md">
                      <Icon className="h-6 w-6 text-[color:var(--cta)]" />
                    </div>
                    <span className="mt-3 inline-block text-[11px] font-bold uppercase tracking-[0.18em] tc-gold-text">
                      Step {p.step}
                    </span>
                    <h3 className="mt-1 text-base font-semibold text-foreground">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}