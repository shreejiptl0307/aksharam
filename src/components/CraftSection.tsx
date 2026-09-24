"use client";

import { useState } from "react";
import Image from "next/image";
import { craftPoints } from "@/data/collections";
import ScrollReveal from "@/components/ScrollReveal";

export default function CraftSection() {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-5 sm:px-8 lg:px-16 max-w-[1440px] mx-auto border-t border-[#E4E2DD]">
      {/* Top Header & Fashion Photo Block */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-7 sm:gap-8 md:gap-12 items-end mb-10 sm:mb-12 md:mb-14">
        {/* Left Heading */}
        <div className="md:col-span-7 lg:col-span-8 max-w-xl">
          <ScrollReveal className="w-full">
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

        {/* Fashion & Detail Photo (100% full content width on mobile, 280-320px on desktop) */}
        <div className="w-full md:col-span-5 lg:col-span-4 flex flex-col items-start md:items-end">
          <ScrollReveal delay={80} className="w-full flex flex-col items-start md:items-end">
            <div
              onMouseEnter={() => setShowDetail(true)}
              onMouseLeave={() => setShowDetail(false)}
              className="relative w-full md:max-w-[280px] lg:max-w-[320px] aspect-[4/3] overflow-hidden bg-[#ECEBE7] shadow-2xs"
            >
              {/* Full Garment Look */}
              <Image
                src="/images/collections/collection-lehenga.jpg"
                alt="Aksharam bridal lehenga craftsmanship"
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className={`object-cover object-top transition-opacity duration-500 ease-out ${
                  showDetail ? "opacity-0" : "opacity-100"
                }`}
              />

              {/* Close-up Embroidery Detail */}
              <Image
                src="/images/craft/craft-detail-01.jpg"
                alt="Close-up macro detail of handcrafted embroidery on Aksharam fabric"
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className={`object-cover object-center transition-opacity duration-500 ease-out ${
                  showDetail ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>

            {/* Toggle Button */}
            <button
              type="button"
              onClick={() => setShowDetail((prev) => !prev)}
              className="mt-3.5 min-h-[36px] inline-flex items-center text-[11px] uppercase tracking-[0.15em] text-[#66635F] hover:text-[#171717] transition-colors cursor-pointer"
            >
              {showDetail ? "← View full look" : "View detail →"}
            </button>
          </ScrollReveal>
        </div>
      </div>

      {/* 3 Principles: Stacked with dividers on Mobile, 3 Columns on Desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 lg:gap-12 divide-y md:divide-y-0 md:divide-x divide-[#E4E2DD]">
        {craftPoints.map((point, index) => (
          <ScrollReveal key={point.num} delay={index * 60} className="w-full">
            <div
              className={`pt-6 sm:pt-7 md:pt-0 ${index !== 0 ? "md:pl-6 lg:pl-10" : ""}`}
            >
              <span className="text-xs uppercase tracking-widest text-[#66635F] block mb-2 sm:mb-2.5">
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
