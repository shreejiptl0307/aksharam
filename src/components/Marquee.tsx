import { siteConfig } from "@/data/siteConfig";

export default function Marquee() {
  const items = [
    ...siteConfig.categoriesMarquee,
    ...siteConfig.categoriesMarquee,
    ...siteConfig.categoriesMarquee,
  ];

  return (
    <div
      className="w-full bg-[#181715] text-[#F7F3EC] py-5 border-y border-[#F7F3EC]/10 overflow-hidden select-none"
      aria-hidden="true"
    >
      <div className="flex whitespace-nowrap animate-marquee">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-6 mx-4 shrink-0"
          >
            <span className="font-editorial text-xl sm:text-2xl tracking-[0.25em] text-[#EFE7DA] font-light uppercase">
              {item}
            </span>
            <span className="text-[#B79A67] text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
