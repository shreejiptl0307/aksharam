import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function ImageBreak() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 py-8 sm:py-12 md:py-16">
      <ScrollReveal duration={800} className="w-full flex justify-center">
        <div className="relative w-full max-w-[760px] aspect-[4/5] overflow-hidden bg-[#ECEBE7] shadow-xs">
          <Image
            src="/images/hero/quote-break.jpg"
            alt="Aksharam editorial campaign photography"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 760px"
            className="object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.01]"
          />
        </div>
      </ScrollReveal>
    </section>
  );
}
