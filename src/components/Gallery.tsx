import Image from "next/image";
import { galleryItems } from "@/data/collections";

export default function Gallery() {
  return (
    <section className="py-20 md:py-28 bg-[#EFE7DA] text-[#181715]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-3 mb-3">
            <span className="w-6 h-[1px] bg-[#702C36]" />
            <span className="text-[11px] tracking-[0.3em] uppercase font-sans text-[#702C36] font-semibold">
              Studio & Atelier
            </span>
            <span className="w-6 h-[1px] bg-[#702C36]" />
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-[#181715]">
            Inside Aksharam
          </h2>
          <p className="text-xs sm:text-sm text-[#57524B] font-light mt-3">
            A glimpse into everyday life at our Surat atelier, design sketches,
            textile experiments, and finished campaign moments.
          </p>
        </div>

        {/* 6 Square Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden bg-[#181715] border border-[#181715]/10"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-95 group-hover:brightness-90"
              />

              {/* Hover overlay with minimal label */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-end text-[#F7F3EC]">
                <span className="text-[9px] uppercase font-sans tracking-[0.2em] text-[#B79A67]">
                  {item.category}
                </span>
                <p className="text-xs font-editorial font-light text-white leading-tight">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
