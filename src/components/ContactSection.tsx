import { siteConfig, getWhatsAppUrl } from "@/data/siteConfig";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-36 px-6 sm:px-10 max-w-[1400px] mx-auto border-t border-[#E4E2DD]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Col */}
        <div className="lg:col-span-5 space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[#66635F]">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-light text-[#171717] tracking-tight">
            AKSHARAM ETHNIC LLP
          </h2>
          <p className="text-sm text-[#66635F] font-light max-w-sm pt-2">
            Wholesale inquiries, seasonal catalogues, sample review and boutique appointments.
          </p>
        </div>

        {/* Right Col: Address & Plain Text Action Links */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-[#171717] font-medium mb-3">
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
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-[#171717] font-medium mb-3">
              Direct Communication
            </p>
            <div className="text-sm text-[#66635F] font-light leading-relaxed space-y-2 mb-6">
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

            {/* Plain Text Links - Avoid giant buttons */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.15em] font-medium text-[#171717] pt-2 border-t border-[#E4E2DD]">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60 transition-opacity"
              >
                WhatsApp →
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="hover:opacity-60 transition-opacity"
              >
                Call →
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:opacity-60 transition-opacity"
              >
                Email →
              </a>
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60 transition-opacity"
              >
                Directions →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
