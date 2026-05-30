import { useEffect, useState } from "react";
import { ArrowRight, MessageCircle, CheckCircle2, Sparkles, Award, Users, TrendingUp } from "lucide-react";
import { HERO_IMAGES, SITE, whatsAppUrl } from "@/lib/site-data";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import { cn } from "@/lib/utils";

const TRUST = [
  "Experienced Faculty",
  "Proven Results",
  "Regular Test Series",
  "Personal Mentorship",
];

export function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % HERO_IMAGES.length), 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* Slider layer */}
      <div className="absolute inset-0">
        {HERO_IMAGES.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            aria-hidden
            width={1600}
            height={1024}
            fetchPriority={i === 0 ? "high" : "auto"}
            loading={i === 0 ? "eager" : "lazy"}
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-out",
              i === idx ? "opacity-100" : "opacity-0"
            )}
          />
        ))}
        <div className="absolute inset-0 tc-hero-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(5,64,242,0.35),transparent_55%)]" />
      </div>

      {/* Content */}
      <div className="tc-container relative grid gap-12 py-16 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-32">
        <div className="max-w-2xl">
          <Reveal variant="fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-[color:var(--gold)]" />
              Admissions Open · 2025 Batch
            </span>
          </Reveal>

          <Reveal variant="fade-up" delay={100}>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
              Build a future in{" "}
              <span className="tc-gold-text">Commerce, B.Com & CA</span>
              <br className="hidden md:block" /> with mentors who care.
            </h1>
          </Reveal>

          <Reveal variant="fade-up" delay={180}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              Trusted by hundreds of families across Ranchi for board excellence,
              B.Com results and CA exam success — taught the way you'd want your
              own child taught.
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={240}>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#admission"
                className="tc-cta inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold tracking-wide"
              >
                Book a Free Demo Class
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={whatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal variant="fade-up" delay={320}>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-white/85 sm:grid-cols-2 md:max-w-lg">
              {TRUST.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[color:var(--gold)]" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Floating glass stat cards */}
        <div className="relative hidden lg:block">
          <div className="absolute -left-6 top-0 w-[260px] rounded-2xl tc-glass p-5 tc-shadow-lg tc-float" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--cta)]/10 text-[color:var(--cta)]">
                <Award className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-medium text-muted-foreground">Top Rank Holders</p>
                <p className="text-2xl font-bold text-foreground"><Counter to={120} suffix="+" /></p>
              </div>
            </div>
            <p className="mt-3 text-[12px] text-muted-foreground">
              AIRs in CA Foundation & Inter across recent years.
            </p>
          </div>

          <div className="ml-auto mr-0 mt-2 w-[280px] rounded-2xl tc-glass p-5 tc-shadow-lg tc-float">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--gold)]/15 text-[color:var(--gold)]">
                <TrendingUp className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-medium text-muted-foreground">Board Pass Rate</p>
                <p className="text-2xl font-bold text-foreground"><Counter to={96} suffix="%" /></p>
              </div>
            </div>
            <p className="mt-3 text-[12px] text-muted-foreground">
              Class 12 Commerce — five-year average.
            </p>
          </div>

          <div className="mt-6 ml-12 w-[260px] rounded-2xl tc-glass p-5 tc-shadow-lg tc-float" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--cta)]/10 text-[color:var(--cta)]">
                <Users className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-medium text-muted-foreground">Students Mentored</p>
                <p className="text-2xl font-bold text-foreground"><Counter to={2400} suffix="+" /></p>
              </div>
            </div>
            <p className="mt-3 text-[12px] text-muted-foreground">
              Class 11 to CA Inter — since {new Date().getFullYear() - 15}.
            </p>
          </div>
        </div>
      </div>

      {/* Slider dots */}
      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Show slide ${i + 1}`}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === idx ? "w-7 bg-white" : "w-3 bg-white/40 hover:bg-white/60"
            )}
          />
        ))}
      </div>
    </section>
  );
}