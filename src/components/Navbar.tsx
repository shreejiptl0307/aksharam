"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/data/siteConfig";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAFAF8]/95 backdrop-blur-xs border-b border-black/[0.08] h-16 md:h-[68px]"
            : "bg-[#FAFAF8]/80 backdrop-blur-xs h-16 md:h-[72px]"
        } flex items-center`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 flex items-center justify-between">
          {/* Official Aksharam Brand Logo */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center hover:opacity-85 transition-opacity min-h-[44px]"
            aria-label="Aksharam Ethnic LLP - Home"
          >
            <Image
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              width={160}
              height={43}
              priority
              className="h-6 sm:h-7 md:h-[32px] w-auto object-contain"
            />
          </Link>

          {/* Center Navigation (Desktop / Tablet Large) */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-10 text-[13px] tracking-[0.08em] text-[#66635F]">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`nav-link-animated transition-colors hover:text-[#171717] py-2 ${
                    isActive ? "text-[#171717] font-medium active-link" : ""
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action (Desktop) */}
          <div className="hidden md:flex items-center">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-1 text-[13px] tracking-[0.08em] font-medium text-[#171717] hover:opacity-80 transition-opacity py-2"
            >
              <span>Enquire</span>
              <span className="inline-block transition-transform duration-250 ease-out group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Mobile Toggle Button with 44px min tap target */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            className="md:hidden flex items-center justify-center min-w-[44px] min-h-[44px] text-xs uppercase tracking-[0.15em] font-medium text-[#171717] hover:opacity-70 transition-opacity"
          >
            {mobileMenuOpen ? (
              <span className="flex items-center space-x-1.5">
                <span>CLOSE</span>
                <X className="w-4 h-4 stroke-[1.5]" />
              </span>
            ) : (
              <span className="flex items-center space-x-1.5">
                <span>MENU</span>
                <Menu className="w-4 h-4 stroke-[1.5]" />
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Clean Mobile Full-Screen Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#FAFAF8] pt-20 sm:pt-24 px-6 sm:px-10 flex flex-col justify-between pb-8 md:hidden animate-in fade-in slide-in-from-top-2 duration-250">
          <nav className="flex flex-col space-y-5 pt-4 text-xl sm:text-2xl font-light text-[#171717] tracking-tight">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2 border-b border-[#E4E2DD]/60 hover:opacity-70 transition-opacity ${
                    isActive ? "font-normal text-[#171717]" : "text-[#171717]"
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#66635F]">→</span>
                </Link>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-[#E4E2DD] space-y-4">
            <div className="flex flex-col space-y-2 text-xs uppercase tracking-[0.15em] font-medium text-[#171717]">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 text-[#171717] hover:opacity-70 transition-opacity"
              >
                <span>Enquire →</span>
                <span className="text-[10px] text-[#66635F]">WhatsApp</span>
              </a>
              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-2.5 text-[#66635F] hover:text-[#171717] transition-colors"
              >
                <span>Instagram ↗</span>
                <span className="text-[10px] lowercase text-[#66635F]">{siteConfig.instagram.handle}</span>
              </a>
            </div>

            <p className="text-[11px] text-[#66635F] font-light pt-2">
              Aksharam Ethnic LLP • Surat, Gujarat, India
            </p>
          </div>
        </div>
      )}
    </>
  );
}
