import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { initialProducts } from "@/data/products";
import CatalogueGrid from "@/components/CatalogueGrid";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Truck,
  MessageCircle,
  ShoppingBag,
  Layers,
  CheckCircle2,
  PhoneCall,
  Clock,
  Award,
} from "lucide-react";

export default function HomePage() {
  const featuredProducts = initialProducts.slice(0, 4);

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 pb-16 sm:pt-12 sm:pb-24 overflow-hidden border-b border-[#EAE5DC]">
        {/* Subtle background ornamentation */}
        <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-white border border-[#EAE5DC] shadow-2xs">
                <Sparkles className="w-4 h-4 text-[#7D1D2B]" />
                <span className="text-xs uppercase tracking-widest font-semibold text-[#7D1D2B]">
                  Direct Mill Manufacturer • Surat, Gujarat
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1917] font-medium tracking-tight leading-[1.12]">
                Discover Our Latest Collections
              </h1>

              <p className="text-sm sm:text-base text-[#57534E] font-light max-w-xl leading-relaxed">
                Aksharam Textiles designs and manufactures premier handcrafted bridal silk, festive silk, and tissue lehengas. We supply wholesale consignments directly to boutiques, retailers, and resellers across India and worldwide.
              </p>

              {/* Zero Price Notice Box */}
              <div className="p-4 bg-white border border-[#EAE5DC] max-w-xl shadow-2xs">
                <div className="flex items-center space-x-2 text-xs font-semibold text-[#1C1917] uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#7D1D2B]" />
                  <span>Wholesale Zero-Price Catalogue</span>
                </div>
                <p className="text-xs text-[#78716C] leading-relaxed">
                  Browse real factory photos, select design piece counts, add multiple designs to cart, and send your order directly to our WhatsApp number <strong>(+91 9998283811)</strong> for instant mill confirmation.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/catalogue"
                  className="py-4 px-8 bg-[#7D1D2B] text-white hover:bg-[#58121C] text-xs uppercase tracking-widest font-bold transition-all flex items-center justify-center space-x-2 shadow-md hover:translate-y-[-1px]"
                >
                  <span>Explore Catalogue</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsapp.number}&text=${encodeURIComponent(
                    "Hello Aksharam Textiles, I am interested in ordering wholesale lehengas for my boutique."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 px-6 bg-white border border-[#D6CEC1] text-[#1C1917] hover:border-[#7D1D2B] hover:text-[#7D1D2B] text-xs uppercase tracking-widest font-semibold transition-all flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp: +91 9998283811</span>
                </a>
              </div>

              {/* Quick Trust Badges */}
              <div className="pt-6 border-t border-[#EAE5DC] grid grid-cols-3 gap-4 text-xs text-[#57534E]">
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-[#7D1D2B] shrink-0" />
                  <span className="font-medium">Direct Mill Supply</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-[#7D1D2B] shrink-0" />
                  <span className="font-medium">Verified Tags</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="w-4 h-4 text-[#7D1D2B] shrink-0" />
                  <span className="font-medium">Global Dispatch</span>
                </div>
              </div>
            </div>

            {/* Right Hero Showcase (5 Cols): Real Product Photos Collage */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm sm:max-w-md">
                {/* Main Featured Photo */}
                <div className="relative aspect-[3/4] w-full bg-white border border-[#DDD7CC] shadow-2xl overflow-hidden">
                  <Image
                    src="/products/media_1793041527137.jpg"
                    alt="Bridal Silk Lehenga D.NO.39750"
                    fill
                    priority
                    className="object-cover object-top"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-[#1C1917]/90 text-white font-mono text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
                      D.NO.39750 RED (SILK)
                    </span>
                  </div>
                </div>

                {/* Overlapping Secondary Card */}
                <div className="hidden sm:block absolute -bottom-6 -left-8 w-44 aspect-[3/4] bg-white border border-[#DDD7CC] shadow-xl overflow-hidden">
                  <Image
                    src="/products/media_1793041534376.jpg"
                    alt="Festive Silk Lehenga D.NO-4152"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute bottom-2 inset-x-2 bg-[#1C1917]/85 text-white text-[9px] font-mono px-1.5 py-0.5 text-center">
                    D.NO-4152 RANI
                  </div>
                </div>

                {/* Overlapping Badge */}
                <div className="absolute -top-4 -right-4 bg-[#7D1D2B] text-white p-3 shadow-lg border border-white/20 text-center">
                  <span className="text-[10px] uppercase tracking-widest text-[#E4D5BE] block">
                    Factory Certified
                  </span>
                  <span className="font-serif text-lg font-bold">100% Real</span>
                  <span className="text-[10px] block text-white/90">Photographs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY NAVIGATION SHOWCASE */}
      <section className="py-16 sm:py-20 border-b border-[#EAE5DC] bg-white">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] uppercase tracking-widest text-[#7D1D2B] font-semibold block mb-1">
              Manufacturing Categories
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1C1917]">
              Explore by Silhouette & Fabric
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#78716C]">
              Discover our premier fabric ranges crafted specifically for boutique retailers and high-volume wholesale consignments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category 1: Bridal Silk */}
            <Link
              href="/catalogue?category=Bridal+Silk"
              className="group relative bg-[#FAF7F2] border border-[#EAE5DC] overflow-hidden flex flex-col hover:border-[#7D1D2B] transition-all"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-white">
                <Image
                  src="/products/media_1793041530890.jpg"
                  alt="Bridal Silk Lehengas"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[11px] font-mono font-bold bg-[#1C1917]/90 text-white">
                    D.NO.40270
                  </span>
                </div>
              </div>
              <div className="p-5 flex justify-between items-center bg-white">
                <div>
                  <h3 className="font-serif text-lg font-medium text-[#1C1917] group-hover:text-[#7D1D2B] transition-colors">
                    Bridal Silk Lehengas
                  </h3>
                  <p className="text-xs text-[#78716C] mt-0.5">
                    Heavy zardozi, peacock & elephant embroidery
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#7D1D2B] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Category 2: Festive Silk */}
            <Link
              href="/catalogue?category=Festive+Silk"
              className="group relative bg-[#FAF7F2] border border-[#EAE5DC] overflow-hidden flex flex-col hover:border-[#7D1D2B] transition-all"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-white">
                <Image
                  src="/products/media_1793041534376.jpg"
                  alt="Festive Silk Lehengas"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[11px] font-mono font-bold bg-[#1C1917]/90 text-white">
                    D.NO-4152
                  </span>
                </div>
              </div>
              <div className="p-5 flex justify-between items-center bg-white">
                <div>
                  <h3 className="font-serif text-lg font-medium text-[#1C1917] group-hover:text-[#7D1D2B] transition-colors">
                    Festive Silk Lehengas
                  </h3>
                  <p className="text-xs text-[#78716C] mt-0.5">
                    Linear panel zari, rani pink & vibrant tones
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#7D1D2B] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Category 3: Tissue Lehengas */}
            <Link
              href="/catalogue?category=Tissue"
              className="group relative bg-[#FAF7F2] border border-[#EAE5DC] overflow-hidden flex flex-col hover:border-[#7D1D2B] transition-all"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-white">
                <Image
                  src="/products/media_1793041541727.jpg"
                  alt="Tissue Lehengas"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[11px] font-mono font-bold bg-[#1C1917]/90 text-white">
                    D.NO-3992
                  </span>
                </div>
              </div>
              <div className="p-5 flex justify-between items-center bg-white">
                <div>
                  <h3 className="font-serif text-lg font-medium text-[#1C1917] group-hover:text-[#7D1D2B] transition-colors">
                    Tissue Silk Lehengas
                  </h3>
                  <p className="text-xs text-[#78716C] mt-0.5">
                    Floral mandala medallions & shimmering cut-dana
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#7D1D2B] group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. FEATURED WHOLESALE DESIGNS SECTION */}
      <section className="py-16 sm:py-24 border-b border-[#EAE5DC]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#EAE5DC]">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#7D1D2B] font-semibold block mb-1">
                Featured Factory Inventory
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1C1917]">
                Authentic Surat Mill Designs
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-[#78716C]">
                Explore designs with verified manufacturer tags. Select piece quantities and order via WhatsApp.
              </p>
            </div>

            <Link
              href="/catalogue"
              className="text-xs uppercase tracking-wider text-[#7D1D2B] font-bold hover:underline flex items-center space-x-1"
            >
              <span>View Full Catalogue ({initialProducts.length} Designs)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <CatalogueGrid limit={4} />
        </div>
      </section>

      {/* 4. HOW WHOLESALE ORDERING WORKS */}
      <section id="how-to-order" className="py-16 sm:py-20 bg-white border-b border-[#EAE5DC]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] uppercase tracking-widest text-[#7D1D2B] font-semibold block mb-1">
              Simple 4-Step Process
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1C1917]">
              How Wholesale Ordering Works
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#78716C]">
              Streamlined B2B consignment ordering designed for busy boutique owners and textile resellers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[#FAF7F2] border border-[#EAE5DC] flex flex-col justify-between">
              <div>
                <span className="font-mono text-2xl font-bold text-[#7D1D2B] block mb-2">
                  01
                </span>
                <h3 className="font-serif text-base font-medium text-[#1C1917]">
                  Browse Real Designs
                </h3>
                <p className="text-xs text-[#57534E] mt-2 font-light leading-relaxed">
                  Inspect authentic photographs with manufacturer tags (e.g. 39750, 40270, 4152). No stock mockups or fake renders.
                </p>
              </div>
            </div>

            <div className="p-6 bg-[#FAF7F2] border border-[#EAE5DC] flex flex-col justify-between">
              <div>
                <span className="font-mono text-2xl font-bold text-[#7D1D2B] block mb-2">
                  02
                </span>
                <h3 className="font-serif text-base font-medium text-[#1C1917]">
                  Select Piece Counts
                </h3>
                <p className="text-xs text-[#57534E] mt-2 font-light leading-relaxed">
                  Use the quantity steppers to select piece quantities per design. No prices or confusing discount rates are shown on the portal.
                </p>
              </div>
            </div>

            <div className="p-6 bg-[#FAF7F2] border border-[#EAE5DC] flex flex-col justify-between">
              <div>
                <span className="font-mono text-2xl font-bold text-[#7D1D2B] block mb-2">
                  03
                </span>
                <h3 className="font-serif text-base font-medium text-[#1C1917]">
                  Send to WhatsApp
                </h3>
                <p className="text-xs text-[#57534E] mt-2 font-light leading-relaxed">
                  Enter your boutique details and 1-click transmits your complete structured order to our factory desk (+91 9998283811).
                </p>
              </div>
            </div>

            <div className="p-6 bg-[#FAF7F2] border border-[#EAE5DC] flex flex-col justify-between">
              <div>
                <span className="font-mono text-2xl font-bold text-[#7D1D2B] block mb-2">
                  04
                </span>
                <h3 className="font-serif text-base font-medium text-[#1C1917]">
                  Direct Factory Confirmation
                </h3>
                <p className="text-xs text-[#57534E] mt-2 font-light leading-relaxed">
                  Receive immediate fabric confirmation, production schedules, and wholesale payment invoice directly on WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. RESELLER & BOUTIQUE PARTNER CTA */}
      <section id="wholesale-terms" className="py-16 sm:py-20 bg-[#FAF7F2]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16">
          <div className="bg-[#1C1917] text-white p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="max-w-2xl space-y-5 relative z-10">
              <span className="text-[11px] uppercase tracking-widest text-[#C5A880] font-semibold">
                Direct Mill Supply Guarantee
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
                Partner with Aksharam Textiles
              </h2>
              <p className="text-xs sm:text-sm text-[#D6CEC1] font-light leading-relaxed">
                Whether you run an established ethnic boutique, an online bridal showroom, or a regional distribution agency, Aksharam Textiles provides consistent mill-fresh quality, timely dispatches, and responsive WhatsApp service.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/catalogue"
                  className="py-3.5 px-6 bg-[#7D1D2B] text-white hover:bg-[#58121C] text-xs uppercase tracking-widest font-bold text-center"
                >
                  Start Your Wholesale Order
                </Link>

                <a
                  href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsapp.number}&text=${encodeURIComponent(
                    "Hello Aksharam Textiles, I want to discuss a custom wholesale partnership for my boutique."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-6 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs uppercase tracking-widest font-semibold flex items-center justify-center space-x-2 text-center"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Connect on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Decorative Gold Border element */}
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#C5A880]/10 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>
    </div>
  );
}
