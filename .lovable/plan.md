## Tarun Coaching — Premium Website Plan

A custom-designed, trust-first marketing site for a Commerce / B.Com / CA coaching institute. Built on the existing TanStack Start + Tailwind v4 stack. Original design — no template feel, no copying from the reference.

### Brand inputs
- **Name:** Tarun Coaching
- **Phone / WhatsApp:** 9608604657
- **Focus:** Class 11 & 12 Commerce, B.Com, CA
- **Email / address / hours:** realistic placeholders (clearly marked so you can swap later)
- **Faculty & student photos, results, testimonials:** realistic AI-generated placeholders

### Design system (locked to your palette)
Tokens defined in `src/styles.css` using `oklch` equivalents of the hex values you provided. Only one action color throughout: `#0540F2` (hover `#022B99`). Premium gold `#D9B061` reserved for rank badges, accent underlines, and award strips (≤1% of surface). Typography: Plus Jakarta Sans (headings, authority) + Inter (body, readable) via Google Fonts with `font-display: swap`. Generous spacing, soft elevation shadows, 12–16px radii, subtle 1px borders in muted blue-gray.

### Page structure
Single landing route `/` with anchor sections (matches a coaching marketing site pattern; nav uses smooth-scroll + active-section highlight via IntersectionObserver). Section-level meta in `head()`.

1. **Top info bar** — sticky, compact: name · phone · Mon–Sat 7AM–8PM · "Admissions Open" pill
2. **Premium navbar** — sticky, glass blur on scroll, logo mark + wordmark, 7 nav links, mobile sheet menu, primary CTA "Book a Free Demo"
3. **Hero** — auto-rotating background image slider (3 classroom shots), gradient overlay, large headline, sub, dual CTA (Enquire / WhatsApp), 4-point trust strip, floating glass stat cards (Years · Students · Top Ranks · Pass %)
4. **Why Choose Us** — 4 feature cards: Experienced Faculty · Small Batches · Regular Tests · Proven Results. Icon + title + 2-line desc + benefit chip. Hover lift.
5. **Results & Achievements** — counter strip + horizontal carousel of toppers (photo, name, exam, rank, gold badge). Spotlight on the active card.
6. **Faculty** — 4 faculty cards: photo, name, subject, qualification, years, intro. Depth shadow on hover.
7. **Courses** — 4 cards: Class 11 Commerce · Class 12 Commerce · B.Com · CA Foundation/Inter. Each: suitable-for, duration, 4 feature bullets, Enroll CTA.
8. **Success Process** — 5-step vertical/horizontal timeline (Admission → Learning → Testing → Mentorship → Success) with icons and scroll-reveal.
9. **Testimonials** — auto-sliding cards, student + parent reviews, 5-star rating, avatar, role.
10. **Admission Enquiry Form** — Name, Mobile, Class, Course (select), Message. Zod validation, inline errors, success state, accessible labels. Submits to a local handler stub (no backend yet — toast confirmation; ready to wire to Lovable Cloud later).
11. **Contact** — static map image placeholder, address, phone, email, hours, WhatsApp button.
12. **Footer** — about blurb, quick links, contact, social icons, copyright, "Admissions Open" CTA strip above footer.

**Floating WhatsApp button** — fixed bottom-right on all viewports, click → `wa.me/919608604657` with prefilled enquiry message.

### Animations (lightweight, Win 8.1-safe)
Pure CSS keyframes + `IntersectionObserver` to add `data-inview` classes. Fade-in, slide-up, scale-in, counter tween (rAF-based, runs once). No WebGL, no 3D transforms beyond simple translate/scale, no Framer Motion. Respects `prefers-reduced-motion`.

### Performance plan
- AVIF + WebP variants for hero/classroom imagery via `vite-imagetools`
- Preload LCP hero image in route `head().links`
- Lazy-load below-fold images (`loading="lazy"`, explicit `width`/`height` to prevent CLS)
- Font subsetting via Google Fonts `&display=swap`
- No heavy carousel library — custom 80-line slider with CSS transforms
- No icon library bloat — tree-shaken Lucide imports only

### SEO
- `<title>` ≤60 chars w/ "Commerce, B.Com & CA Coaching"
- meta description ≤160 chars
- Single H1 (hero headline), semantic section landmarks
- JSON-LD `EducationalOrganization` schema with phone, address (placeholder), sameAs
- Open Graph + Twitter card tags

### Trust elements (woven throughout)
Stat counters after hero, "Years of Excellence" mini-strip before Faculty, achievement badges in Results, parent quote pull between Courses and Process, "Admissions Open · Limited Seats" sticky CTA on mobile.

---

### Technical section

**Files to add**
- `src/routes/index.tsx` — replace placeholder, compose all sections, set head() meta + JSON-LD
- `src/styles.css` — extend tokens (brand palette, gold accent, premium shadows, animation keyframes)
- `src/components/site/` — `TopBar.tsx`, `Navbar.tsx`, `Hero.tsx`, `WhyChooseUs.tsx`, `Results.tsx`, `Faculty.tsx`, `Courses.tsx`, `Process.tsx`, `Testimonials.tsx`, `EnquiryForm.tsx`, `Contact.tsx`, `Footer.tsx`, `WhatsAppFab.tsx`, `Counter.tsx`, `Reveal.tsx` (IO wrapper)
- `src/lib/site-data.ts` — placeholder faculty/toppers/testimonials/courses data
- `src/assets/` — generated images (hero classroom x3, faculty x4, toppers x6) via `imagegen` at standard quality

**Form** uses react-hook-form + zod (already typical in shadcn stack — install if missing). On submit: validate, toast success, reset. A later step can wire to a `createServerFn` + Lovable Cloud table — explicitly out of scope for this build.

**No backend / Cloud** enabled in this pass — the brief is purely presentational. Form submission is client-only with a clear TODO comment for wiring storage when you're ready.

**Out of scope (ask if you want these next):** real CMS for results/faculty, admin dashboard, payment links, blog, multi-language, real Google Maps embed (uses static placeholder).
