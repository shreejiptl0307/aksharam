"use client";

import { useState, useEffect } from "react";
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
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
          scrolled
            ? "bg-[#FAFAF8]/95 backdrop-blur-xs border-b border-[#E4E2DD] py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium tracking-[0.2em] text-[#171717] uppercase hover:opacity-75 transition-opacity"
          >
            AKSHARAM
          </Link>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-[13px] tracking-[0.08em] text-[#66635F]">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`transition-colors hover:text-[#171717] ${
                    isActive ? "text-[#171717] font-medium" : ""
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] tracking-[0.08em] font-medium text-[#171717] hover:opacity-70 transition-opacity"
            >
              Enquire →
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
        <div className="fixed inset-0 z-30 bg-[#FAFAF8] pt-28 px-8 flex flex-col justify-between pb-12 md:hidden">
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

          <div className="pt-8 border-t border-[#E4E2DD] space-y-4 text-xs text-[#66635F]">
            <p className="uppercase tracking-wider text-[#171717]">
              Aksharam Ethnic LLP • Surat, India
            </p>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-3 text-center bg-[#171717] text-white rounded-[2px] font-medium"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
