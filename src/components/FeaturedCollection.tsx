import Image from "next/image";
import Link from "next/link";

export default function FeaturedCollection() {
  return (
    <section className="py-20 md:py-32 px-6 sm:px-10 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Image on Left */}
        <div className="lg:col-span-7">
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#ECEBE7]">
            <Image
              src="/images/collections/featured-shisha.svg"
              alt="The Shisha Collection"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Text on Right */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-5 lg:pl-4">
          <span className="text-xs uppercase tracking-[0.2em] text-[#66635F]">
            Featured
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#171717] tracking-tight leading-tight">
            The Shisha Collection
          </h2>
          <p className="text-base text-[#66635F] font-light leading-relaxed max-w-md">
            Statement pieces defined by detailed craftsmanship and contemporary silhouettes.
          </p>
          <div className="pt-2">
            <Link
              href="/collections/shisha-lehengas"
              className="inline-block text-xs uppercase tracking-[0.15em] font-medium text-[#171717] hover:opacity-70 transition-opacity"
            >
              Explore →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
