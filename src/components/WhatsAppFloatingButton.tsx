"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/data/siteConfig";

export default function WhatsAppFloatingButton() {
  return (
    <aside
      aria-label="WhatsApp trade contact"
      className="fixed bottom-5 right-5 z-40"
    >
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enquire on WhatsApp"
        className="flex items-center justify-center w-11 h-11 bg-[#171717] text-[#FAFAF8] rounded-full shadow-sm hover:opacity-80 transition-opacity"
      >
        <MessageCircle className="w-4 h-4 stroke-[1.75]" />
      </a>
    </aside>
  );
}
