"use client";

import Image from "next/image";
import { useState } from "react";

export type ImageOrientation = "portrait" | "landscape" | "natural" | "detail";

export interface FashionImageProps {
  src: string;
  mobileSrc?: string;
  alt: string;
  hoverSrc?: string;
  hoverAlt?: string;
  isTapped?: boolean;
  priority?: boolean;
  sizes?: string;
  orientation?: ImageOrientation;
  // Explicit override classes if needed
  mobileAspect?: string;
  desktopAspect?: string;
  mobilePosition?: string;
  desktopPosition?: string;
  containerClassName?: string;
  className?: string;
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
  orientation = "portrait",
  mobileAspect,
  desktopAspect,
  mobilePosition,
  desktopPosition,
  containerClassName = "",
  className = "",
}: FashionImageProps) {
  const [loaded, setLoaded] = useState(false);

  // Derive defaults from orientation
  let resolvedMobileAspect = mobileAspect || "aspect-[4/5]";
  let resolvedDesktopAspect = desktopAspect || "md:aspect-[4/5]";
  let resolvedMobilePosition = mobilePosition || "object-top";
  let resolvedDesktopPosition = desktopPosition || "md:object-top";

  if (orientation === "landscape") {
    resolvedMobileAspect = mobileAspect || "aspect-[4/5]";
    resolvedDesktopAspect = desktopAspect || "md:aspect-[16/10]";
    resolvedMobilePosition = mobilePosition || "object-top";
    resolvedDesktopPosition = desktopPosition || "md:object-[center_25%]";
  } else if (orientation === "detail") {
    resolvedMobileAspect = mobileAspect || "aspect-[4/3]";
    resolvedDesktopAspect = desktopAspect || "md:aspect-[4/3]";
    resolvedMobilePosition = mobilePosition || "object-center";
    resolvedDesktopPosition = desktopPosition || "md:object-center";
  }

  if (orientation === "natural") {
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
            className={`absolute inset-0 w-full h-full object-cover ${resolvedMobilePosition} ${resolvedDesktopPosition} transition-all duration-500 ease-out ${
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
      className={`relative w-full ${resolvedMobileAspect} ${resolvedDesktopAspect} overflow-hidden bg-[#ECEBE7] ${containerClassName}`}
    >
      {/* Primary Image */}
      <Image
        src={mobileSrc || src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        onLoad={() => setLoaded(true)}
        className={`object-cover ${resolvedMobilePosition} ${resolvedDesktopPosition} transition-all duration-500 ease-out ${
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
          className={`object-cover ${resolvedMobilePosition} ${resolvedDesktopPosition} transition-all duration-500 ease-out ${
            isTapped
              ? "opacity-100 scale-[1.015]"
              : "opacity-0 group-hover:opacity-100 group-hover:scale-[1.015]"
          }`}
        />
      )}
    </div>
  );
}
