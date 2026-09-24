import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/data/siteConfig";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#181715] text-[#F7F3EC] border-t border-[#F7F3EC]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#F7F3EC]/10">
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link
                href="/"
                className="font-editorial text-3xl md:text-4xl tracking-[0.25em] text-[#F7F3EC] block mb-3 hover:text-[#B79A67] transition-colors"
              >
                AKSHARAM
              </Link>
              <p className="text-xs uppercase tracking-[0.3em] text-[#B79A67] mb-6 font-sans">
                AKSHARAM ETHNIC LLP
              </p>
              <p className="font-editorial text-xl italic text-[#D8CBC4] font-light max-w-sm mb-6">
                Inspired by Fashion. <br />
                Defined by Craft.
              </p>
              <p className="text-xs text-[#A39C93] font-light leading-relaxed max-w-md">
                B2B manufacturing and wholesale partner creating contemporary
                Indian ethnic apparel for retailers and luxury boutiques worldwide.
              </p>
            </div>

            <div className="mt-8">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#B79A67] hover:text-[#F7F3EC] transition-colors group"
              >
                <span>Direct WhatsApp Trade Line</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-[#B79A67] font-semibold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3.5 text-xs tracking-[0.15em] uppercase font-light text-[#D8CBC4]">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[#B79A67] transition-colors block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-[#B79A67] font-semibold mb-6">
              Atelier & Headquarters
            </h4>
            <div className="space-y-4 text-xs text-[#D8CBC4] font-light leading-relaxed">
              <p>
                First Floor, Plot No. D-134-135, <br />
                Laxmi Narayan Industrial Park, <br />
                Udhna Navsari Road, Near BRC Complex, <br />
                Surat, Gujarat 394210, India
              </p>

              <div className="pt-2 space-y-1">
                <p>
                  <span className="text-[#B79A67] uppercase text-[10px] tracking-widest block">
                    Direct Phone:
                  </span>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="hover:text-[#B79A67] transition-colors text-sm"
                  >
                    {siteConfig.phone}
                  </a>
                </p>
                <p>
                  <span className="text-[#B79A67] uppercase text-[10px] tracking-widest block">
                    Email:
                  </span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-[#B79A67] transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </p>
              </div>

              {/* Social Placeholders for future connection */}
              <div className="pt-4 flex items-center space-x-4 text-[10px] uppercase tracking-[0.2em] text-[#7E786E]">
                <span>B2B Portal</span>
                <span>•</span>
                <span>Surat Atelier</span>
                <span>•</span>
                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7E786E] tracking-wider">
          <p>© {currentYear} AKSHARAM ETHNIC LLP. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 text-[11px]">
            Contemporary Indian Ethnic Apparel • Surat, Gujarat
          </p>
        </div>
      </div>
    </footer>
  );
}
