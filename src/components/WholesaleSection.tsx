import Image from "next/image";
import Link from "next/link";
import { getWhatsAppUrl } from "@/data/siteConfig";
import ScrollReveal from "@/components/ScrollReveal";

export default function WholesaleSection() {
  return (
    <section id="wholesale" className="py-12 sm:py-16 md:py-20 bg-[#F3F2EE] px-5 sm:px-8 lg:px-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-14 items-center">
          {/* Left Column: Wholesale Content */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            <ScrollReveal>
              <p className="text-xs uppercase tracking-[0.2em] text-[#66635F]">
                Wholesale
              </p>
              <h2
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
                className="font-light text-[#171717] tracking-tight leading-tight mt-1 mb-2 sm:mb-3"
              >
                For boutiques and retailers.
              </h2>
              <p className="text-sm sm:text-base text-[#66635F] font-light leading-relaxed max-w-lg mb-5 sm:mb-6">
                Discover Aksharam collections for your store and speak directly with
                our team about seasonal catalogues, supply availability and wholesale requirements.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Link
                  href="/wholesale"
                  className="group inline-flex items-center justify-center space-x-1.5 min-h-[44px] px-6 py-3 bg-[#171717] text-[#FAFAF8] text-xs uppercase tracking-[0.15em] font-medium rounded-[2px] hover:bg-[#262626] transition-colors duration-250 text-center"
                >
                  <span>Wholesale Enquiry</span>
                  <span className="inline-block transition-transform duration-250 ease-out group-hover:translate-x-1">
                    →
                  </span>
                </Link>
                <a
                  href={getWhatsAppUrl(
                    "Hello Aksharam, I'm interested in your wholesale collections. Please share more information about your latest catalogue and wholesale requirements."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center space-x-1 min-h-[44px] px-4 py-3 text-xs uppercase tracking-[0.15em] font-medium text-[#171717] hover:opacity-75 transition-opacity text-center"
                >
                  <span>Chat on WhatsApp</span>
                  <span className="inline-block transition-transform duration-250 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Subtle Fashion / Product Image */}
          <div className="lg:col-span-6">
            <ScrollReveal delay={100} duration={800}>
              <div className="relative w-full aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/3] overflow-hidden bg-[#ECEBE7]">
                <Image
                  src="/images/collections/collection-contemporary.jpg"
                  alt="Aksharam contemporary ethnic wear wholesale ensemble"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top sm:object-top transition-transform duration-600 ease-out hover:scale-[1.02]"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
