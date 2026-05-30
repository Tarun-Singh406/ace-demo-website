import { STATS } from "@/lib/site-data";
import { Counter } from "./Counter";
import { Reveal } from "./Reveal";

export function StatsStrip() {
  return (
    <section aria-label="By the numbers" className="relative -mt-10 z-10">
      <div className="tc-container">
        <Reveal variant="fade-up">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border tc-shadow-lg md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-card px-5 py-6 text-center md:py-8">
                <p className="text-3xl font-bold tracking-tight text-foreground md:text-[2rem]">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground md:text-[13px]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}