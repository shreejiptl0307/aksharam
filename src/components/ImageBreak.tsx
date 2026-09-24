import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function ImageBreak() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-8 md:py-12">
      <ScrollReveal duration={800}>
        <div className="relative w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[580px] overflow-hidden bg-[#ECEBE7]">
          <Image
            src="/images/hero/quote-break.jpg"
            alt="Aksharam editorial campaign photography"
            fill
            sizes="(max-width: 1440px) 100vw, 1440px"
            className="object-cover object-[center_35%] transition-transform duration-700 ease-out hover:scale-[1.01]"
          />
        </div>
      </ScrollReveal>
    </section>
  );
}
