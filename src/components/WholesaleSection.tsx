import Link from "next/link";
import { getWhatsAppUrl } from "@/data/siteConfig";

export default function WholesaleSection() {
  return (
    <section id="wholesale" className="py-24 md:py-36 bg-[#F3F2EE] px-6 sm:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#66635F] mb-4">
            Wholesale
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#171717] tracking-tight mb-6">
            For boutiques and retailers.
          </h2>
          <p className="text-base sm:text-lg text-[#66635F] font-light leading-relaxed mb-10">
            Discover Aksharam collections for your store and speak directly with
            our team about catalogues, availability and wholesale requirements.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/wholesale"
              className="px-7 py-3.5 bg-[#171717] text-[#FAFAF8] text-xs uppercase tracking-[0.15em] font-medium rounded-[2px] hover:bg-black transition-colors"
            >
              Wholesale Enquiry
            </Link>
            <a
              href={getWhatsAppUrl(
                "Hello Aksharam, I'm interested in your wholesale collections. Please share more information about your latest catalogue and wholesale requirements."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.15em] font-medium text-[#171717] hover:opacity-70 transition-opacity"
            >
              Chat on WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
