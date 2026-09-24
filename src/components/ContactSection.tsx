import { siteConfig, getWhatsAppUrl } from "@/data/siteConfig";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 px-5 sm:px-8 lg:px-16 max-w-[1440px] mx-auto border-t border-[#E4E2DD]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14">
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-2 sm:space-y-3">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-[#66635F]">
              Contact
            </p>
            <h2
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
              className="font-light text-[#171717] tracking-tight"
            >
              AKSHARAM ETHNIC LLP
            </h2>
            <p className="text-xs sm:text-sm text-[#66635F] font-light max-w-sm pt-1 leading-relaxed">
              Wholesale inquiries, seasonal catalogues, sample review and boutique appointments.
            </p>
          </ScrollReveal>
        </div>

        {/* Right Column: Address & Plain Text Action Links */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <ScrollReveal delay={80}>
              <p className="text-xs uppercase tracking-[0.15em] text-[#171717] font-medium mb-2">
                Atelier & Office
              </p>
              <div className="text-xs sm:text-sm text-[#66635F] font-light leading-relaxed space-y-1">
                <p>{siteConfig.address.line1}</p>
                <p>{siteConfig.address.line2}</p>
                <p>{siteConfig.address.line3}</p>
                <p>
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.pincode}
                </p>
                <p>{siteConfig.address.country}</p>
              </div>
            </ScrollReveal>
          </div>

          <div>
            <ScrollReveal delay={140}>
              <p className="text-xs uppercase tracking-[0.15em] text-[#171717] font-medium mb-2">
                Direct Communication
              </p>
              <div className="text-xs sm:text-sm text-[#66635F] font-light leading-relaxed space-y-1.5 mb-4 sm:mb-5">
                <p>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="hover:text-[#171717] transition-colors py-1 inline-block"
                  >
                    {siteConfig.phone}
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-[#171717] transition-colors break-all py-1 inline-block"
                  >
                    {siteConfig.email}
                  </a>
                </p>
              </div>

              {/* Plain Text Links with 44px min tap targets */}
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-[0.15em] font-medium text-[#171717] pt-2 border-t border-[#E4E2DD]">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group min-h-[44px] inline-flex items-center space-x-1 hover:opacity-60 transition-opacity py-2"
                >
                  <span>WhatsApp</span>
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="group min-h-[44px] inline-flex items-center space-x-1 hover:opacity-60 transition-opacity py-2"
                >
                  <span>Call</span>
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group min-h-[44px] inline-flex items-center space-x-1 hover:opacity-60 transition-opacity py-2"
                >
                  <span>Email</span>
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group min-h-[44px] inline-flex items-center space-x-1 hover:opacity-60 transition-opacity py-2"
                >
                  <span>Directions</span>
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
