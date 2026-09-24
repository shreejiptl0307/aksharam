"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { lookbookImages } from "@/data/collections";
import ImageViewerModal from "@/components/ImageViewerModal";
import ScrollReveal from "@/components/ScrollReveal";

export default function LookbookGrid() {
  const [viewerIndex, setViewerIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const openViewer = (index: number) => {
    setViewerIndex(index);
  };

  const closeViewer = () => {
    setViewerIndex(null);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-5 sm:px-8 lg:px-16 max-w-[1440px] mx-auto border-t border-[#E4E2DD]">
      {/* Header */}
      <ScrollReveal>
        <div className="flex items-baseline justify-between mb-6 sm:mb-8 md:mb-10 border-b border-[#E4E2DD] pb-3 sm:pb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-[#171717] tracking-tight">
            Lookbook
          </h2>
          <Link
            href="/collections"
            className="group inline-flex items-center text-xs uppercase tracking-[0.15em] text-[#66635F] hover:text-[#171717] transition-colors py-2"
          >
            <span>View all</span>
            <span className="inline-block transition-transform duration-250 ease-out group-hover:translate-x-1 ml-1">
              →
            </span>
          </Link>
        </div>
      </ScrollReveal>

      {/* Controlled Mixed Rhythm Grid: Portrait + Landscape pairing */}
      <div className="space-y-6 sm:space-y-8 md:space-y-10">
        {/* Row 1: Portrait (5 cols) + Landscape (7 cols) on Desktop/Tablet, Clean Editorial Stack on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-end">
          <div className="md:col-span-5">
            <ScrollReveal delay={0}>
              <button
                type="button"
                onClick={() => openViewer(0)}
                className="relative w-full aspect-[4/5] overflow-hidden bg-[#ECEBE7] block text-left group cursor-zoom-in focus:outline-hidden select-none mb-2"
                aria-label={`View look: ${lookbookImages[0].alt}`}
              >
                <Image
                  src={lookbookImages[0].src}
                  alt={lookbookImages[0].alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  className="object-cover object-top transition-transform duration-600 ease-out group-hover:scale-[1.02]"
                />
                <span className="absolute bottom-3 right-3 text-[10px] uppercase tracking-widest px-2 py-1 bg-black/60 text-white backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View
                </span>
              </button>
              <div className="flex items-center justify-between text-[11px] text-[#66635F] tracking-widest uppercase py-1">
                <span>LOOK 01</span>
                <span className="font-light">Crush Lehenga</span>
              </div>
            </ScrollReveal>
          </div>

          <div className="md:col-span-7">
            <ScrollReveal delay={100}>
              <button
                type="button"
                onClick={() => openViewer(3)}
                className="relative w-full aspect-[4/3] sm:aspect-[3/2] overflow-hidden bg-[#ECEBE7] block text-left group cursor-zoom-in focus:outline-hidden select-none mb-2"
                aria-label={`View look: ${lookbookImages[3].alt}`}
              >
                <Image
                  src={lookbookImages[3].src}
                  alt={lookbookImages[3].alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-top transition-transform duration-600 ease-out group-hover:scale-[1.02]"
                />
                <span className="absolute bottom-3 right-3 text-[10px] uppercase tracking-widest px-2 py-1 bg-black/60 text-white backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View
                </span>
              </button>
              <div className="flex items-center justify-between text-[11px] text-[#66635F] tracking-widest uppercase py-1">
                <span>LOOK 04</span>
                <span className="font-light">Festive Ensemble</span>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Row 2: Landscape (7 cols) + Portrait (5 cols) on Desktop, Editorial Flow on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
          <div className="md:col-span-7">
            <ScrollReveal delay={0}>
              <button
                type="button"
                onClick={() => openViewer(5)}
                className="relative w-full aspect-[4/3] sm:aspect-[3/2] overflow-hidden bg-[#ECEBE7] block text-left group cursor-zoom-in focus:outline-hidden select-none mb-2"
                aria-label={`View look: ${lookbookImages[5].alt}`}
              >
                <Image
                  src={lookbookImages[5].src}
                  alt={lookbookImages[5].alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-top transition-transform duration-600 ease-out group-hover:scale-[1.02]"
                />
                <span className="absolute bottom-3 right-3 text-[10px] uppercase tracking-widest px-2 py-1 bg-black/60 text-white backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View
                </span>
              </button>
              <div className="flex items-center justify-between text-[11px] text-[#66635F] tracking-widest uppercase py-1">
                <span>LOOK 06</span>
                <span className="font-light">Rust Tissue Set</span>
              </div>
            </ScrollReveal>
          </div>

          <div className="md:col-span-5">
            <ScrollReveal delay={100}>
              <button
                type="button"
                onClick={() => openViewer(2)}
                className="relative w-full aspect-[4/5] overflow-hidden bg-[#ECEBE7] block text-left group cursor-zoom-in focus:outline-hidden select-none mb-2"
                aria-label={`View look: ${lookbookImages[2].alt}`}
              >
                <Image
                  src={lookbookImages[2].src}
                  alt={lookbookImages[2].alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  className="object-cover object-top transition-transform duration-600 ease-out group-hover:scale-[1.02]"
                />
                <span className="absolute bottom-3 right-3 text-[10px] uppercase tracking-widest px-2 py-1 bg-black/60 text-white backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View
                </span>
              </button>
              <div className="flex items-center justify-between text-[11px] text-[#66635F] tracking-widest uppercase py-1">
                <span>LOOK 03</span>
                <span className="font-light">Mint Green Tissue</span>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Optional Row 3 when "View more" is clicked */}
        {showAll && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-end animate-in fade-in duration-500">
            <div className="md:col-span-6">
              <button
                type="button"
                onClick={() => openViewer(1)}
                className="relative w-full aspect-[4/5] overflow-hidden bg-[#ECEBE7] block text-left group cursor-zoom-in focus:outline-hidden select-none mb-2"
                aria-label={`View look: ${lookbookImages[1].alt}`}
              >
                <Image
                  src={lookbookImages[1].src}
                  alt={lookbookImages[1].alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  className="object-cover object-top transition-transform duration-600 ease-out group-hover:scale-[1.02]"
                />
                <span className="absolute bottom-3 right-3 text-[10px] uppercase tracking-widest px-2 py-1 bg-black/60 text-white backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View
                </span>
              </button>
              <div className="flex items-center justify-between text-[11px] text-[#66635F] tracking-widest uppercase py-1">
                <span>LOOK 02</span>
                <span className="font-light">Yellow Tissue Ensemble</span>
              </div>
            </div>

            <div className="md:col-span-6">
              <button
                type="button"
                onClick={() => openViewer(4)}
                className="relative w-full aspect-[4/5] overflow-hidden bg-[#ECEBE7] block text-left group cursor-zoom-in focus:outline-hidden select-none mb-2"
                aria-label={`View look: ${lookbookImages[4].alt}`}
              >
                <Image
                  src={lookbookImages[4].src}
                  alt={lookbookImages[4].alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  className="object-cover object-top transition-transform duration-600 ease-out group-hover:scale-[1.02]"
                />
                <span className="absolute bottom-3 right-3 text-[10px] uppercase tracking-widest px-2 py-1 bg-black/60 text-white backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View
                </span>
              </button>
              <div className="flex items-center justify-between text-[11px] text-[#66635F] tracking-widest uppercase py-1">
                <span>LOOK 05</span>
                <span className="font-light">Dusty Blue Silhouette</span>
              </div>
            </div>
          </div>
        )}

        {/* View More Button with 44px min tap target */}
        {!showAll && (
          <div className="pt-4 text-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="inline-flex items-center space-x-1.5 min-h-[44px] px-6 py-2.5 border border-[#E4E2DD] text-[#171717] text-xs uppercase tracking-[0.15em] font-medium rounded-[2px] hover:border-[#171717] hover:bg-[#171717]/[0.02] transition-colors duration-250 cursor-pointer"
            >
              <span>View more looks</span>
              <span>↓</span>
            </button>
          </div>
        )}
      </div>

      {/* Clean White/Off-White Image Viewer Lightbox */}
      <ImageViewerModal
        images={lookbookImages}
        currentIndex={viewerIndex ?? 0}
        isOpen={viewerIndex !== null}
        onClose={closeViewer}
        onNavigate={(newIndex) => setViewerIndex(newIndex)}
      />
    </section>
  );
}
