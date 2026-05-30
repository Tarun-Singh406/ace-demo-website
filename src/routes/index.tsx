import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { TopBar } from "@/components/site/TopBar";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { StatsStrip } from "@/components/site/StatsStrip";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Results } from "@/components/site/Results";
import { Faculty } from "@/components/site/Faculty";
import { Courses } from "@/components/site/Courses";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { SITE } from "@/lib/site-data";

const TITLE = "Tarun Coaching — Commerce, B.Com & CA Coaching in Ranchi";
const DESC =
  "Premium Commerce, B.Com and CA coaching with experienced faculty, small batches, weekly tests and proven results. Book a free demo class today.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "commerce coaching Ranchi, CA coaching, B.Com coaching, Class 11 12 commerce, Tarun Coaching" },
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
        <WhyChooseUs />
        <Results />
        <Faculty />
        <Courses />
        <Process />
        <Testimonials />
        <EnquiryForm />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
      <Toaster position="top-center" richColors />
    </div>
  );
}
