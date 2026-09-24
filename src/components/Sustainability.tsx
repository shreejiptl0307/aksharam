import Image from "next/image";

export default function Sustainability() {
  return (
    <section className="py-24 md:py-36 bg-[#F7F3EC] text-[#181715] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Editorial Image */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden border border-[#181715]/10 shadow-lg">
              <Image
                src="/images/about/sustainability.svg"
                alt="Considered Fashion - Aksharam Textile Sourcing"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden sm:block bg-[#181715] text-[#F7F3EC] px-4 py-2 text-[10px] uppercase tracking-[0.25em]">
              RESPONSIBLE SOURCING
            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2">
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-[1px] bg-[#702C36]" />
              <span className="text-[11px] tracking-[0.3em] uppercase font-sans text-[#702C36] font-semibold">
                Ethos & Integrity
              </span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.1] tracking-tight text-[#181715] mb-6">
              Considered Fashion.
            </h2>

            <p className="text-[#57524B] text-base md:text-lg font-light leading-relaxed mb-6">
              At Aksharam, we approach ethnic apparel manufacturing with intention,
              embracing sustainable and eco-conscious processes wherever possible.
            </p>

            <div className="space-y-4 text-sm text-[#57524B] font-light leading-relaxed">
              <p>
                We value responsible material sourcing, mindful fabric cutting to
                minimize textile waste, and ethical artisanal craftsmanship in our
                Surat manufacturing facility.
              </p>
              <p>
                By engineering timeless, durable garments rather than disposable
                trends, we empower retailers to offer collections that endure
                through multiple celebratory seasons.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
