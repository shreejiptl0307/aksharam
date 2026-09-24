"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

interface Hotspot {
  id: string;
  number: string;
  label: string;
  title: string;
  description: string;
  top: string; // percentage
  left: string; // percentage
  link: string;
}

const hotspots: Hotspot[] = [
  {
    id: "blouse",
    number: "01",
    label: "Bodice",
    title: "Embroidered Blouse",
    description: "Structured neckline with hand-embroidered silver zardozi and thread detailing.",
    top: "28%",
    left: "52%",
    link: "/collections/shisha-lehengas",
  },
  {
    id: "embroidery",
    number: "02",
    label: "Detail",
    title: "Hand-Locked Mirrorwork",
    description: "Traditional shisha mirrorwork accented with fine metallic borders and geometric motifs.",
    top: "52%",
    left: "44%",
    link: "/collections/shisha-lehengas",
  },
  {
    id: "drape",
    number: "03",
    label: "Silhouette",
    title: "Flared Silk Lehenga",
    description: "Multi-panel flared skirt tailored in pure georgette and silk-blend fabric with fluid volume.",
    top: "76%",
    left: "58%",
    link: "/collections/shisha-lehengas",
  },
];

export default function ExploreTheLook() {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot>(hotspots[0]);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-5 sm:px-8 lg:px-16 max-w-[1440px] mx-auto border-t border-[#E4E2DD]">
      {/* Header */}
      <ScrollReveal>
        <div className="max-w-xl mb-6 sm:mb-8 md:mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-[#66635F] mb-2 sm:mb-3">
            <span className="text-[#DB2D1C] font-semibold mr-1.5">||</span>
            Explore the Look
          </p>
          <h2
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}
            className="font-light text-[#171717] tracking-tight leading-snug"
          >
            Discover the details behind the design.
          </h2>
        </div>
      </ScrollReveal>

      {/* Main Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-14 items-center">
        {/* Left Column (Desktop 7 cols): Portrait Photography with Interactive Hotspots */}
        <div className="lg:col-span-7">
          <ScrollReveal duration={800}>
            <div className="relative w-full aspect-[4/5] sm:aspect-[4/5] overflow-hidden bg-[#ECEBE7]">
              <Image
                src="/images/hero/hero-main.jpg"
                alt="Aksharam bridal lehenga exploration with interactive design details"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 58vw"
                className="object-cover object-top"
              />

              {/* Desktop Interactive Hotspot Markers (Hidden on Mobile) */}
              <div className="hidden md:block">
                {hotspots.map((spot) => {
                  const isActive = activeHotspot.id === spot.id;
                  return (
                    <div
                      key={spot.id}
                      style={{ top: spot.top, left: spot.left }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                    >
                      <button
                        type="button"
                        onClick={() => setActiveHotspot(spot)}
                        onMouseEnter={() => setActiveHotspot(spot)}
                        aria-label={`Explore detail: ${spot.title}`}
                        className="relative flex items-center justify-center w-8 h-8 group cursor-pointer focus:outline-hidden"
                      >
                        {/* Outer Pulse Ring */}
                        <span
                          className={`absolute inset-0 rounded-full border border-white/80 transition-all duration-300 ${
                            isActive
                              ? "scale-110 bg-white/20"
                              : "animate-hotspot-pulse group-hover:scale-110"
                          }`}
                        />
                        {/* Center Dot */}
                        <span
                          className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
                            isActive ? "bg-white" : "bg-white/85 group-hover:bg-white"
                          }`}
                        />
                      </button>

                      {/* Desktop Hover / Active Tooltip Badge */}
                      {isActive && (
                        <div className="absolute left-10 top-1/2 -translate-y-1/2 z-20 w-56 bg-[#FAFAF8] p-3.5 border border-[#E4E2DD] shadow-xs text-left animate-in fade-in duration-200 pointer-events-none">
                          <span className="text-[10px] uppercase tracking-widest text-[#66635F] block mb-1">
                            {spot.number} — {spot.label}
                          </span>
                          <p className="text-xs font-medium text-[#171717] mb-1">
                            {spot.title}
                          </p>
                          <p className="text-[11px] text-[#66635F] font-light leading-snug">
                            {spot.description}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Selected Detail Information & Mobile Selectable Rows */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:pl-4">
          <ScrollReveal delay={120}>
            {/* Desktop Active Card Detail */}
            <div className="hidden md:block space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#66635F] block">
                {activeHotspot.number} / 03 — {activeHotspot.label}
              </span>
              <h3 className="text-2xl font-light text-[#171717] tracking-tight">
                {activeHotspot.title}
              </h3>
              <p className="text-sm text-[#66635F] font-light leading-relaxed max-w-sm">
                {activeHotspot.description}
              </p>
              <div className="pt-2">
                <Link
                  href={activeHotspot.link}
                  className="group inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.15em] font-medium text-[#171717] hover:opacity-80 transition-opacity py-2 min-h-[44px]"
                >
                  <span>View collection</span>
                  <span className="inline-block transition-transform duration-250 ease-out group-hover:translate-x-1.5">
                    →
                  </span>
                </Link>
              </div>
            </div>

            {/* Mobile Selectable Rows with 44px+ min touch targets */}
            <div className="block md:hidden space-y-2.5">
              <p className="text-xs uppercase tracking-[0.15em] text-[#66635F] mb-3">
                Select a detail to explore:
              </p>
              {hotspots.map((spot) => {
                const isSelected = activeHotspot.id === spot.id;
                return (
                  <button
                    key={spot.id}
                    type="button"
                    onClick={() => setActiveHotspot(spot)}
                    className={`w-full text-left p-4 border min-h-[52px] transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-[#FAFAF8] border-[#171717]"
                        : "bg-white/40 border-[#E4E2DD]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-xs font-mono font-medium text-[#171717]">
                          {spot.number}
                        </span>
                        <span className="text-sm font-medium text-[#171717]">
                          {spot.title}
                        </span>
                      </div>
                      <span className="text-xs text-[#66635F] font-light">
                        {isSelected ? "−" : "→"}
                      </span>
                    </div>

                    {isSelected && (
                      <div className="pt-2.5 mt-2 border-t border-[#E4E2DD] animate-in fade-in duration-200">
                        <p className="text-xs text-[#66635F] font-light leading-relaxed mb-3">
                          {spot.description}
                        </p>
                        <Link
                          href={spot.link}
                          className="inline-flex items-center text-xs uppercase tracking-[0.12em] font-medium text-[#171717] py-1"
                        >
                          Explore style →
                        </Link>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
