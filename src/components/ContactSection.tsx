import { siteConfig, getWhatsAppUrl } from "@/data/siteConfig";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 max-w-[1440px] mx-auto border-t border-[#E4E2DD]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-3">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-[#66635F]">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-light text-[#171717] tracking-tight">
              AKSHARAM ETHNIC LLP
            </h2>
            <p className="text-sm text-[#66635F] font-light max-w-sm pt-1 leading-relaxed">
              Wholesale inquiries, seasonal catalogues, sample review and boutique appointments.
            </p>
          </ScrollReveal>
        </div>

        {/* Right Column: Address & Plain Text Action Links */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <ScrollReveal delay={80}>
              <p className="text-xs uppercase tracking-[0.15em] text-[#171717] font-medium mb-2.5">
                Atelier & Office
              </p>
              <div className="text-sm text-[#66635F] font-light leading-relaxed space-y-1">
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
              <p className="text-xs uppercase tracking-[0.15em] text-[#171717] font-medium mb-2.5">
                Direct Communication
              </p>
              <div className="text-sm text-[#66635F] font-light leading-relaxed space-y-1.5 mb-5">
                <p>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="hover:text-[#171717] transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-[#171717] transition-colors break-all"
                  >
                    {siteConfig.email}
                  </a>
                </p>
              </div>

              {/* Plain Text Links */}
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-[0.15em] font-medium text-[#171717] pt-2 border-t border-[#E4E2DD]">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center space-x-1 hover:opacity-60 transition-opacity"
                >
                  <span>WhatsApp</span>
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="group inline-flex items-center space-x-1 hover:opacity-60 transition-opacity"
                >
                  <span>Call</span>
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group inline-flex items-center space-x-1 hover:opacity-60 transition-opacity"
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
                  className="group inline-flex items-center space-x-1 hover:opacity-60 transition-opacity"
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
