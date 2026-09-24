"use client";

import Image from "next/image";
import { useState } from "react";

export interface FashionImageProps {
  src: string;
  mobileSrc?: string;
  alt: string;
  hoverSrc?: string;
  hoverAlt?: string;
  isTapped?: boolean;
  priority?: boolean;
  sizes?: string;
  // Aspect ratio classes, e.g. "aspect-[4/5]", "aspect-[16/9]"
  mobileAspect?: string;
  desktopAspect?: string;
  // Object position classes, e.g. "object-top", "object-[center_15%]"
  mobilePosition?: string;
  desktopPosition?: string;
  // Container & Image custom classes
  containerClassName?: string;
  className?: string;
  // Natural height mode
  naturalRatio?: boolean;
}

export default function FashionImage({
  src,
  mobileSrc,
  alt,
  hoverSrc,
  hoverAlt,
  isTapped = false,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  mobileAspect = "aspect-[4/5]",
  desktopAspect = "md:aspect-[4/5]",
  mobilePosition = "object-top",
  desktopPosition = "md:object-top",
  containerClassName = "",
  className = "",
  naturalRatio = false,
}: FashionImageProps) {
  const [loaded, setLoaded] = useState(false);

  if (naturalRatio) {
    return (
      <div className={`relative w-full overflow-hidden bg-[#ECEBE7] ${containerClassName}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={mobileSrc || src}
          alt={alt}
          className={`w-full h-auto block transition-all duration-500 ease-out ${
            hoverSrc
              ? isTapped
                ? "opacity-0"
                : "opacity-100 group-hover:opacity-0"
              : "opacity-100"
          } ${className}`}
          loading={priority ? "eager" : "lazy"}
        />
        {hoverSrc && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={hoverSrc}
            alt={hoverAlt || alt}
            className={`absolute inset-0 w-full h-full object-cover ${mobilePosition} ${desktopPosition} transition-all duration-500 ease-out ${
              isTapped
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            }`}
            loading="lazy"
          />
        )}
      </div>
    );
  }

  return (
    <div
      className={`relative w-full ${mobileAspect} ${desktopAspect} overflow-hidden bg-[#ECEBE7] ${containerClassName}`}
    >
      {/* Primary Image */}
      <Image
        src={mobileSrc || src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        onLoad={() => setLoaded(true)}
        className={`object-cover ${mobilePosition} ${desktopPosition} transition-all duration-500 ease-out ${
          loaded ? "scale-100" : "scale-[1.01]"
        } ${
          hoverSrc
            ? isTapped
              ? "opacity-0 scale-[1.015]"
              : "opacity-100 group-hover:opacity-0 group-hover:scale-[1.015]"
            : "opacity-100 group-hover:scale-[1.015]"
        } ${className}`}
      />

      {/* Secondary Hover / Tap Image */}
      {hoverSrc && (
        <Image
          src={hoverSrc}
          alt={hoverAlt || alt}
          fill
          sizes={sizes}
          className={`object-cover ${mobilePosition} ${desktopPosition} transition-all duration-500 ease-out ${
            isTapped
              ? "opacity-100 scale-[1.015]"
              : "opacity-0 group-hover:opacity-100 group-hover:scale-[1.015]"
          }`}
        />
      )}
    </div>
  );
}
