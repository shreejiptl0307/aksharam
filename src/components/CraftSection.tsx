import { craftPoints } from "@/data/collections";

export default function CraftSection() {
  return (
    <section className="py-24 md:py-36 px-6 sm:px-10 max-w-[1400px] mx-auto border-t border-[#E4E2DD]">
      {/* Header */}
      <div className="max-w-2xl mb-16 md:mb-20">
        <p className="text-xs uppercase tracking-[0.2em] text-[#66635F] mb-3">
          Our Approach
        </p>
        <h2 className="text-3xl sm:text-4xl font-light text-[#171717] tracking-tight">
          Attention to the details that matter.
        </h2>
      </div>

      {/* 3 Clean Text Columns with Thin Separators (No cards, no icons) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 divide-y md:divide-y-0 md:divide-x divide-[#E4E2DD]">
        {craftPoints.map((point, index) => (
          <div
            key={point.num}
            className={`pt-8 md:pt-0 ${index !== 0 ? "md:pl-10 lg:pl-14" : ""}`}
          >
            <span className="text-xs uppercase tracking-widest text-[#66635F] block mb-4">
              {point.num}
            </span>
            <h3 className="text-xl font-normal text-[#171717] mb-3 tracking-tight">
              {point.title}
            </h3>
            <p className="text-sm text-[#66635F] font-light leading-relaxed">
              {point.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
