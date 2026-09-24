import Image from "next/image";
import Link from "next/link";
import { collectionsData } from "@/data/collections";

export default function Collections() {
  return (
    <section id="collections" className="py-20 md:py-32 px-6 sm:px-10 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="flex items-baseline justify-between mb-10 md:mb-14 border-b border-[#E4E2DD] pb-4">
        <h2 className="text-2xl sm:text-3xl font-light text-[#171717] tracking-tight">
          Collections
        </h2>
        <Link
          href="/collections"
          className="text-xs uppercase tracking-[0.15em] text-[#66635F] hover:text-[#171717] transition-colors"
        >
          View all →
        </Link>
      </div>

      {/* Clean Photography Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
        {collectionsData.map((item) => (
          <Link
            key={item.id}
            href={`/collections/${item.slug}`}
            className="group block"
          >
            {/* Image Container (0px radius, no cards, no borders) */}
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#ECEBE7] mb-4">
              <Image
                src={item.coverImage}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />
            </div>

            {/* Clean Title & Arrow */}
            <div className="flex items-center justify-between text-sm">
              <span className="font-normal text-[#171717] tracking-wide">
                {item.title}
              </span>
              <span className="text-xs text-[#66635F] tracking-wider group-hover:text-[#171717] transition-colors">
                View collection →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
