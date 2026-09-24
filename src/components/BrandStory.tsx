import { siteConfig } from "@/data/siteConfig";

export default function BrandStory() {
  return (
    <section className="py-24 md:py-36 px-6 sm:px-10 bg-[#FAFAF8]">
      <div className="max-w-[720px] mx-auto text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#171717] tracking-tight leading-[1.25]">
          {siteConfig.statementHeadline}
        </h2>
        <p className="text-base sm:text-lg text-[#66635F] font-light leading-relaxed">
          {siteConfig.statementBody}
        </p>
      </div>
    </section>
  );
}
