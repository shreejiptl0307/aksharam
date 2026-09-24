import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E4E2DD] bg-[#FAFAF8] text-[#171717] py-16 px-6 sm:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-[#E4E2DD]">
          {/* Left */}
          <div className="md:col-span-4 space-y-2">
            <Link
              href="/"
              className="text-base font-medium tracking-[0.2em] uppercase block hover:opacity-75 transition-opacity"
            >
              AKSHARAM
            </Link>
            <p className="text-xs text-[#66635F] font-light">
              Inspired by Fashion.
            </p>
          </div>

          {/* Middle Navigation */}
          <div className="md:col-span-4">
            <ul className="space-y-2.5 text-xs uppercase tracking-[0.12em] text-[#66635F]">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[#171717] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Contact */}
          <div className="md:col-span-4 text-xs text-[#66635F] font-light space-y-1.5">
            <p className="text-[#171717] font-medium uppercase tracking-wider mb-2">
              Surat, India
            </p>
            <p>
              <a href={`tel:${siteConfig.phone}`} className="hover:text-[#171717]">
                {siteConfig.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-[#171717]">
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#66635F] tracking-wider">
          <p>© {currentYear} {siteConfig.companyName}</p>
          <p className="mt-2 sm:mt-0">Contemporary Ethnic Wear</p>
        </div>
      </div>
    </footer>
  );
}
