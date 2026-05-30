import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "fade-up" | "slide-right" | "scale-in" | "fade-in";

/**
 * Lightweight scroll-reveal wrapper.
 * Uses IntersectionObserver + CSS animation — no JS animation loop.
 */
export function Reveal({
  children,
  variant = "fade-up",
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const TagAny = Tag as any;
  return (
    <TagAny
      ref={ref as any}
      data-reveal={variant}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
      className={className}
    >
      {children}
    </TagAny>
  );
}

/** Reusable section heading block. */
export function SectionHeading({
  eyebrow,
  title,
  desc,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <Reveal variant="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal variant="fade-up" delay={80}>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-[2.6rem] lg:leading-[1.1]">
          {title}
        </h2>
      </Reveal>
      {desc && (
        <Reveal variant="fade-up" delay={140}>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {desc}
          </p>
        </Reveal>
      )}
    </div>
  );
}