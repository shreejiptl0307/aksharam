import Image from "next/image";

export type ImageRatio = "portrait" | "portrait-tall" | "landscape" | "landscape-wide" | "square" | "detail";

interface ImageFrameProps {
  src: string;
  alt: string;
  ratio?: ImageRatio;
  priority?: boolean;
  sizes?: string;
  objectPosition?: string;
  className?: string;
  imageClassName?: string;
}

const ratioClasses: Record<ImageRatio, string> = {
  portrait: "aspect-[4/5]",
  "portrait-tall": "aspect-[3/4]",
  landscape: "aspect-[3/2]",
  "landscape-wide": "aspect-[16/9] sm:aspect-[16/8] lg:aspect-[16/7]",
  square: "aspect-[1/1]",
  detail: "aspect-[4/3]",
};

export default function ImageFrame({
  src,
  alt,
  ratio = "portrait",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  objectPosition = "object-top",
  className = "",
  imageClassName = "",
}: ImageFrameProps) {
  const aspectClass = ratioClasses[ratio] || "aspect-[4/5]";

  return (
    <div
      className={`relative w-full ${aspectClass} overflow-hidden bg-[#ECEBE7] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover ${objectPosition} transition-transform duration-500 ease-out hover:scale-[1.02] ${imageClassName}`}
      />
    </div>
  );
}
