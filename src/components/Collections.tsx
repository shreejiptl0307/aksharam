import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { collectionsData } from "@/data/collections";

export default function Collections() {
  return (
    <section id="collections" className="py-24 md:py-36 bg-[#EFE7DA] text-[#181715]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 pb-8 border-b border-[#181715]/10">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-[1px] bg-[#702C36]" />
              <span className="text-[11px] tracking-[0.3em] uppercase font-sans text-[#702C36] font-semibold">
                Curated Categories
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#181715]">
              Our Collections
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-md text-sm md:text-base text-[#57524B] font-light">
            Designed for celebrations, occasions and everyday expression. Built
            specifically for retail boutique assortments.
          </p>
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          {collectionsData.map((item, index) => {
            // Layout styling for asymmetric fashion editorial rhythm
            const isFirst = index === 0;
            const isSecond = index === 1;
            const isLast = index === 5;

            const gridClass = isFirst
              ? "md:col-span-7"
              : isSecond
              ? "md:col-span-5"
              : isLast
              ? "md:col-span-12"
              : "md:col-span-4";

            const aspectClass = isFirst
              ? "aspect-[4/5] md:aspect-[16/11]"
              : isSecond
              ? "aspect-[4/5] md:aspect-[4/5]"
              : isLast
              ? "aspect-[16/9] md:aspect-[21/9]"
              : "aspect-[3/4]";

            return (
              <div key={item.id} className={`${gridClass} group relative`}>
                <Link
                  href={`/collections/${item.slug}`}
                  className="block relative overflow-hidden bg-[#181715] cursor-pointer"
                >
                  {/* Image Container */}
                  <div className={`relative w-full ${aspectClass} overflow-hidden`}>
                    <Image
                      src={item.coverImage}
                      alt={`${item.title} - Aksharam Ethnic`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-90"
                    />

                    {/* Dark gradient overlay for typography readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-500 opacity-70 group-hover:opacity-90" />

                    {/* Category Index Badge */}
                    <div className="absolute top-5 left-5 z-10">
                      <span className="text-[10px] tracking-[0.25em] font-sans text-[#F7F3EC]/80 uppercase px-2.5 py-1 bg-black/40 backdrop-blur-xs border border-white/10">
                        {item.number}
                      </span>
                    </div>

                    {/* Overlay Content */}
                    <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-[#F7F3EC] z-10 transition-transform duration-500">
                      <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                        <span className="text-[10px] uppercase font-sans tracking-[0.3em] text-[#B79A67] block mb-1">
                          {item.category}
                        </span>
                        <h3 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-normal tracking-wide text-[#F7F3EC]">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm text-[#D8CBC4] font-light max-w-lg line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity">
                          {item.shortDescription}
                        </p>
                      </div>

                      {/* CTA Trigger */}
                      <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-xs tracking-[0.2em] uppercase font-medium text-[#B79A67] opacity-90 group-hover:text-[#F7F3EC] transition-colors">
                        <span className="inline-flex items-center space-x-1">
                          <span>View Collection</span>
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </span>
                        <span className="text-[10px] text-[#D8CBC4]/60">
                          B2B Catalog Available
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA to all collections */}
        <div className="mt-16 text-center">
          <Link
            href="/collections"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-[#181715] text-[#F7F3EC] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#702C36] transition-all duration-300 shadow-xs"
          >
            <span>Explore All 06 Collections</span>
            <ArrowUpRight className="w-4 h-4 text-[#B79A67]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
