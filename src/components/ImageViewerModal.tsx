"use client";

import { useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface ViewerImage {
  id: number | string;
  src: string;
  alt: string;
  caption?: string;
}

interface ImageViewerModalProps {
  images: ViewerImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function ImageViewerModal({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: ImageViewerModalProps) {
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const total = images.length;
  const currentImage = images[currentIndex];

  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + total) % total);
  }, [currentIndex, total, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % total);
  }, [currentIndex, total, onNavigate]);

  // Keyboard navigation & Escape-to-close
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Lock background scrolling cleanly
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  // Touch / Swipe support on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    // Trigger swipe only if horizontal movement exceeds threshold and is greater than vertical movement
    if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  if (!isOpen || !currentImage) return null;

  const formattedCurrent = String(currentIndex + 1).padStart(2, "0");
  const formattedTotal = String(total).padStart(2, "0");

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      className="fixed inset-0 z-50 bg-[#FAFAF8] flex flex-col justify-between select-none animate-in fade-in duration-200"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Bar: Subtle Branding & Counter on Left, Close on Right */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 h-16 md:h-20 flex items-center justify-between border-b border-[#E4E2DD]">
        <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium text-[#171717]">
          <span className="text-[#DB2D1C] font-semibold">||</span>
          <span>AKSHARAM</span>
          <span className="text-[#E4E2DD] mx-0.5">•</span>
          <span className="text-[#66635F] font-normal">{formattedCurrent} / {formattedTotal}</span>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close image viewer"
          className="flex items-center space-x-2 text-xs uppercase tracking-[0.15em] font-medium text-[#171717] hover:opacity-60 transition-opacity p-2"
        >
          <span>Close</span>
          <X className="w-4 h-4 stroke-[1.5]" />
        </button>
      </div>

      {/* Main Image Area with Previous/Next Controls */}
      <div className="relative flex-grow flex items-center justify-center px-4 sm:px-12 md:px-20 py-4 max-w-[1440px] w-full mx-auto">
        {/* Previous Button (Desktop) */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous photograph"
          className="hidden sm:flex absolute left-6 lg:left-10 z-10 w-10 h-10 items-center justify-center text-[#171717] hover:opacity-60 transition-opacity"
        >
          <ChevronLeft className="w-6 h-6 stroke-[1.5]" />
        </button>

        {/* Large Clean Photograph Container */}
        <div className="relative w-full max-w-4xl h-[65vh] sm:h-[72vh] md:h-[76vh] flex items-center justify-center">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-contain transition-opacity duration-300 ease-out"
          />
        </div>

        {/* Next Button (Desktop) */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next photograph"
          className="hidden sm:flex absolute right-6 lg:right-10 z-10 w-10 h-10 items-center justify-center text-[#171717] hover:opacity-60 transition-opacity"
        >
          <ChevronRight className="w-6 h-6 stroke-[1.5]" />
        </button>
      </div>

      {/* Bottom Bar: Mobile Navigation Arrows + Optional Caption */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 h-14 md:h-16 flex items-center justify-between border-t border-[#E4E2DD] text-xs text-[#66635F]">
        <p className="font-light truncate max-w-md">
          {currentImage.caption || currentImage.alt}
        </p>

        {/* Mobile Next / Prev Chevrons */}
        <div className="flex sm:hidden items-center space-x-6 text-[#171717]">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous photograph"
            className="p-1 hover:opacity-60 transition-opacity"
          >
            <ChevronLeft className="w-5 h-5 stroke-[1.5]" />
          </button>
          <span className="text-[11px] uppercase tracking-widest text-[#66635F]">
            {formattedCurrent}/{formattedTotal}
          </span>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next photograph"
            className="p-1 hover:opacity-60 transition-opacity"
          >
            <ChevronRight className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>
      </div>
    </div>
  );
}
