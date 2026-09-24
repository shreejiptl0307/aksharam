import Link from "next/link";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/data/siteConfig";

export default function ContactCTA() {
  return (
    <section className="py-24 md:py-36 bg-[#181715] text-[#F7F3EC] relative overflow-hidden border-t border-[#F7F3EC]/10">
      {/* Subtle Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(112,44,54,0.15),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Label */}
        <div className="inline-flex items-center space-x-3 mb-6 px-4 py-1.5 bg-white/5 border border-white/10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B79A67]" />
          <span className="text-[10px] tracking-[0.3em] uppercase font-sans text-[#D8CBC4]">
            PARTNER WITH AKSHARAM
          </span>
        </div>

        {/* Large Editorial Title */}
        <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-light leading-[1.08] tracking-tight mb-8 text-balance text-[#F7F3EC]">
          Discover the next <br />
          <span className="italic text-[#EFE7DA]">Aksharam collection.</span>
        </h2>

        {/* Supporting Copy */}
        <p className="max-w-xl text-base sm:text-lg text-[#D8CBC4] font-light leading-relaxed mb-10">
          For catalogues, wholesale enquiries and collection information, speak
          directly with our trade and design team in Surat.
        </p>

        {/* Dual Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 bg-[#702C36] text-[#F7F3EC] text-xs uppercase tracking-[0.25em] font-semibold hover:bg-[#B79A67] transition-all duration-300 shadow-md group"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 border border-white/30 text-[#F7F3EC] text-xs uppercase tracking-[0.25em] font-medium hover:border-[#F7F3EC] hover:bg-white/5 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
