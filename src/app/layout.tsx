import type { Metadata, Viewport } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import CartDrawer from "@/components/CartDrawer";
import OrderReviewModal from "@/components/OrderReviewModal";
import ToastNotification from "@/components/ToastNotification";
import { CartProvider } from "@/context/CartContext";
import { siteConfig } from "@/data/siteConfig";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Aksharam Textiles | Wholesale Indian Ethnic Wear Manufacturer Surat",
    template: "%s | Aksharam Textiles",
  },
  description:
    "Official B2B wholesale portal for Aksharam Textiles Surat. Handcrafted bridal silk, festive silk, and tissue lehengas directly supplied to boutiques and resellers worldwide. Zero price portal with WhatsApp ordering.",
  keywords: [
    "Aksharam Textiles",
    "Surat textile manufacturer",
    "Wholesale lehengas Surat",
    "Bridal silk lehengas wholesale",
    "B2B ethnic wear manufacturer",
    "Indian textile wholesale",
    "Tissue lehengas manufacturer",
    "Reseller ethnic wear supplier",
  ],
  authors: [{ name: "Aksharam Textiles" }],
  creator: "Aksharam Textiles",
  publisher: "Aksharam Textiles",
  alternates: {
    canonical: siteConfig.canonicalUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: "Aksharam Textiles",
    title: "Aksharam Textiles | Wholesale Indian Ethnic Wear Manufacturer",
    description:
      "Direct manufacturer supply of handcrafted bridal & festive lehengas for resellers and boutiques worldwide.",
    images: [
      {
        url: "/products/media_1793041527137.jpg",
        width: 768,
        height: 1024,
        alt: "Aksharam Textiles Bridal Silk Lehenga",
      },
    ],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/brand/aksharam-logo-transparent.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${manrope.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#FAF7F2] text-[#1C1917] flex flex-col font-sans antialiased selection:bg-[#7D1D2B] selection:text-white">
        <CartProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <CartDrawer />
          <OrderReviewModal />
          <ToastNotification />
          <WhatsAppFloatingButton />
        </CartProvider>
      </body>
    </html>
  );
}
