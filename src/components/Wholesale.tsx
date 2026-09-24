import Link from "next/link";
import { MessageCircle, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { wholesaleBenefits } from "@/data/collections";
import { getWhatsAppUrl } from "@/data/siteConfig";

export default function Wholesale() {
  return (
    <section id="wholesale" className="py-24 md:py-36 bg-[#181715] text-[#F7F3EC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Conversion */}
          <div className="lg:col-span-5">
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-[1px] bg-[#B79A67]" />
              <span className="text-[11px] tracking-[0.3em] uppercase font-sans text-[#B79A67] font-semibold">
                B2B & Retail Partnerships
              </span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.08] tracking-tight text-[#F7F3EC] mb-6">
              Built for Boutiques. <br />
              <span className="italic text-[#EFE7DA]">Designed for Growth.</span>
            </h2>

            <p className="text-[#D8CBC4] text-base md:text-lg font-light leading-relaxed mb-8">
              Aksharam partners with retailers, boutiques and fashion businesses
              looking for distinctive ethnic collections and dependable wholesale
              relationships.
            </p>

            <div className="p-6 bg-[#252320] border border-white/10 mb-8 space-y-3">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#B79A67] font-medium">
                Wholesale Trade Desk
              </p>
              <p className="text-xs text-[#D8CBC4] font-light">
                Direct manufacturing in Surat, Gujarat with dedicated client support,
                custom size-runs, and priority order tracking.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={getWhatsAppUrl(
                  "Hello Aksharam, I'm interested in your wholesale collections. I'd like to know more about your latest catalogue, pricing and order requirements."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-[#702C36] text-[#F7F3EC] text-xs uppercase tracking-[0.25em] font-semibold hover:bg-[#B79A67] transition-all duration-300 shadow-md group"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Start a Wholesale Conversation</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <Link
                href="/wholesale"
                className="inline-flex items-center justify-center px-6 py-4 border border-white/20 text-[#F7F3EC] text-xs uppercase tracking-[0.2em] font-medium hover:border-[#B79A67] transition-colors"
              >
                View B2B Program
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Key Benefits */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {wholesaleBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-8 bg-[#1F1E1B] border border-white/10 hover:border-[#B79A67]/40 transition-colors duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-sans tracking-[0.25em] text-[#B79A67]">
                      {benefit.tag}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-[#B79A67]/80" />
                  </div>

                  <h3 className="font-editorial text-2xl font-normal text-[#F7F3EC] tracking-wide mb-3">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-[#A39C93] font-light leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-[#B79A67]">
                  <span>Atelier Surat</span>
                  <span>B2B Direct</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
