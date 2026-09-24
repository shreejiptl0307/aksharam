import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { siteConfig } from "@/data/siteConfig";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAFAF8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Aksharam Ethnic LLP | Contemporary Indian Ethnic Wear",
    template: "%s | Aksharam Ethnic LLP",
  },
  description:
    "Aksharam Ethnic LLP creates contemporary Indian ethnic fashion for boutiques, retailers and wholesale partners.",
  keywords: [
    "Aksharam Ethnic",
    "Aksharam Ethnic LLP",
    "Indian ethnic wear wholesale",
    "Shisha lehengas",
    "Surat ethnic wear",
    "Boutique ethnic supplier",
    "Wholesale sarees",
    "Contemporary Indian fashion",
  ],
  authors: [{ name: "Aksharam Ethnic LLP" }],
  creator: "Aksharam Ethnic LLP",
  publisher: "Aksharam Ethnic LLP",
  alternates: {
    canonical: siteConfig.canonicalUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: "Aksharam Ethnic LLP",
    title: "Aksharam Ethnic LLP | Contemporary Indian Ethnic Wear",
    description:
      "Aksharam Ethnic LLP creates contemporary Indian ethnic fashion for boutiques, retailers and wholesale partners.",
    images: [
      {
        url: "/images/hero/hero-main.svg",
        width: 1200,
        height: 630,
        alt: "Aksharam Ethnic LLP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aksharam Ethnic LLP | Contemporary Indian Ethnic Wear",
    description:
      "Aksharam Ethnic LLP creates contemporary Indian ethnic fashion for boutiques, retailers and wholesale partners.",
    images: ["/images/hero/hero-main.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    "@id": "https://aksharam.co/#organization",
    name: siteConfig.companyName,
    alternateName: "Aksharam",
    url: siteConfig.url,
    logo: "https://aksharam.co/images/hero/hero-main.svg",
    description: siteConfig.tagline,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}, ${siteConfig.address.line3}`,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.pincode,
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "sales",
      areaServed: "Worldwide",
    },
  };

  return (
    <html lang="en" className={`${manrope.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#FAFAF8] text-[#171717] flex flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
