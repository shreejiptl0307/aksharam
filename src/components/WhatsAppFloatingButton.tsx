"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function WhatsAppFloatingButton() {
  const defaultText = encodeURIComponent(
    "Hello Aksharam Textiles, I am interested in wholesale lehengas for my boutique."
  );
  const waUrl = `https://api.whatsapp.com/send?phone=${siteConfig.whatsapp.number}&text=${defaultText}`;

  return (
    <aside
      aria-label="WhatsApp wholesale contact"
      className="fixed bottom-5 left-5 z-40 hidden sm:block"
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Aksharam Textiles (+91 9998283811)"
        className="group flex items-center space-x-2.5 py-2 px-3.5 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#1EBE5D] transition-all hover:scale-105"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs font-semibold tracking-wide pr-1">
          WhatsApp: {siteConfig.whatsapp.cleanNumber}
        </span>
      </a>
    </aside>
  );
}
