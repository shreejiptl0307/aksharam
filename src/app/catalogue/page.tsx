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
    <div className="pt-24 sm:pt-28 pb-20 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16">
        {/* Page Header */}
        <div className="border-b border-[#EAE5DC] pb-8 mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white border border-[#EAE5DC] text-[11px] font-semibold uppercase tracking-widest text-[#7D1D2B] mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Surat Mill Production • Wholesale B2B</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1C1917] tracking-tight">
                Wholesale Product Catalogue
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-[#57534E] max-w-2xl font-light leading-relaxed">
                Browse our real bridal and festive lehenga designs featuring authentic manufacturer design codes. Select your piece counts and submit orders directly to our production desk.
              </p>
            </div>

            {/* Wholesale Guarantees */}
            <div className="flex items-center space-x-4 text-xs text-[#78716C] bg-white border border-[#EAE5DC] p-3">
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-[#7D1D2B]" />
                <span>Verified Mill Tags</span>
              </div>
              <span className="text-[#D6CEC1]">|</span>
              <div className="flex items-center space-x-1.5">
                <Truck className="w-4 h-4 text-[#7D1D2B]" />
                <span>Pan-India Dispatch</span>
              </div>
            </div>
          </div>

          {/* Zero Price Transparency Notice Banner */}
          <div className="mt-6 py-2.5 px-4 bg-[#7D1D2B]/10 border border-[#7D1D2B]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-xs text-[#7D1D2B] font-medium">
              <strong>B2B Reseller Notice:</strong> This portal does not display prices. Add desired quantities to cart and send via WhatsApp to receive direct mill invoice & turnaround.
            </span>
            <a
              href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsapp.number}&text=${encodeURIComponent(
                "Hello Aksharam Textiles, I am browsing your wholesale catalogue and have questions about fabric availability and minimum order sizes."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#7D1D2B] hover:underline flex items-center space-x-1 whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp ({siteConfig.whatsapp.displayNumber})</span>
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
