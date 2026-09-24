"use client";

import { useState } from "react";
import Image from "next/image";
import { craftPoints } from "@/data/collections";
import ScrollReveal from "@/components/ScrollReveal";

export default function CraftSection() {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 max-w-[1440px] mx-auto border-t border-[#E4E2DD]">
      {/* Top Row: Heading/Text on Left, Interactive Garment/Detail Photo on Right */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end mb-12 md:mb-16">
        <div className="md:col-span-8 max-w-xl">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-[#66635F] mb-3">
              Our Approach
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-light text-[#171717] tracking-tight leading-tight">
              Attention to the details that matter.
            </h2>
          </ScrollReveal>
        </div>

        {/* Small Garment / Detail Crossfade Image Container */}
        <div className="md:col-span-4 flex flex-col items-start md:items-end">
          <ScrollReveal delay={100}>
            <div
              onMouseEnter={() => setShowDetail(true)}
              onMouseLeave={() => setShowDetail(false)}
              className="relative w-full max-w-[280px] aspect-[4/3] overflow-hidden bg-[#ECEBE7] mb-2"
            >
              {/* Full Garment Look */}
              <Image
                src="/images/collections/collection-lehenga.jpg"
                alt="Aksharam bridal lehenga craftsmanship"
                fill
                sizes="(max-width: 768px) 100vw, 280px"
                className={`object-cover object-top transition-opacity duration-500 ease-out ${
                  showDetail ? "opacity-0" : "opacity-100"
                }`}
              />

              {/* Close-up Embroidery Detail */}
              <Image
                src="/images/craft/craft-detail-01.jpg"
                alt="Close-up macro detail of handcrafted embroidery on Aksharam fabric"
                fill
                sizes="(max-width: 768px) 100vw, 280px"
                className={`object-cover object-center transition-opacity duration-500 ease-out ${
                  showDetail ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>

            {/* Subtle Interactive Toggle Link */}
            <button
              type="button"
              onClick={() => setShowDetail((prev) => !prev)}
              className="text-[11px] uppercase tracking-[0.15em] text-[#66635F] hover:text-[#171717] transition-colors cursor-pointer"
            >
              {showDetail ? "← View full look" : "View detail →"}
            </button>
          </ScrollReveal>
        </div>
      </div>

      {/* 3 Clean Columns with Thin Separators */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 divide-y md:divide-y-0 md:divide-x divide-[#E4E2DD]">
        {craftPoints.map((point, index) => (
          <ScrollReveal key={point.num} delay={index * 80}>
            <div
              className={`pt-6 md:pt-0 ${index !== 0 ? "md:pl-8 lg:pl-12" : ""}`}
            >
              <span className="text-xs uppercase tracking-widest text-[#66635F] block mb-3">
                {point.num}
              </span>
              <h3 className="text-lg font-normal text-[#171717] mb-2 tracking-tight">
                {point.title}
              </h3>
              <p className="text-sm text-[#66635F] font-light leading-relaxed">
                {point.desc}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
