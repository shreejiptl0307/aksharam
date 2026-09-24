import Image from "next/image";
import Link from "next/link";
import { siteConfig, getWhatsAppUrl } from "@/data/siteConfig";

export default function Hero() {
  return (
    <section className="pt-28 md:pt-36 pb-16 md:pb-24 px-6 sm:px-10 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-10 md:mb-14">
        {/* Left Headline */}
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.2em] text-[#66635F] mb-4">
            {siteConfig.companyName}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#171717] leading-[1.08]">
            Contemporary Indian <br />
            Ethnic Wear
          </h1>
        </div>

        {/* Right Supporting Text & Buttons */}
        <div className="lg:col-span-5 flex flex-col justify-end space-y-6 lg:pb-2">
          <p className="text-base sm:text-lg text-[#66635F] font-light max-w-md leading-relaxed">
            {siteConfig.subtagline}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-1">
            <Link
              href="/collections"
              className="px-6 py-3.5 bg-[#171717] text-[#FAFAF8] text-xs uppercase tracking-[0.15em] font-medium rounded-[2px] hover:bg-black transition-colors"
            >
              Explore Collections
            </Link>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 border border-[#E4E2DD] text-[#171717] text-xs uppercase tracking-[0.15em] font-medium rounded-[2px] hover:border-[#171717] transition-colors"
            >
              Wholesale Enquiry
            </a>
          </div>
        </div>
      </div>

      {/* Large Clean Hero Photography Container */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/10] overflow-hidden bg-[#ECEBE7]">
        <Image
          src="/images/hero/hero-main.svg"
          alt="Aksharam Ethnic Wear Campaign"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}
