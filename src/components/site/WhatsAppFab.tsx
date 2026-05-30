import { MessageCircle } from "lucide-react";
import { whatsAppUrl } from "@/lib/site-data";

export function WhatsAppFab() {
  return (
    <a
      href={whatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white tc-shadow-lg tc-pulse-ring transition-transform hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-foreground px-3 py-1.5 text-xs font-semibold text-background opacity-0 transition-opacity group-hover:opacity-100 md:block">
        Chat on WhatsApp
      </span>
    </a>
  );
}