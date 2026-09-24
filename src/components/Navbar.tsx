"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/data/siteConfig";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#F7F3EC]/90 backdrop-blur-md shadow-xs py-4 border-b border-[#181715]/5"
            : "bg-transparent py-6 md:py-7"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Wordmark */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="group flex flex-col tracking-[0.22em] text-[#181715] transition-opacity hover:opacity-80"
          >
            <span className="font-editorial text-2xl md:text-3xl font-light tracking-[0.25em]">
              AKSHARAM
            </span>
            <span className="text-[9px] uppercase font-sans tracking-[0.35em] text-[#57524B] -mt-0.5">
              ETHNIC LLP • SURAT
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-9 text-[13px] tracking-[0.18em] uppercase text-[#181715]">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative py-1 font-medium transition-colors hover:text-[#702C36] ${
                    isActive ? "text-[#702C36]" : "text-[#181715]/85"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#702C36]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-[12px] uppercase tracking-[0.2em] px-5 py-2.5 bg-[#181715] text-[#F7F3EC] hover:bg-[#702C36] transition-all duration-300 group"
            >
              <span>Enquire</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 text-[#181715] hover:text-[#702C36] transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Fashion Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#181715] text-[#F7F3EC] flex flex-col justify-between p-8 md:p-12 transition-all duration-500 lg:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
        style={{ top: 0, height: "100dvh" }}
      >
        <div className="pt-20">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#B79A67] mb-8">
            AKSHARAM ETHNIC LLP
          </p>
          <nav className="flex flex-col space-y-5">
            {siteConfig.navLinks.map((link, idx) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-editorial text-3xl md:text-4xl text-[#F7F3EC] hover:text-[#B79A67] transition-colors flex items-center justify-between group"
              >
                <span>{link.label}</span>
                <span className="text-xs font-sans tracking-[0.2em] text-[#B79A67]/60 group-hover:text-[#B79A67]">
                  0{idx + 1}
                </span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-[#F7F3EC]/10 pt-6 space-y-4">
          <div className="flex flex-col space-y-1 text-xs text-[#D8CBC4] tracking-wider">
            <span className="text-[#B79A67] uppercase text-[10px] tracking-[0.25em]">
              B2B Trade & Atelier Desk
            </span>
            <a href={`tel:${siteConfig.phone}`} className="hover:underline">
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="hover:underline">
              {siteConfig.email}
            </a>
          </div>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full inline-flex items-center justify-center space-x-2 py-3 bg-[#702C36] text-[#F7F3EC] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#B79A67] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
