import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getWhatsAppUrl } from "@/data/siteConfig";

export default function FeaturedCollection() {
  return (
    <section className="py-20 md:py-32 bg-[#181715] text-[#F7F3EC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Large Editorial Image (60-70% visual prominence) */}
          <div className="lg:col-span-7 relative group">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden border border-[#F7F3EC]/10">
              <Image
                src="/images/collections/featured-shisha.svg"
                alt="The Shisha Edit - Aksharam Campaign"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            </div>

            {/* Campaign Tag Badge */}
            <div className="absolute top-6 left-6 bg-[#702C36] text-[#F7F3EC] px-3.5 py-1.5 text-[10px] uppercase tracking-[0.3em] font-medium border border-white/10">
              FEATURED CAMPAIGN
            </div>
          </div>

          {/* Editorial Copy Column */}
          <div className="lg:col-span-5 flex flex-col justify-center lg:pl-6">
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-[1px] bg-[#B79A67]" />
              <span className="text-[11px] tracking-[0.3em] uppercase font-sans text-[#B79A67] font-semibold">
                Signature Capsule
              </span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight mb-6 text-[#F7F3EC]">
              The Shisha <br />
              <span className="italic text-[#EFE7DA]">Edit.</span>
            </h2>

            <p className="text-[#D8CBC4] text-base md:text-lg font-light leading-relaxed mb-6">
              Traditional artistry reimagined for contemporary celebrations.
            </p>

            <p className="text-[#A39C93] text-sm font-light leading-relaxed mb-8">
              A celebration of genuine mirror-work handcraft, each garment in this
              capsule is tailored in Surat using precision framing techniques that
              anchor raw silk, georgette, and organza layers into lightweight,
              fluid movement.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/collections/shisha-lehengas"
                className="inline-flex items-center justify-center space-x-2 px-7 py-3.5 bg-[#F7F3EC] text-[#181715] text-xs uppercase tracking-[0.25em] font-semibold hover:bg-[#B79A67] hover:text-[#F7F3EC] transition-all duration-300 group"
              >
                <span>Explore Collection</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <a
                href={getWhatsAppUrl(
                  "Hello Aksharam, I'd like to request the line sheets and pricing for The Shisha Edit."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-[#F7F3EC]/30 text-[#F7F3EC] text-xs uppercase tracking-[0.25em] font-medium hover:border-[#702C36] hover:bg-[#702C36] transition-all duration-300"
              >
                Request Line Sheet
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
