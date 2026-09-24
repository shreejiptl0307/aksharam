import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E4E2DD] bg-[#FAFAF8] text-[#171717] py-10 sm:py-12 md:py-16 px-5 sm:px-8 lg:px-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 pb-8 sm:pb-10 md:pb-12 border-b border-[#E4E2DD]">
          {/* Left Column: Official Logo + Subtitle */}
          <div className="md:col-span-4 space-y-3">
            <Link
              href="/"
              className="inline-block hover:opacity-85 transition-opacity"
              aria-label="Aksharam Ethnic LLP - Home"
            >
              <Image
                src={siteConfig.logo.src}
                alt={siteConfig.logo.alt}
                width={180}
                height={48}
                className="w-36 sm:w-40 md:w-44 h-auto object-contain"
              />
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
                    className="hover:text-[#171717] transition-colors py-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Contact & Socials */}
          <div className="md:col-span-4 text-xs text-[#66635F] font-light space-y-1.5">
            <p className="text-[#171717] font-medium uppercase tracking-wider mb-2">
              Surat, India
            </p>
            <p>
              <a href={`tel:${siteConfig.phone}`} className="hover:text-[#171717] py-0.5 inline-block">
                {siteConfig.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-[#171717] py-0.5 inline-block">
                {siteConfig.email}
              </a>
            </p>
            <p className="pt-2 flex flex-col sm:flex-row gap-2 sm:gap-4">
              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#171717] transition-colors inline-flex items-center space-x-1"
              >
                <span>Instagram {siteConfig.instagram.handle}</span>
                <span>↗</span>
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-5 sm:pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#66635F] tracking-wider space-y-2 sm:space-y-0 text-center sm:text-left">
          <p>© {currentYear} {siteConfig.companyName}</p>
          <p>Contemporary Ethnic Wear</p>
        </div>
      </div>
    </footer>
  );
}
