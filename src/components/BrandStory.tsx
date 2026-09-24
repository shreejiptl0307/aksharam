import { siteConfig } from "@/data/siteConfig";
import ScrollReveal from "@/components/ScrollReveal";

export default function BrandStory() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-8 lg:px-16 bg-[#FAFAF8]">
      <ScrollReveal className="max-w-[760px] mx-auto text-center">
        <h2
          style={{ fontSize: "clamp(1.375rem, 3.5vw, 2.375rem)" }}
          className="font-light text-[#171717] tracking-tight leading-[1.28] sm:leading-[1.25] mb-3 sm:mb-4 md:mb-5"
        >
          {siteConfig.statementHeadline}
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-[#66635F] font-light leading-relaxed max-w-[640px] mx-auto">
          {siteConfig.statementBody}
        </p>
      </ScrollReveal>
    </section>
  );
}
