"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, getWhatsAppUrl } from "@/data/siteConfig";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Quick load trigger
    const timer = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pt-20 sm:pt-26 md:pt-32 pb-10 sm:pb-12 md:pb-16 px-5 sm:px-8 lg:px-16 max-w-[1440px] mx-auto">
      {/* Top Text Row: 55% Left / 45% Right on Desktop, Natural Vertical Stack on Mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-end mb-6 sm:mb-8 md:mb-10">
        {/* Left Headline */}
        <div className="lg:col-span-7">
          <p
            className={`text-xs uppercase tracking-[0.2em] text-[#66635F] mb-2 sm:mb-3 transition-all duration-600 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <span className="text-[#DB2D1C] font-semibold mr-1.5">||</span>
            {siteConfig.companyName}
          </p>
          <h1
            style={{
              fontSize: "clamp(2.125rem, 5.5vw, 4.5rem)",
              transitionDelay: "100ms",
            }}
            className={`font-light tracking-tight text-[#171717] leading-[1.08] sm:leading-[1.06] transition-all duration-700 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Contemporary Indian <br className="hidden sm:inline" />
            Ethnic Wear
          </h1>
        </div>

        {/* Right Supporting Text & Buttons */}
        <div
          style={{ transitionDelay: "220ms" }}
          className={`lg:col-span-5 flex flex-col justify-end space-y-4 sm:space-y-5 lg:pb-1 transition-all duration-700 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-sm sm:text-base md:text-lg text-[#66635F] font-light max-w-md leading-relaxed">
            {siteConfig.subtagline}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
            <Link
              href="/collections"
              className="group inline-flex items-center justify-center space-x-1.5 min-h-[44px] px-6 py-3 bg-[#171717] text-[#FAFAF8] text-xs uppercase tracking-[0.15em] font-medium rounded-[2px] hover:bg-[#262626] transition-colors duration-250 text-center"
            >
              <span>Explore Collections</span>
              <span className="inline-block transition-transform duration-250 ease-out group-hover:translate-x-1">
                →
              </span>
            </Link>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center space-x-1.5 min-h-[44px] px-6 py-3 border border-[#E4E2DD] text-[#171717] text-xs uppercase tracking-[0.15em] font-medium rounded-[2px] hover:border-[#171717] hover:bg-[#171717]/[0.02] transition-colors duration-250 text-center"
            >
              <span>Wholesale Enquiry</span>
              <span className="inline-block transition-transform duration-250 ease-out group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Campaign Hero Photograph — Intentional Editorial Portrait Composition */}
      <div
        style={{ transitionDelay: "320ms" }}
        className={`w-full flex justify-center pt-2 sm:pt-4 transition-all duration-900 ease-out ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="relative w-full max-w-[760px] aspect-[4/5] overflow-hidden bg-[#ECEBE7] shadow-xs">
          <Image
            src="/images/hero/hero-main.jpg"
            alt="Aksharam bridal lehenga campaign featuring intricate silver zardozi embroidery"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 760px"
            className={`object-cover object-top transition-transform duration-1000 ease-out ${
              loaded ? "scale-100" : "scale-[1.015]"
            }`}
          />
        </div>
      </div>
    </section>
  );
}
