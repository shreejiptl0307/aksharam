import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function BrandStory() {
  return (
    <section id="story" className="py-24 md:py-36 bg-[#F7F3EC] text-[#181715] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Small Section Label */}
            <div className="flex items-center space-x-3 mb-6">
              <span className="w-8 h-[1px] bg-[#702C36]" />
              <span className="text-[11px] tracking-[0.3em] uppercase font-sans text-[#702C36] font-semibold">
                Our Story
              </span>
            </div>

            {/* Large Statement */}
            <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.12] tracking-tight mb-8 text-[#181715]">
              Where Indian craftsmanship meets{" "}
              <span className="italic text-[#702C36]">contemporary expression.</span>
            </h2>

            {/* Supporting Copy */}
            <p className="text-[#57524B] text-base md:text-lg leading-relaxed font-light mb-8">
              Aksharam Ethnic LLP creates distinctive ethnic fashion for retailers
              and boutiques looking for collections that balance tradition,
              craftsmanship and modern design.
            </p>

            <p className="text-[#57524B] text-sm md:text-base leading-relaxed font-light mb-10">
              Based in the historic textile hub of Surat, Gujarat, our design house
              and manufacturing atelier merges centuries-old hand-embroidery
              disciplines with contemporary silhouettes, creating fashion-forward
              garments engineered for boutique retail velocity and effortless wear.
            </p>

            {/* Link to full About page */}
            <div>
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] font-medium text-[#181715] hover:text-[#702C36] group transition-colors"
              >
                <span>Read the Full Brand Narrative</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-[#702C36]" />
              </Link>
            </div>
          </div>

          {/* Right Asymmetric Editorial Images */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              {/* Primary Tall Portrait Image */}
              <div className="relative w-4/5 aspect-[4/5] overflow-hidden shadow-xl border border-[#181715]/10">
                <Image
                  src="/images/about/about-brand.svg"
                  alt="Aksharam Atelier Craftsmanship"
                  fill
                  sizes="(max-width: 1024px) 80vw, 40vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Secondary Overlapping Detail Image */}
              <div className="absolute -bottom-8 -right-2 sm:-right-4 w-3/5 aspect-[4/3] overflow-hidden shadow-2xl border-4 border-[#F7F3EC]">
                <Image
                  src="/images/about/about-detail.svg"
                  alt="Aksharam Hand Embroidery Detail"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Subtle Decorative Tag */}
              <div className="absolute top-6 right-6 hidden sm:block bg-[#181715] text-[#F7F3EC] px-3 py-1.5 text-[9px] uppercase tracking-[0.25em] font-medium">
                SURAT ATELIER
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
