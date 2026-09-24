"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CollectionItem } from "@/data/collections";

interface CollectionCardProps {
  item: CollectionItem;
  showDescription?: boolean;
  onQuickView?: (item: CollectionItem) => void;
}

export default function CollectionCard({
  item,
  showDescription = false,
  onQuickView,
}: CollectionCardProps) {
  const [isTapped, setIsTapped] = useState(false);

  const handleImageClick = (e: React.MouseEvent) => {
    if (onQuickView) {
      e.preventDefault();
      onQuickView(item);
    }
  };

  return (
    <div className="group block select-none">
      {/* Image Container with Soft 400-500ms Crossfade & Quick View Trigger */}
      <div
        onClick={handleImageClick}
        onTouchStart={() => setIsTapped((prev) => !prev)}
        onMouseLeave={() => setIsTapped(false)}
        className={`relative w-full ${item.mobileAspect || "aspect-[4/5]"} ${item.desktopAspect || "md:aspect-[4/5]"} overflow-hidden bg-[#ECEBE7] mb-3.5 cursor-pointer`}
        role="button"
        tabIndex={0}
        aria-label={`Quick view: ${item.title}`}
        onKeyDown={(e) => {
          if ((e.key === "Enter" || e.key === " ") && onQuickView) {
            e.preventDefault();
            onQuickView(item);
          }
        }}
      >
        {/* Primary Image */}
        <Image
          src={item.coverImage}
          alt={item.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`object-cover ${item.mobilePosition || "object-top"} ${item.desktopPosition || "md:object-top"} transition-all duration-500 ease-out ${
            item.hoverImage
              ? isTapped
                ? "opacity-0 scale-[1.015]"
                : "opacity-100 group-hover:opacity-0 group-hover:scale-[1.015]"
              : "opacity-100 group-hover:scale-[1.02]"
          }`}
        />

        {/* Secondary Hover / Tap Image */}
        {item.hoverImage && (
          <Image
            src={item.hoverImage}
            alt={item.hoverAlt || item.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={`object-cover ${item.mobilePosition || "object-top"} ${item.desktopPosition || "md:object-top"} transition-all duration-500 ease-out ${
              isTapped
                ? "opacity-100 scale-[1.015]"
                : "opacity-0 group-hover:opacity-100 group-hover:scale-[1.015]"
            }`}
          />
        )}

        {/* Subtle Quick View Tag on Hover */}
        {onQuickView && (
          <div className="hidden sm:block absolute bottom-3 left-3 text-[10px] uppercase tracking-widest px-2.5 py-1 bg-white/90 text-[#171717] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Quick View
          </div>
        )}
      </div>

      {/* Label Row with Direct Link to Collection */}
      <Link
        href={`/collections/${item.slug}`}
        className="block group/link py-1"
      >
        <div className="flex items-center justify-between mb-1 min-h-[36px]">
          <h3 className="text-sm sm:text-base font-medium text-[#171717] tracking-tight group-hover/link:opacity-80 transition-opacity">
            {item.title}
          </h3>
          <span className="inline-flex items-center text-xs text-[#66635F] group-hover/link:text-[#171717] transition-colors duration-250 py-1">
            <span>{showDescription ? "View" : "View collection"}</span>
            <span className="inline-block transition-transform duration-250 ease-out group-hover/link:translate-x-1.5 ml-1">
              →
            </span>
          </span>
        </div>

        {showDescription && item.description && (
          <p className="text-xs text-[#66635F] font-light line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        )}
      </Link>
    </div>
  );
}
