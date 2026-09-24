"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { getWhatsAppUrl } from "@/data/siteConfig";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#181715] text-[#F7F3EC]">
      {/* Background Image with Slow Subtle Cinematic Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/hero/hero-main.svg"
          alt="Aksharam Ethnic LLP - Haute Indian Ethnic Campaign"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 animate-[pulse_14s_ease-in-out_infinite] opacity-60 md:opacity-75 filter brightness-90"
        />
        {/* Subtle Dark Gradient Vignette for Editorial Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#181715] via-[#181715]/40 to-black/30" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 pt-28 pb-20 text-center flex flex-col items-center">
        {/* Small Label */}
        <div className="inline-flex items-center space-x-3 mb-6 px-4 py-1.5 bg-[#F7F3EC]/10 backdrop-blur-xs border border-[#F7F3EC]/20">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B79A67]" />
          <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-sans text-[#D8CBC4] font-medium">
            AKSHARAM ETHNIC LLP
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.08] tracking-tight mb-6 text-balance text-[#F7F3EC]">
          Crafted in India. <br />
          <span className="italic font-light text-[#EFE7DA]">Designed to be Remembered.</span>
        </h1>

        {/* Supporting Text */}
        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-[#D8CBC4] font-light leading-relaxed mb-10 tracking-wide">
          Contemporary ethnic collections created with craftsmanship, character,
          and an eye for modern fashion. Crafted for discerning retailers,
          boutiques, and global wholesale partners.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <Link
            href="/collections"
            className="w-full sm:w-auto px-8 py-4 bg-[#F7F3EC] text-[#181715] text-xs uppercase tracking-[0.25em] font-semibold hover:bg-[#B79A67] hover:text-[#F7F3EC] transition-all duration-300 shadow-xs"
          >
            Explore Collections
          </Link>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 border border-[#F7F3EC]/40 text-[#F7F3EC] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#702C36] hover:border-[#702C36] transition-all duration-300 group"
          >
            <span>Wholesale Enquiry</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#B79A67]" />
          </a>
        </div>
      </div>

      {/* Scroll to Discover Indicator */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center pointer-events-none">
        <a
          href="#story"
          className="pointer-events-auto flex flex-col items-center space-y-2 text-[10px] tracking-[0.3em] uppercase text-[#D8CBC4]/70 hover:text-[#B79A67] transition-colors"
        >
          <span>Scroll to discover</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#B79A67]" />
        </a>
      </div>
    </section>
  );
}
