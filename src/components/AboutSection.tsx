import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-24 md:py-36 px-6 sm:px-10 max-w-[1400px] mx-auto border-t border-[#E4E2DD]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        {/* Left Heading */}
        <div className="lg:col-span-4">
          <h2 className="text-2xl sm:text-3xl font-light text-[#171717] tracking-tight">
            About Aksharam
          </h2>
        </div>

        {/* Right Paragraphs & Link */}
        <div className="lg:col-span-8 space-y-6 max-w-2xl">
          <p className="text-base sm:text-lg text-[#171717] font-light leading-relaxed">
            Aksharam Ethnic LLP creates contemporary ethnic fashion for retailers,
            boutiques and fashion businesses.
          </p>
          <p className="text-base text-[#66635F] font-light leading-relaxed">
            Our collections span lehengas, sarees, dresses, bridesmaid styles,
            co-ords and modern ethnic wear. We focus on thoughtful design,
            quality and long-term relationships with our customers.
          </p>
          <div className="pt-2">
            <Link
              href="/about"
              className="inline-block text-xs uppercase tracking-[0.15em] font-medium text-[#171717] hover:opacity-70 transition-opacity"
            >
              Our Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
