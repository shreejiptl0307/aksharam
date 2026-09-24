import Image from "next/image";

export default function ImageBreak() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 py-12 md:py-20">
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-[#ECEBE7]">
        <Image
          src="/images/hero/quote-break.svg"
          alt="Aksharam Editorial Fashion Photography"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}
