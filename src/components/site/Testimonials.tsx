import { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site-data";
import { SectionHeading } from "./Reveal";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % TESTIMONIALS.length), 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="testimonials" className="bg-secondary/50 py-20 md:py-28">
      <div className="tc-container">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Students And Parents Say."
        />

        <div className="relative mx-auto mt-12 max-w-3xl">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 tc-shadow-lg md:p-12">
            <Quote className="absolute right-8 top-8 h-16 w-16 text-[color:var(--cta)]/8" />
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className={cn(
                  "transition-opacity duration-700",
                  i === idx ? "opacity-100" : "pointer-events-none absolute inset-0 p-8 opacity-0 md:p-12"
                )}
              >
                <div className="flex gap-0.5 text-[color:var(--gold)]">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-lg leading-relaxed text-foreground md:text-xl">
                  "{t.quote}"
                </p>
                <div className="mt-7 flex items-center gap-3">
                  <img
                    src={t.photo}
                    alt={t.name}
                    loading="lazy"
                    width={56}
                    height={56}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-[color:var(--gold)]/40"
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-1.5">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Show testimonial ${i + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === idx ? "w-7 bg-[color:var(--cta)]" : "w-3 bg-border hover:bg-muted-foreground/50"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}