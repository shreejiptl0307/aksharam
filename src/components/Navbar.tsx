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
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          {/* Official Aksharam Brand Logo */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center hover:opacity-85 transition-opacity"
            aria-label="Aksharam Ethnic LLP - Home"
          >
            <Image
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              width={160}
              height={43}
              priority
              className="h-7 sm:h-8 md:h-[34px] w-auto object-contain"
            />
          </Link>

          {/* Center Navigation with Animated Underline */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10 text-[13px] tracking-[0.08em] text-[#66635F]">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`nav-link-animated transition-colors hover:text-[#171717] pb-0.5 ${
                    isActive ? "text-[#171717] font-medium active-link" : ""
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action with Subtle Arrow Shift */}
          <div className="hidden md:flex items-center">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-1 text-[13px] tracking-[0.08em] font-medium text-[#171717] hover:opacity-80 transition-opacity"
            >
              <span>Enquire</span>
              <span className="inline-block transition-transform duration-250 ease-out group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-1 text-[#171717] hover:opacity-70 transition-opacity"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Clean Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#FAFAF8] pt-24 px-6 sm:px-10 flex flex-col justify-between pb-10 md:hidden animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-6 text-lg text-[#171717]">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:opacity-70 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-6 border-t border-[#E4E2DD] space-y-4 text-xs text-[#66635F]">
            <p className="uppercase tracking-wider text-[#171717]">
              Aksharam Ethnic LLP • Surat, India
            </p>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-3.5 text-center bg-[#171717] text-[#FAFAF8] rounded-[2px] font-medium text-xs uppercase tracking-[0.15em] hover:bg-[#262626] transition-colors"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
