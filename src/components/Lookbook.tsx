"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn, ArrowUpRight } from "lucide-react";
import { lookbookItems } from "@/data/collections";
import { getWhatsAppUrl } from "@/data/siteConfig";

export default function Lookbook() {
  const [activeImage, setActiveImage] = useState<null | typeof lookbookItems[0]>(null);

  return (
    <section id="lookbook" className="py-24 md:py-36 bg-[#F7F3EC] text-[#181715]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#181715]/10">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-[1px] bg-[#702C36]" />
              <span className="text-[11px] tracking-[0.3em] uppercase font-sans text-[#702C36] font-semibold">
                Visual Editorial
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#181715]">
              Aksharam Lookbook
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-md text-sm text-[#57524B] font-light">
            A curated visual chronicle of silhouettes, craft textures, and drape
            compositions from our latest atelier releases.
          </p>
        </div>

        {/* Asymmetric Editorial Magazine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {lookbookItems.map((item, index) => {
            // Asymmetric rhythm
            let gridCol = "md:col-span-4";
            if (index === 0) gridCol = "md:col-span-7";
            if (index === 1) gridCol = "md:col-span-5";
            if (index === 2) gridCol = "md:col-span-12";
            if (index === 5) gridCol = "md:col-span-8";
            if (index === 6) gridCol = "md:col-span-4";

            return (
              <div
                key={item.id}
                className={`${gridCol} group cursor-pointer`}
                onClick={() => setActiveImage(item)}
              >
                <div className={`relative w-full ${item.ratio} overflow-hidden bg-[#181715] border border-[#181715]/10`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-90"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-[#F7F3EC]">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#B79A67]">
                          Look 0{item.id}
                        </span>
                        <h4 className="font-editorial text-xl font-normal text-[#F7F3EC]">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#D8CBC4] font-light mt-1">
                          {item.caption}
                        </p>
                      </div>
                      <div className="p-2 bg-white/20 backdrop-blur-xs text-[#F7F3EC] rounded-full">
                        <ZoomIn className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visible Caption under image */}
                <div className="mt-3 flex items-center justify-between text-xs text-[#57524B]">
                  <span className="font-editorial text-base text-[#181715] tracking-wide">
                    {item.title}
                  </span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#702C36]">
                    Inspect →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          onClick={() => setActiveImage(null)}
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 text-[#F7F3EC] p-3 hover:text-[#B79A67] transition-colors z-50"
            aria-label="Close Preview"
          >
            <X className="w-8 h-8" />
          </button>

          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row bg-[#181715] text-[#F7F3EC] border border-white/15 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full md:w-3/5 h-[50vh] md:h-[75vh]">
              <Image
                src={activeImage.image}
                alt={activeImage.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>

            <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#B79A67]">
                  Aksharam Atelier Lookbook
                </span>
                <h3 className="font-editorial text-2xl md:text-3xl font-normal text-[#F7F3EC] mt-2 mb-3">
                  {activeImage.title}
                </h3>
                <p className="text-xs uppercase tracking-[0.2em] text-[#D8CBC4] mb-4">
                  {activeImage.subtitle}
                </p>
                <p className="text-sm text-[#A39C93] font-light leading-relaxed mb-6">
                  {activeImage.caption} Available for boutique wholesale and bespoke
                  trade orders with custom sizing and color options.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-3">
                <a
                  href={getWhatsAppUrl(
                    `Hello Aksharam, I'm interested in ordering / inquiring about ${activeImage.title} from your Lookbook.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 py-3.5 bg-[#702C36] text-[#F7F3EC] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#B79A67] transition-colors"
                >
                  <span>Enquire on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setActiveImage(null)}
                  className="w-full py-2.5 border border-white/20 text-[#D8CBC4] text-xs uppercase tracking-[0.15em] hover:text-white hover:border-white transition-colors"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
