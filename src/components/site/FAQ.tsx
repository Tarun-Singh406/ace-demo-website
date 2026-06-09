import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./Reveal";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-secondary/50 py-20 md:py-28">
      <div className="tc-container">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers to questions parents and students ask most."
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} variant="fade-up" delay={i * 50}>
                <div className="overflow-hidden rounded-2xl border border-border bg-card tc-shadow-sm">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
                  >
                    <span className="text-sm font-semibold text-foreground md:text-base">{f.q}</span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 flex-shrink-0 text-[color:var(--cta)] transition-transform duration-300",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid overflow-hidden transition-[grid-template-rows] duration-300",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="min-h-0">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground md:px-6 md:pb-6">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
