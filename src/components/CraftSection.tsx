"use client";

import { useState } from "react";
import Image from "next/image";
import { craftPoints } from "@/data/collections";
import ScrollReveal from "@/components/ScrollReveal";

export default function CraftSection() {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-5 sm:px-8 lg:px-16 max-w-[1440px] mx-auto border-t border-[#E4E2DD]">
      {/* Top Section: Heading & Editorial Garment/Detail Photo */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-12 items-end mb-10 sm:mb-12 md:mb-16">
        <div className="md:col-span-7 lg:col-span-8 max-w-xl">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-[#66635F] mb-2 sm:mb-3">
              <span className="text-[#DB2D1C] font-semibold mr-1.5">||</span>
              Our Approach
            </p>
            <h2
              style={{ fontSize: "clamp(1.625rem, 4.2vw, 2.5rem)" }}
              className="font-light text-[#171717] tracking-tight leading-tight"
            >
              Attention to the details that matter.
            </h2>
          </ScrollReveal>
        </div>

        {/* Editorial Garment / Detail Crossfade Image Container */}
        <div className="md:col-span-5 lg:col-span-4 flex flex-col items-start md:items-end mt-4 sm:mt-6 md:mt-0">
          <ScrollReveal delay={100}>
            <div
              onMouseEnter={() => setShowDetail(true)}
              onMouseLeave={() => setShowDetail(false)}
              className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[280px] aspect-[4/3] sm:aspect-[4/3] md:aspect-[4/3] overflow-hidden bg-[#ECEBE7] mb-2.5 shadow-xs"
            >
              {/* Full Garment Look */}
              <Image
                src="/images/collections/collection-lehenga.jpg"
                alt="Aksharam bridal lehenga craftsmanship"
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 768px) 360px, 280px"
                className={`object-cover object-top transition-opacity duration-500 ease-out ${
                  showDetail ? "opacity-0" : "opacity-100"
                }`}
              />

              {/* Close-up Embroidery Detail */}
              <Image
                src="/images/craft/craft-detail-01.jpg"
                alt="Close-up macro detail of handcrafted embroidery on Aksharam fabric"
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 768px) 360px, 280px"
                className={`object-cover object-center transition-opacity duration-500 ease-out ${
                  showDetail ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>

            {/* Interactive Toggle Button with 44px min tap target */}
            <button
              type="button"
              onClick={() => setShowDetail((prev) => !prev)}
              className="min-h-[44px] inline-flex items-center text-[11px] uppercase tracking-[0.15em] text-[#66635F] hover:text-[#171717] transition-colors cursor-pointer py-1"
            >
              {showDetail ? "← View full look" : "View detail →"}
            </button>
          </ScrollReveal>
        </div>
      </div>

      {/* 3 Clean Columns on Desktop / Tablet, Stacked on Mobile with Separators */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 divide-y md:divide-y-0 md:divide-x divide-[#E4E2DD]">
        {craftPoints.map((point, index) => (
          <ScrollReveal key={point.num} delay={index * 80}>
            <div
              className={`pt-5 sm:pt-6 md:pt-0 ${index !== 0 ? "md:pl-6 lg:pl-10" : ""}`}
            >
              <span className="text-xs uppercase tracking-widest text-[#66635F] block mb-2 sm:mb-3">
                {point.num}
              </span>
              <h3 className="text-base sm:text-lg font-normal text-[#171717] mb-1.5 sm:mb-2 tracking-tight">
                {point.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#66635F] font-light leading-relaxed">
                {point.desc}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
