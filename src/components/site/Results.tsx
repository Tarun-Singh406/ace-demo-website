import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";
import { TOPPERS } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./Reveal";
import { cn } from "@/lib/utils";

export function Results() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [canL, setCanL] = useState(false);
  const [canR, setCanR] = useState(true);

  const update = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanL(el.scrollLeft > 4);
    setCanR(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    update();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section id="results" className="relative bg-primary py-20 text-primary-foreground md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,176,97,0.18),transparent_55%)]" />
      <div className="tc-container relative">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal variant="fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/85">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
                Results & Achievements
              </span>
            </Reveal>
            <Reveal variant="fade-up" delay={80}>
              <h2 className="mt-4 max-w-xl text-3xl font-bold text-white md:text-4xl lg:text-[2.6rem] lg:leading-[1.1]">
                Results That Speak Louder Than Words.
              </h2>
            </Reveal>
            <Reveal variant="fade-up" delay={140}>
              <p className="mt-4 max-w-lg text-base text-white/75">
                Consistent Chemistry performance across Boards, JEE and NEET —
                a few of our recent toppers and high scorers.
              </p>
            </Reveal>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => scrollBy(-1)}
              disabled={!canL}
              aria-label="Previous"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:bg-white/15 disabled:opacity-30"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              disabled={!canR}
              aria-label="Next"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:bg-white/15 disabled:opacity-30"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {TOPPERS.map((t, i) => (
            <Reveal
              key={i}
              variant="scale-in"
              delay={i * 60}
              className={cn(
                "group relative w-[260px] flex-shrink-0 snap-start rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur tc-card-hover sm:w-[280px]"
              )}
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={t.photo}
                  alt={t.name}
                  loading="lazy"
                  width={640}
                  height={800}
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-[color:var(--gold)] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[color:var(--gold-foreground)] tc-shadow-md">
                  <Award className="h-3 w-3" />
                  {t.rank}
                </span>
              </div>
              <div className="mt-4">
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="mt-0.5 text-xs text-white/70">{t.exam}</p>
                <p className="mt-2 text-xs font-medium text-[color:var(--gold)]">
                  {t.score}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}