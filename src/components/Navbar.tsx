"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { siteConfig } from "@/data/siteConfig";
import {
  Menu,
  X,
  ShoppingBag,
  MessageCircle,
  Shield,
  Sparkles,
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { totalPieces, setIsCartOpen } = useCart();

  return (
    <>
      {/* Unified Sticky Header Container: Anchored cleanly at top with zero gap */}
      <div className="sticky top-0 z-40 w-full bg-[#FAF7F2] border-b border-[#EAE5DC] shadow-xs">
        {/* Top B2B Announcement Bar */}
        <div className="bg-[#1C1917] text-[#FAF7F2] text-[10px] sm:text-[11px] py-1.5 px-3 sm:px-4 border-b border-white/10">
          <div className="max-w-[1440px] mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-1.5 truncate">
              <span className="inline-block w-2 h-2 rounded-full bg-[#25D366] shrink-0 animate-pulse" />
              <span className="font-medium tracking-wide truncate">
                B2B Wholesale Portal • Surat Mill Direct Supply • Zero Price Display
              </span>
            </div>

            <div className="hidden sm:flex items-center space-x-4 text-white/80 shrink-0">
              <span>Production WhatsApp:</span>
              <a
                href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsapp.number}&text=${encodeURIComponent(
                  "Hello Aksharam Textiles, I am a textile reseller/boutique owner looking to order wholesale lehengas."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E4D5BE] hover:text-white font-mono font-bold flex items-center space-x-1"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>{siteConfig.whatsapp.displayNumber}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Header Bar */}
        <header className="w-full bg-[#FAF7F2] py-2.5 sm:py-3.5">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 flex items-center justify-between">
            {/* Brand Identity */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex flex-col group min-w-0"
            >
              <div className="flex items-center space-x-2">
                <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-[#1C1917] group-hover:text-[#7D1D2B] transition-colors truncate">
                  AKSHARAM TEXTILES
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] uppercase font-bold tracking-widest bg-[#7D1D2B] text-white">
                  Wholesale
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] tracking-wider uppercase text-[#78716C] -mt-0.5 truncate">
                Surat Manufacturer • Direct Mill Supply
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 text-xs uppercase tracking-widest font-semibold text-[#57534E]">
              <Link
                href="/"
                className={`hover:text-[#7D1D2B] transition-colors ${
                  pathname === "/" ? "text-[#7D1D2B]" : ""
                }`}
              >
                Home
              </Link>
              <Link
                href="/catalogue"
                className={`hover:text-[#7D1D2B] transition-colors ${
                  pathname === "/catalogue" ? "text-[#7D1D2B]" : ""
                }`}
              >
                All Catalogue
              </Link>
              <Link
                href="/catalogue?category=Bridal+Silk"
                className="hover:text-[#7D1D2B] transition-colors"
              >
                Bridal Silk
              </Link>
              <Link
                href="/catalogue?category=Festive+Silk"
                className="hover:text-[#7D1D2B] transition-colors"
              >
                Festive Silk
              </Link>
              <Link
                href="/catalogue?category=Tissue"
                className="hover:text-[#7D1D2B] transition-colors"
              >
                Tissue
              </Link>
              <Link
                href="/admin"
                className={`hover:text-[#7D1D2B] transition-colors flex items-center space-x-1 ${
                  pathname === "/admin" ? "text-[#7D1D2B]" : ""
                }`}
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Admin</span>
              </Link>
            </nav>

            {/* Right Action: Cart Button & Mobile Menu */}
            <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
              {/* Live Cart Button with Piece Counter */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="py-1.5 sm:py-2 px-3 sm:px-4 bg-[#7D1D2B] text-white hover:bg-[#58121C] text-xs uppercase tracking-widest font-semibold transition-all flex items-center space-x-1.5 sm:space-x-2 shadow-2xs"
                aria-label="View Wholesale Cart"
              >
                <ShoppingBag className="w-4 h-4" />
                <span className="hidden sm:inline">Wholesale Cart</span>
                <span className="bg-white text-[#7D1D2B] font-bold px-1.5 py-0.5 rounded-full text-[11px] min-w-[20px] text-center">
                  {totalPieces}
                </span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#1C1917] hover:bg-[#EAE5DC] transition-colors rounded-sm"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Fullscreen Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#FAF7F2] pt-24 px-6 pb-8 lg:hidden flex flex-col justify-between animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-4 border-b border-[#EAE5DC]">
            <span className="font-serif text-lg font-bold text-[#1C1917]">
              AKSHARAM TEXTILES
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 text-[#1C1917]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col space-y-3.5 text-base font-serif font-medium text-[#1C1917] pt-4 overflow-y-auto">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-[#EAE5DC] flex justify-between items-center"
            >
              <span>Home Overview</span>
              <span className="text-xs text-[#78716C]">→</span>
            </Link>
            <Link
              href="/catalogue"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-[#EAE5DC] flex justify-between items-center"
            >
              <span>Wholesale Catalogue (All Designs)</span>
              <span className="text-xs text-[#78716C]">→</span>
            </Link>
            <Link
              href="/catalogue?category=Bridal+Silk"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-[#EAE5DC] flex justify-between items-center"
            >
              <span>Bridal Silk Lehengas</span>
              <span className="text-xs text-[#78716C]">→</span>
            </Link>
            <Link
              href="/catalogue?category=Festive+Silk"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-[#EAE5DC] flex justify-between items-center"
            >
              <span>Festive Silk Lehengas</span>
              <span className="text-xs text-[#78716C]">→</span>
            </Link>
            <Link
              href="/catalogue?category=Tissue"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-[#EAE5DC] flex justify-between items-center"
            >
              <span>Tissue Lehengas</span>
              <span className="text-xs text-[#78716C]">→</span>
            </Link>
            <Link
              href="/cart"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-[#EAE5DC] flex justify-between items-center"
            >
              <span>Shopping Cart ({totalPieces} Pieces)</span>
              <span className="text-xs text-[#78716C]">→</span>
            </Link>
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 border-b border-[#EAE5DC] flex justify-between items-center text-[#7D1D2B]"
            >
              <span>Admin Management Desk</span>
              <span className="text-xs text-[#7D1D2B]">🔒</span>
            </Link>
          </nav>

          <div className="space-y-3 pt-6 border-t border-[#EAE5DC]">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setIsCartOpen(true);
              }}
              className="w-full py-3 bg-[#7D1D2B] text-white text-xs uppercase tracking-widest font-semibold flex items-center justify-center space-x-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Open Cart ({totalPieces} Pieces)</span>
            </button>

            <a
              href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsapp.number}&text=${encodeURIComponent(
                "Hello Aksharam Textiles, I want to inquire about wholesale lehengas for my shop."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-[#25D366] text-white text-xs uppercase tracking-widest font-semibold flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct Desk (+91 9998283811)</span>
            </a>

            <p className="text-[11px] text-[#78716C] text-center pt-2">
              Aksharam Textiles • Surat, Gujarat, India
            </p>
          </div>
        </div>
      )}
    </>
  );
}
