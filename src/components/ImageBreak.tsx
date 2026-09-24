import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function ImageBreak() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 py-6 sm:py-8 md:py-12">
      <ScrollReveal duration={800}>
        <div className="relative w-full aspect-[4/5] sm:aspect-[16/10] md:aspect-[21/9] md:max-h-[560px] overflow-hidden bg-[#ECEBE7]">
          <Image
            src="/images/hero/quote-break.jpg"
            alt="Aksharam editorial campaign photography"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1440px) 100vw, 1440px"
            className="object-cover object-top sm:object-[center_25%] md:object-[center_35%] transition-transform duration-700 ease-out hover:scale-[1.01]"
          />
        </div>
      </ScrollReveal>
    </section>
  );
}
