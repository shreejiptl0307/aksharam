import Image from "next/image";

export default function EditorialBreak() {
  return (
    <section className="relative w-full h-[60vh] md:h-[75vh] min-h-[420px] flex items-center justify-center overflow-hidden bg-[#181715] text-[#F7F3EC]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/quote-break.svg"
          alt="Aksharam Haute Statement"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.6] scale-105"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      </div>

      {/* Editorial Fashion Quote */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase font-sans text-[#B79A67] block mb-6">
          THE AKSHARAM PHILOSOPHY
        </span>
        <blockquote className="font-editorial text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight text-[#F7F3EC]">
          Tradition evolves. <br />
          <span className="italic text-[#EFE7DA]">Style remains timeless.</span>
        </blockquote>
      </div>
    </section>
  );
}
