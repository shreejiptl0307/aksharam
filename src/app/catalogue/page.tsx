import React, { Suspense } from "react";
import type { Metadata } from "next";
import CatalogueGrid from "@/components/CatalogueGrid";
import { siteConfig } from "@/data/siteConfig";
import { ShieldCheck, Truck, Sparkles, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Wholesale Textile Catalogue | Aksharam Textiles Surat",
  description:
    "Explore authentic bridal silk, festive silk, and tissue lehengas directly from Aksharam Textiles Surat. Select design quantities and order via WhatsApp without price markups.",
};

export default function CataloguePage() {
  return (
    <div className="pt-5 sm:pt-8 pb-16 sm:pb-20 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Page Header */}
        <div className="border-b border-[#EAE5DC] pb-5 sm:pb-8 mb-6 sm:mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 bg-white border border-[#EAE5DC] text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-[#7D1D2B] mb-2 sm:mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Surat Mill Production • Wholesale B2B</span>
              </div>
              <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-medium text-[#1C1917] tracking-tight">
                Wholesale Product Catalogue
              </h1>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-[#57534E] max-w-2xl font-light leading-relaxed">
                Browse our real bridal and festive lehenga designs featuring authentic manufacturer design codes. Select your piece counts and submit orders directly to our production desk.
              </p>
            </div>

            {/* Wholesale Guarantees */}
            <div className="flex items-center space-x-3 sm:space-x-4 text-[11px] sm:text-xs text-[#78716C] bg-white border border-[#EAE5DC] p-2.5 sm:p-3 self-start md:self-auto">
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7D1D2B]" />
                <span>Verified Mill Tags</span>
              </div>
              <span className="text-[#D6CEC1]">|</span>
              <div className="flex items-center space-x-1.5">
                <Truck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7D1D2B]" />
                <span>Pan-India Dispatch</span>
              </div>
            </div>
          </div>

          {/* Zero Price Notice Banner */}
          <div className="mt-4 sm:mt-5 py-2.5 px-3.5 bg-white border border-[#C5A880]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-2xs">
            <span className="text-[11px] sm:text-xs text-[#57534E]">
              <strong className="text-[#7D1D2B]">Zero Price Portal:</strong> Select design quantities and send via WhatsApp to receive direct factory invoice & dispatch timeline.
            </span>
            <a
              href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsapp.number}&text=${encodeURIComponent(
                "Hello Aksharam Textiles, I am browsing your wholesale catalogue."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] sm:text-xs font-semibold text-[#7D1D2B] hover:underline flex items-center space-x-1 shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp Inquiry ({siteConfig.whatsapp.displayNumber})</span>
            </a>
          </div>
        </div>

        {/* Catalogue Grid with Suspense */}
        <Suspense
          fallback={
            <div className="py-20 text-center text-xs uppercase tracking-widest text-[#78716C]">
              Loading Aksharam Wholesale Inventory...
            </div>
          }
        >
          <CatalogueGrid />
        </Suspense>
      </div>
    </div>
  );
}
