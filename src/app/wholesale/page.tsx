import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import {
  ShieldCheck,
  Truck,
  MessageCircle,
  ShoppingBag,
  Building2,
  Award,
  Layers,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Wholesale & Reseller Partnerships | Aksharam Textiles Surat",
  description:
    "Direct manufacturer supply of handcrafted bridal silk, festive silk, and tissue lehengas. Flexible lot sizes, verified design codes, and WhatsApp ordering for boutiques and retailers.",
};

export default function WholesalePage() {
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16">
        {/* Header */}
        <div className="border-b border-[#EAE5DC] pb-8 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white border border-[#EAE5DC] text-[11px] font-semibold uppercase tracking-widest text-[#7D1D2B] mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Surat Mill Manufacturing Unit</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1C1917] tracking-tight">
            Wholesale & Reseller Supply
          </h1>
          <p className="mt-2 text-xs sm:text-base text-[#57534E] max-w-2xl font-light leading-relaxed">
            Partner directly with Aksharam Textiles. We supply bridal silk, festive silk, and tissue lehengas to boutique owners, multi-designer studios, and retail stockists across India and abroad.
          </p>
        </div>

        {/* Value Proposition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1917]">
              Direct Factory Supply with Zero Middlemen
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-[#57534E] leading-relaxed font-light">
              <p>
                Operating from the industrial textile hub of Surat, Gujarat, Aksharam Textiles manufactures intricate ethnic wear featuring traditional zardozi, linear zari, circular mandala art, and hand-locked mirror work.
              </p>
              <p>
                Our digital wholesale ordering portal allows resellers to browse authentic inventory photos with official manufacturer codes, select piece counts, and send structured orders straight to our WhatsApp production desk.
              </p>
            </div>

            <div className="p-5 bg-white border border-[#EAE5DC] space-y-3">
              <h3 className="font-serif text-base font-semibold text-[#1C1917]">
                Why Resellers Choose Aksharam Textiles:
              </h3>
              <ul className="space-y-2.5 text-xs text-[#57534E]">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1E5D38] shrink-0 mt-0.5" />
                  <span>
                    <strong>Authentic Factory Images:</strong> Every photograph shows the physical garment with its official manufacturer design tag (e.g. D.NO.39750, D.NO.40270).
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1E5D38] shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero Price Portal Policy:</strong> Resellers can comfortably browse and share our catalogue without client price exposure.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1E5D38] shrink-0 mt-0.5" />
                  <span>
                    <strong>Flexible Wholesale Lot Sizes:</strong> Order sample pieces or volume consignments according to your showroom requirements.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1E5D38] shrink-0 mt-0.5" />
                  <span>
                    <strong>Visual Order Slip Generator:</strong> Download high-resolution order slips with thumbnails and piece counts for instant WhatsApp attachment.
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/catalogue"
                className="py-3.5 px-6 bg-[#7D1D2B] text-white hover:bg-[#58121C] text-xs uppercase tracking-widest font-bold flex items-center justify-center space-x-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Explore Wholesale Catalogue</span>
              </Link>

              <a
                href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsapp.number}&text=${encodeURIComponent(
                  "Hello Aksharam Textiles, I want to discuss a wholesale supply partnership."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 bg-[#25D366] text-white hover:bg-[#1EBE5D] text-xs uppercase tracking-widest font-bold flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 9998283811)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Factory Capabilities Card */}
          <div className="lg:col-span-5 bg-white border border-[#EAE5DC] p-6 sm:p-8 space-y-6 shadow-xs">
            <h3 className="font-serif text-xl font-medium text-[#1C1917] pb-3 border-b border-[#EAE5DC]">
              Wholesale Order Specifications
            </h3>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="pb-3 border-b border-[#FAF7F2]">
                <span className="text-[10px] uppercase tracking-wider text-[#78716C] font-semibold block">
                  Manufacturing Facility
                </span>
                <span className="font-medium text-[#1C1917]">
                  Udhna Navsari Road, Surat, Gujarat
                </span>
              </div>

              <div className="pb-3 border-b border-[#FAF7F2]">
                <span className="text-[10px] uppercase tracking-wider text-[#78716C] font-semibold block">
                  Product Categories Supplied
                </span>
                <span className="font-medium text-[#1C1917]">
                  Bridal Silk Lehengas, Festive Silk, Tissue Silks
                </span>
              </div>

              <div className="pb-3 border-b border-[#FAF7F2]">
                <span className="text-[10px] uppercase tracking-wider text-[#78716C] font-semibold block">
                  Ordering Channel
                </span>
                <span className="font-mono font-bold text-[#7D1D2B]">
                  Direct WhatsApp: +91 9998283811
                </span>
              </div>

              <div className="pb-3 border-b border-[#FAF7F2]">
                <span className="text-[10px] uppercase tracking-wider text-[#78716C] font-semibold block">
                  Logistics & Packaging
                </span>
                <span className="font-medium text-[#1C1917]">
                  Export Protective Corrugated Box Packing & Express Couriers
                </span>
              </div>
            </div>

            <div className="p-4 bg-[#FAF7F2] border border-[#EAE5DC] text-xs text-[#78716C] space-y-1.5">
              <div className="flex items-center space-x-1.5 text-[#1C1917] font-semibold">
                <Truck className="w-4 h-4 text-[#7D1D2B]" />
                <span>Pan-India & International Dispatch</span>
              </div>
              <p>
                Regular dispatches to boutiques in Mumbai, Delhi, Bengaluru, Hyderabad, Chennai, Kolkata, Jaipur, Ahmedabad, Surat, and export destinations (USA, UK, Canada, UAE, Australia).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
