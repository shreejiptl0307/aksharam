import { siteConfig } from "@/data/siteConfig";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  const waUrl = `https://api.whatsapp.com/send?phone=${siteConfig.whatsapp.number}&text=${encodeURIComponent(
    "Hello Aksharam Textiles, I want to inquire about wholesale orders for my boutique."
  )}`;

  return (
    <section id="contact" className="py-16 sm:py-20 px-5 sm:px-8 lg:px-16 max-w-[1440px] mx-auto border-t border-[#EAE5DC] bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14">
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-3">
          <p className="text-xs uppercase tracking-widest text-[#7D1D2B] font-semibold">
            Manufacturer Information
          </p>
          <h2 className="font-serif text-3xl font-medium text-[#1C1917]">
            AKSHARAM TEXTILES
          </h2>
          <p className="text-xs sm:text-sm text-[#78716C] font-light max-w-sm leading-relaxed">
            Wholesale inquiries, seasonal bridal catalogues, piece counts, and boutique consignments.
          </p>
        </div>

        {/* Right Column: Address & Direct Communication */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <p className="text-xs uppercase tracking-wider text-[#1C1917] font-semibold mb-2">
              Mill Unit & Facility
            </p>
            <div className="text-xs sm:text-sm text-[#57534E] font-light leading-relaxed space-y-1">
              <p>{siteConfig.address.facility}</p>
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
            <p className="text-xs uppercase tracking-wider text-[#1C1917] font-semibold mb-2">
              Direct Communication Desk
            </p>
            <div className="text-xs sm:text-sm text-[#57534E] font-light leading-relaxed space-y-2 mb-4">
              <p className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono font-bold text-[#1C1917] hover:text-[#7D1D2B]"
                >
                  WhatsApp: +91 9998283811
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#78716C]" />
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="hover:text-[#1C1917]"
                >
                  Phone: {siteConfig.phone}
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#78716C]" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-[#1C1917]"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>

            <div className="pt-2 border-t border-[#EAE5DC] flex flex-wrap gap-3 text-xs uppercase tracking-wider font-semibold">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7D1D2B] hover:underline flex items-center space-x-1"
              >
                <span>WhatsApp Desk</span>
                <span>→</span>
              </a>
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#78716C] hover:text-[#1C1917] flex items-center space-x-1"
              >
                <span>Surat Location</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
