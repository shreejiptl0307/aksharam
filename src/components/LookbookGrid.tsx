import Image from "next/image";
import { lookbookImages } from "@/data/collections";

export default function LookbookGrid() {
  return (
    <section className="py-24 md:py-36 px-6 sm:px-10 max-w-[1400px] mx-auto">
      <div className="flex items-baseline justify-between mb-10 md:mb-14 border-b border-[#E4E2DD] pb-4">
        <h2 className="text-2xl sm:text-3xl font-light text-[#171717] tracking-tight">
          Lookbook
        </h2>
      </div>

      {/* Clean Photography Grid - No text overlays, pure photography */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {lookbookImages.map((img) => (
          <div
            key={img.id}
            className="relative w-full aspect-[4/5] overflow-hidden bg-[#ECEBE7]"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
