"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/data/siteConfig";

export default function WhatsAppFloatingButton() {
  return (
    <aside aria-label="WhatsApp Quick Trade Contact" className="fixed bottom-6 right-6 z-40">
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Aksharam on WhatsApp"
        className="group relative flex items-center justify-center p-3.5 md:px-5 md:py-3.5 bg-[#702C36] text-[#F7F3EC] rounded-full shadow-lg hover:bg-[#181715] hover:shadow-2xl border border-[#B79A67]/40 transition-all duration-300 hover:scale-105"
      >
        <MessageCircle className="w-5 h-5 text-[#F7F3EC] group-hover:text-[#B79A67] transition-colors" />

        {/* Text for desktop view */}
        <span className="hidden md:inline-block ml-2.5 text-xs font-sans font-medium uppercase tracking-[0.15em] text-[#F7F3EC]">
          Chat with Aksharam
        </span>

        {/* Pulsing ring indicator */}
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B79A67] opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#B79A67]" />
        </span>
      </a>
    </aside>
  );
}
