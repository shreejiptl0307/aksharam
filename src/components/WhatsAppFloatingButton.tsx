"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/data/siteConfig";

export default function WhatsAppFloatingButton() {
  return (
    <aside
      aria-label="WhatsApp trade contact"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 animate-whatsapp-entrance"
    >
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enquire on WhatsApp"
        className="flex items-center justify-center w-12 h-12 bg-[#171717] text-[#FAFAF8] rounded-full shadow-md hover:bg-[#262626] transition-colors duration-250 cursor-pointer"
      >
        <MessageCircle className="w-5 h-5 stroke-[1.75]" />
      </a>
    </aside>
  );
}
