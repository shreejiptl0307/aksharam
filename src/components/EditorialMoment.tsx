"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function EditorialMoment() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-5 sm:px-8 lg:px-16 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-14 items-center">
        {/* Left 55% (~7 cols): Large 4:5 Portrait Photography */}
        <div className="lg:col-span-7">
          <ScrollReveal duration={800}>
            <div
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative w-full aspect-[4/5] overflow-hidden bg-[#ECEBE7] transition-all duration-500 ease-out"
              style={{
                opacity: hoveredIndex === 2 ? 0.82 : 1,
              }}
            >
              <Image
                src="/images/lookbook/lookbook-05.jpg"
                alt="Model wearing dusty blue embroidered Aksharam bridal festive ensemble"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 55vw"
                className={`object-cover object-top transition-transform duration-600 ease-out ${
                  hoveredIndex === 1 ? "scale-[1.015]" : "scale-100"
                }`}
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Right 45% (~5 cols): Smaller Portrait + Statement Text */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6 sm:space-y-8 lg:space-y-10">
          <ScrollReveal delay={120}>
            <div
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative w-full aspect-[4/5] sm:aspect-[3/4] max-w-full lg:max-w-[420px] overflow-hidden bg-[#ECEBE7] transition-all duration-500 ease-out"
              style={{
                opacity: hoveredIndex === 1 ? 0.82 : 1,
              }}
            >
              <Image
                src="/images/lookbook/lookbook-02.jpg"
                alt="Model wearing festive yellow tissue lehenga with gold borders"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 40vw"
                className={`object-cover object-top transition-transform duration-600 ease-out ${
                  hoveredIndex === 2 ? "scale-[1.015]" : "scale-100"
                }`}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="space-y-2 sm:space-y-3 max-w-sm">
              <h3 className="text-lg sm:text-xl md:text-2xl font-light text-[#171717] tracking-tight">
                Made for the occasion.
              </h3>
              <p className="text-xs sm:text-sm text-[#66635F] font-light leading-relaxed">
                Aksharam collections bring together contemporary silhouettes and thoughtful detailing.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
