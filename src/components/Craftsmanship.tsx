import Image from "next/image";
import { craftsmanshipPillars } from "@/data/collections";

export default function Craftsmanship() {
  return (
    <section id="craftsmanship" className="py-24 md:py-36 bg-[#F7F3EC] text-[#181715] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-8 h-[1px] bg-[#702C36]" />
            <span className="text-[11px] tracking-[0.3em] uppercase font-sans text-[#702C36] font-semibold">
              The Art of Aksharam
            </span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.1] tracking-tight text-[#181715] mb-6">
            Made with intention. <br />
            <span className="italic text-[#702C36]">Finished with detail.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#57524B] font-light leading-relaxed">
            Every Aksharam collection reflects a commitment to thoughtful design,
            careful detailing and craftsmanship. We honor Indian heritage by
            refining traditional techniques into durable, modern luxury garments.
          </p>
        </div>

        {/* 3 Storytelling Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {craftsmanshipPillars.map((pillar) => (
            <div
              key={pillar.number}
              className="flex flex-col group border-t border-[#181715]/15 pt-8"
            >
              {/* Macro Photography Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden mb-8 bg-[#181715] border border-[#181715]/10">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-xs text-[#F7F3EC] text-[9px] uppercase tracking-[0.25em] px-2.5 py-1">
                  {pillar.tag}
                </div>
              </div>

              {/* Number & Details */}
              <div className="flex items-baseline space-x-3 mb-2">
                <span className="font-editorial text-xl font-normal text-[#702C36]">
                  {pillar.number}
                </span>
                <span className="h-[1px] w-6 bg-[#702C36]/40" />
                <span className="text-[11px] tracking-[0.25em] uppercase font-sans text-[#57524B]">
                  {pillar.subtitle}
                </span>
              </div>

              <h3 className="font-editorial text-2xl md:text-3xl font-normal text-[#181715] mb-3 group-hover:text-[#702C36] transition-colors">
                {pillar.title}
              </h3>

              <p className="text-sm text-[#57524B] font-light leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
