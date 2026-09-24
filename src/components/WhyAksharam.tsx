import { Sparkles, ShieldCheck, Compass, Handshake } from "lucide-react";
import { whyAksharamPoints } from "@/data/collections";

const iconMap = {
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck,
  Compass: Compass,
  Handshake: Handshake,
};

export default function WhyAksharam() {
  return (
    <section className="py-24 md:py-36 bg-[#EFE7DA] text-[#181715]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-8 h-[1px] bg-[#702C36]" />
            <span className="text-[11px] tracking-[0.3em] uppercase font-sans text-[#702C36] font-semibold">
              Why Aksharam
            </span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.1] tracking-tight text-[#181715]">
            Designed for More Than the Moment.
          </h2>
          <p className="mt-4 text-base text-[#57524B] font-light">
            Our pillars ensure long-term retail value, reliable trade partnerships,
            and dependable craftsmanship in every garment delivered.
          </p>
        </div>

        {/* 4 Elegant Columns (No generic SaaS cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#181715]/10">
          {whyAksharamPoints.map((item, idx) => {
            const IconComponent =
              iconMap[item.icon as keyof typeof iconMap] || Sparkles;

            return (
              <div
                key={item.key}
                className={`pt-8 lg:pt-0 ${idx !== 0 ? "lg:pl-8" : ""}`}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] uppercase font-sans tracking-[0.3em] text-[#B79A67] font-semibold">
                    0{idx + 1}
                  </span>
                  <IconComponent className="w-5 h-5 text-[#702C36] stroke-[1.5]" />
                </div>

                <h3 className="font-editorial text-2xl md:text-3xl font-normal text-[#181715] tracking-wide mb-1">
                  {item.title}
                </h3>
                <p className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#702C36] mb-4">
                  {item.subtitle}
                </p>

                <p className="text-sm text-[#57524B] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
