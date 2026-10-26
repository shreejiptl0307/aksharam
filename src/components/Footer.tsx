import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { MessageCircle, ShieldCheck, MapPin, Phone, Mail, Sparkles, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1C1917] text-[#FAF7F2] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                AKSHARAM TEXTILES
              </span>
              <span className="px-2 py-0.5 text-[9px] uppercase font-bold tracking-widest bg-[#7D1D2B] text-white">
                B2B Mill Portal
              </span>
            </div>

            <p className="text-xs text-[#A8A29E] max-w-sm font-light leading-relaxed">
              Premier Indian textile manufacturer supplying handcrafted bridal silk, festive silk, and tissue lehengas directly to retail boutiques and resellers across India and worldwide.
            </p>

            <div className="p-3 bg-white/5 border border-white/10 text-xs text-[#D6CEC1] space-y-1">
              <div className="flex items-center space-x-1.5 text-[#E4D5BE] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
                <span>Zero Price Wholesale Portal</span>
              </div>
              <p className="text-[11px] text-[#A8A29E]">
                Select quantities, add multiple designs to cart, and send directly to our WhatsApp production desk for official mill quotation.
              </p>
            </div>
          </div>

          {/* Quick Catalogue Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
              Wholesale Collections
            </h4>
            <ul className="space-y-2 text-xs text-[#A8A29E]">
              <li>
                <Link
                  href="/catalogue"
                  className="hover:text-white transition-colors"
                >
                  Full Mill Catalogue (All Codes)
                </Link>
              </li>
              <li>
                <Link
                  href="/catalogue?category=Bridal+Silk"
                  className="hover:text-white transition-colors"
                >
                  Bridal Silk Lehengas (Heavy Zardozi)
                </Link>
              </li>
              <li>
                <Link
                  href="/catalogue?category=Festive+Silk"
                  className="hover:text-white transition-colors"
                >
                  Festive Silk Lehengas (Panelled Zari)
                </Link>
              </li>
              <li>
                <Link
                  href="/catalogue?category=Tissue"
                  className="hover:text-white transition-colors"
                >
                  Tissue Silk Lehengas (Mandala Art)
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="hover:text-white transition-colors text-[#E4D5BE]"
                >
                  View Shopping Cart & Consignment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Surat Mill Facility (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
              Factory Unit & Production Desk
            </h4>
            <div className="space-y-2.5 text-xs text-[#A8A29E]">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  First Floor, Plot No. D-134-135, Laxmi Narayan Industrial Park, Udhna Navsari Road, Near BRC Complex, Surat, Gujarat 394210, India
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>
                  WhatsApp:{" "}
                  <a
                    href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsapp.number}&text=${encodeURIComponent(
                      "Hello Aksharam Textiles, I want to inquire about wholesale lehengas."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-mono font-bold hover:underline"
                  >
                    +91 9998283811
                  </a>
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>Production Desk: +91 9998283811</span>
              </div>

              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>orders@aksharamtextiles.com</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/admin"
                className="inline-flex items-center space-x-1.5 text-[11px] uppercase tracking-wider text-[#C5A880] hover:text-white"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Staff & Admin Portal Login</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#78716C] gap-4">
          <p>© {new Date().getFullYear()} AKSHARAM TEXTILES. All Rights Reserved. Surat, Gujarat, India.</p>
          <div className="flex items-center space-x-4">
            <span>Direct Manufacturer Supply</span>
            <span>•</span>
            <span>B2B Reseller Ordering</span>
            <span>•</span>
            <span>Zero Price Portal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
