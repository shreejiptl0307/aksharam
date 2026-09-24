import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/data/siteConfig";

export default function Customisation() {
  return (
    <section className="py-24 md:py-36 bg-[#EFE7DA] text-[#181715] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Large Fashion Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/5] overflow-hidden border border-[#181715]/10 shadow-xl">
              <Image
                src="/images/about/customisation.svg"
                alt="Customisation & Bespoke Atelier - Aksharam"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40" />
            </div>
          </div>

          {/* Right: Customisation Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-[1px] bg-[#702C36]" />
              <span className="text-[11px] tracking-[0.3em] uppercase font-sans text-[#702C36] font-semibold">
                Customisation
              </span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.08] tracking-tight text-[#181715] mb-6">
              Made for your market.
            </h2>

            <p className="text-[#57524B] text-base md:text-lg font-light leading-relaxed mb-6">
              Aksharam works closely with customers to understand their requirements
              and explore suitable customisation opportunities across its collections.
            </p>

            <p className="text-[#57524B] text-sm font-light leading-relaxed mb-8">
              Whether you are an international boutique seeking bespoke color palettes,
              a retailer requiring tailored size grading, or an ethnic fashion brand
              looking for signature ensemble runs, our in-house design and pattern
              masters are equipped to bring your vision to fruition.
            </p>

            <div>
              <a
                href={getWhatsAppUrl(
                  "Hello Aksharam, I'd like to discuss customisation opportunities and custom production for my boutique."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-[#181715] text-[#F7F3EC] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#702C36] transition-all duration-300 shadow-md group"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss Your Requirements</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#B79A67]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
