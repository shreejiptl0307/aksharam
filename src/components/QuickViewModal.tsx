"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Plus, Minus, Maximize2 } from "lucide-react";
import { CollectionItem } from "@/data/collections";
import { getWhatsAppUrl } from "@/data/siteConfig";

interface QuickViewModalProps {
  item: CollectionItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickViewModal({
  item,
  isOpen,
  onClose,
}: QuickViewModalProps) {
  const [prevItem, setPrevItem] = useState(item);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>("piece");

  if (item !== prevItem) {
    setPrevItem(item);
    setActiveImageIndex(0);
    setIsZoomed(false);
    setOpenSection("piece");
  }

  // Keyboard events & scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isZoomed) {
          setIsZoomed(false);
        } else {
          onClose();
        }
      } else if (e.key === "ArrowRight" && item) {
        setActiveImageIndex((prev) => (prev + 1) % item.gallery.length);
      } else if (e.key === "ArrowLeft" && item) {
        setActiveImageIndex((prev) => (prev - 1 + item.gallery.length) % item.gallery.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose, isZoomed, item]);

  if (!isOpen || !item) return null;

  const currentImage = item.gallery[activeImageIndex] || item.gallery[0] || {
    src: item.coverImage,
    label: "Front",
    alt: item.alt,
  };

  const whatsappMessage = `Hello Aksharam, I'm interested in the ${item.title} from your website. Please share the wholesale details.`;

  const toggleAccordion = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Quick view: ${item.title}`}
      className="fixed inset-0 z-50 bg-[#FAFAF8] overflow-y-auto flex flex-col justify-between animate-in fade-in duration-200"
    >
      {/* Top Header Bar */}
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 h-14 sm:h-16 md:h-20 flex items-center justify-between border-b border-[#E4E2DD] shrink-0">
        <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium text-[#171717]">
          <span className="text-[#DB2D1C] font-semibold">||</span>
          <span>AKSHARAM</span>
          <span className="text-[#E4E2DD] mx-1">•</span>
          <span className="text-[#66635F] font-light">Quick View</span>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close quick view"
          className="group flex items-center space-x-1.5 min-h-[44px] min-w-[44px] justify-end text-xs uppercase tracking-[0.15em] font-medium text-[#171717] hover:opacity-60 transition-opacity cursor-pointer"
        >
          <span>Close</span>
          <X className="w-4 h-4 stroke-[1.5]" />
        </button>
      </div>

      {/* Main Editorial Body */}
      <div className="flex-grow max-w-[1440px] w-full mx-auto px-5 sm:px-8 lg:px-16 py-6 sm:py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-14 items-start">
          {/* Left Column: Large Image + Text Photo Tabs */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            {/* Click to Zoom Image Container */}
            <div
              onClick={() => setIsZoomed(!isZoomed)}
              className="relative w-full aspect-[4/5] sm:aspect-[4/5] overflow-hidden bg-[#ECEBE7] cursor-zoom-in group select-none"
              title="Click to zoom photograph"
            >
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 58vw"
                className={`object-cover object-top transition-all duration-500 ease-out ${
                  isZoomed ? "scale-125 object-center" : "scale-100 group-hover:scale-[1.015]"
                }`}
              />
              <div className="hidden sm:block absolute top-3 right-3 p-1.5 bg-black/50 text-white backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Maximize2 className="w-3.5 h-3.5 stroke-[1.5]" />
              </div>
            </div>

            {/* Angle Tabs with min 44px tap target (01 Front, 02 Detail, 03 Alternate) */}
            {item.gallery.length > 1 && (
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 text-xs uppercase tracking-[0.15em]">
                {item.gallery.map((img, idx) => {
                  const isActive = activeImageIndex === idx;
                  return (
                    <button
                      key={img.label}
                      type="button"
                      onClick={() => {
                        setActiveImageIndex(idx);
                        setIsZoomed(false);
                      }}
                      className={`min-h-[44px] inline-flex items-center transition-colors duration-250 cursor-pointer ${
                        isActive
                          ? "text-[#171717] font-medium border-b-2 border-[#171717]"
                          : "text-[#66635F] hover:text-[#171717]"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")} {img.label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Column: Style Narrative & Accordions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 sm:space-y-8 lg:pl-2">
            <div className="space-y-5 sm:space-y-6">
              {/* Header Label & Title */}
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#66635F] block mb-1.5 sm:mb-2">
                  Collection {item.number}
                </span>
                <h2
                  style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
                  className="font-light text-[#171717] tracking-tight leading-tight"
                >
                  {item.title}
                </h2>
              </div>

              {/* Short Verified Description */}
              <p className="text-sm sm:text-base text-[#66635F] font-light leading-relaxed">
                {item.description}
              </p>

              {/* Subtle Accordion Sections */}
              <div className="border-t border-[#E4E2DD] divide-y divide-[#E4E2DD] text-sm">
                {/* 1. The Piece */}
                <div>
                  <button
                    type="button"
                    onClick={() => toggleAccordion("piece")}
                    className="w-full min-h-[48px] py-3.5 flex items-center justify-between text-left font-normal text-[#171717] hover:opacity-75 transition-opacity cursor-pointer"
                  >
                    <span>The Piece</span>
                    {openSection === "piece" ? (
                      <Minus className="w-3.5 h-3.5 stroke-[1.5] text-[#66635F]" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 stroke-[1.5] text-[#66635F]" />
                    )}
                  </button>
                  {openSection === "piece" && (
                    <div className="pb-4 space-y-2 text-xs text-[#66635F] font-light leading-relaxed animate-in fade-in duration-200">
                      {item.silhouettes && (
                        <p>
                          <strong className="font-medium text-[#171717]">Silhouettes:</strong>{" "}
                          {item.silhouettes}
                        </p>
                      )}
                      {item.fabrics && (
                        <p>
                          <strong className="font-medium text-[#171717]">Fabrics:</strong>{" "}
                          {item.fabrics}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* 2. Details */}
                {item.craftsmanshipNote && (
                  <div>
                    <button
                      type="button"
                      onClick={() => toggleAccordion("details")}
                      className="w-full min-h-[48px] py-3.5 flex items-center justify-between text-left font-normal text-[#171717] hover:opacity-75 transition-opacity cursor-pointer"
                    >
                      <span>Details & Craft</span>
                      {openSection === "details" ? (
                        <Minus className="w-3.5 h-3.5 stroke-[1.5] text-[#66635F]" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 stroke-[1.5] text-[#66635F]" />
                      )}
                    </button>
                    {openSection === "details" && (
                      <div className="pb-4 text-xs text-[#66635F] font-light leading-relaxed animate-in fade-in duration-200">
                        <p>{item.craftsmanshipNote}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* 3. Customisation */}
                {item.customisationNote && (
                  <div>
                    <button
                      type="button"
                      onClick={() => toggleAccordion("customisation")}
                      className="w-full min-h-[48px] py-3.5 flex items-center justify-between text-left font-normal text-[#171717] hover:opacity-75 transition-opacity cursor-pointer"
                    >
                      <span>Customisation & Supply</span>
                      {openSection === "customisation" ? (
                        <Minus className="w-3.5 h-3.5 stroke-[1.5] text-[#66635F]" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 stroke-[1.5] text-[#66635F]" />
                      )}
                    </button>
                    {openSection === "customisation" && (
                      <div className="pb-4 text-xs text-[#66635F] font-light leading-relaxed animate-in fade-in duration-200">
                        <p>{item.customisationNote}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Wholesale Enquiry Action: Full width, min 48px height */}
            <div className="pt-5 sm:pt-6 border-t border-[#E4E2DD] space-y-3">
              <a
                href={getWhatsAppUrl(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center space-x-2 w-full min-h-[48px] py-3.5 text-center bg-[#171717] text-[#FAFAF8] text-xs uppercase tracking-[0.15em] font-medium rounded-[2px] hover:bg-[#262626] transition-colors duration-250 cursor-pointer"
              >
                <span>Enquire About This Style</span>
                <span className="inline-block transition-transform duration-250 ease-out group-hover:translate-x-1">
                  →
                </span>
              </a>

              <div className="flex items-center justify-between text-xs text-[#66635F] pt-1">
                <span>Wholesale & Trade Orders</span>
                <Link
                  href={`/collections/${item.slug}`}
                  onClick={onClose}
                  className="hover:text-[#171717] underline underline-offset-4 transition-colors py-1"
                >
                  View full collection →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
