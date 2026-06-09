import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { TopBar } from "@/components/site/TopBar";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { StatsStrip } from "@/components/site/StatsStrip";
import { About } from "@/components/site/About";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Results } from "@/components/site/Results";
import { Faculty } from "@/components/site/Faculty";
import { Courses } from "@/components/site/Courses";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { SITE } from "@/lib/site-data";

const TITLE = "Chemistry by Shashi Bhushan — Class 11, 12, JEE & NEET Chemistry Coaching in Ranchi";
const DESC =
  "Dedicated Chemistry coaching for Class 11, 12, JEE and NEET. Concept-focused teaching, regular tests and personal mentorship by Shashi Bhushan Sir. Book a free demo class today.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "Chemistry coaching Ranchi, JEE Chemistry, NEET Chemistry, Class 11 12 Chemistry, Shashi Bhushan Chemistry, CBS Chemistry" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: SITE.name,
          description: DESC,
          telephone: SITE.phone,
          email: SITE.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: SITE.address,
            addressLocality: "Ranchi",
            addressRegion: "Jharkhand",
            addressCountry: "IN",
          },
          openingHours: "Mo-Sa 07:00-20:00",
          areaServed: "Ranchi, Jharkhand",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <About />
        <WhyChooseUs />
        <Results />
        <Courses />
        <Faculty />
        <Process />
        <Testimonials />
        <FAQ />
        <EnquiryForm />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
      <Toaster position="top-center" richColors />
    </div>
  );
}
