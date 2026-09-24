import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function FeaturedCollection() {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Left Column: 58% Image */}
        <div className="lg:col-span-7">
          <ScrollReveal duration={800}>
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] overflow-hidden bg-[#ECEBE7]">
              <Image
                src="/images/collections/featured-shisha.jpg"
                alt="The Shisha Collection lehenga featuring intricate mirrorwork and embroidery"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-top transition-transform duration-600 ease-out hover:scale-[1.02]"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: 42% Text Vertically Centered */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-4 lg:pl-4">
          <ScrollReveal delay={120}>
            <span className="text-xs uppercase tracking-[0.2em] text-[#66635F] block mb-2">
              Featured
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-light text-[#171717] tracking-tight leading-tight mb-3">
              The Shisha Collection
            </h2>
            <p className="text-base text-[#66635F] font-light leading-relaxed max-w-md mb-4">
              Statement pieces defined by detailed craftsmanship and contemporary silhouettes.
            </p>
            <div>
              <Link
                href="/collections/shisha-lehengas"
                className="group inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.15em] font-medium text-[#171717] hover:opacity-80 transition-opacity"
              >
                <span>Explore</span>
                <span className="inline-block transition-transform duration-250 ease-out group-hover:translate-x-1.5">
                  →
                </span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
