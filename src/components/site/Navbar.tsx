import { useEffect, useState } from "react";
import { Menu, X, GraduationCap, Phone } from "lucide-react";
import { NAV, SITE, whatsAppUrl } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const sections = NAV
      .map((n) => document.getElementById(n.id))
      .filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const goTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-card/85 backdrop-saturate-150 backdrop-blur border-b border-border tc-shadow-sm"
          : "bg-card/60 backdrop-blur"
      )}
    >
      <div className="tc-container flex h-16 items-center justify-between gap-4 md:h-[72px]">
        <button
          onClick={() => goTo("home")}
          className="flex items-center gap-2.5 text-left"
          aria-label={SITE.name}
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground tc-shadow-md">
            <GraduationCap className="h-5 w-5 text-[color:var(--gold)]" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[15px] font-bold tracking-tight text-foreground">
              {SITE.name}
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              {SITE.tagline}
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => goTo(n.id)}
              data-active={active === n.id}
              className="tc-link-underline text-sm font-medium text-foreground/80 transition-colors hover:text-foreground data-[active=true]:text-foreground"
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="hidden h-10 items-center gap-2 rounded-full border border-border bg-card px-3 text-sm font-semibold text-foreground transition-colors hover:border-foreground/30 md:inline-flex"
          >
            <Phone className="h-4 w-4 text-[color:var(--cta)]" />
            {SITE.phone}
          </a>
          <a
            href={whatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="tc-cta hidden h-10 items-center rounded-full px-5 text-sm font-semibold md:inline-flex"
          >
            Book Free Demo
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-card text-foreground lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "lg:hidden overflow-hidden border-t border-border bg-card transition-[max-height,opacity] duration-300",
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="tc-container flex flex-col py-4">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => goTo(n.id)}
              className="flex items-center justify-between border-b border-border/60 py-3 text-left text-sm font-medium text-foreground"
            >
              {n.label}
              <span aria-hidden className="text-muted-foreground">›</span>
            </button>
          ))}
          <a
            href={whatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="tc-cta mt-4 inline-flex h-11 items-center justify-center rounded-full text-sm font-semibold"
          >
            Book Free Demo
          </a>
        </nav>
      </div>
    </header>
  );
}