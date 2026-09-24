import { siteConfig } from "@/data/siteConfig";
import ScrollReveal from "@/components/ScrollReveal";

export default function BrandStory() {
  return (
    <section className="py-14 sm:py-16 md:py-20 px-6 sm:px-10 lg:px-16 bg-[#FAFAF8]">
      <ScrollReveal className="max-w-[760px] mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-[38px] font-light text-[#171717] tracking-tight leading-[1.25] mb-4 md:mb-5">
          {siteConfig.statementHeadline}
        </h2>
        <p className="text-base sm:text-lg text-[#66635F] font-light leading-relaxed max-w-[640px] mx-auto">
          {siteConfig.statementBody}
        </p>
      </ScrollReveal>
    </section>
  );
}
