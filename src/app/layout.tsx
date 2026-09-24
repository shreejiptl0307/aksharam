import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { siteConfig } from "@/data/siteConfig";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#181715",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Aksharam Ethnic LLP | Contemporary Indian Ethnic Fashion",
    template: "%s | Aksharam Ethnic LLP",
  },
  description:
    "Discover Aksharam Ethnic LLP — contemporary Indian ethnic fashion crafted for boutiques, retailers and wholesale partners. Explore lehengas, sarees, dresses, co-ords and more.",
  keywords: [
    "Aksharam Ethnic",
    "Aksharam Ethnic LLP",
    "Indian ethnic wholesale",
    "Shisha lehengas wholesale",
    "Surat ethnic wear manufacturer",
    "Boutique ethnic wear supplier",
    "Wholesale sarees manufacturer",
    "Indian bridesmaid dresses manufacturer",
    "Surat textile manufacturer",
    "Contemporary Indian fashion wholesale",
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
    title: "Aksharam Ethnic LLP | Contemporary Indian Ethnic Fashion",
    description:
      "Contemporary Indian ethnic fashion created with craftsmanship, character, and an eye for modern fashion. B2B wholesale partner for retailers and boutiques.",
    images: [
      {
        url: "/images/hero/hero-main.svg",
        width: 1200,
        height: 630,
        alt: "Aksharam Ethnic LLP - Haute Indian Ethnic Collections",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aksharam Ethnic LLP | Contemporary Indian Ethnic Fashion",
    description:
      "Contemporary Indian ethnic fashion created with craftsmanship, character, and an eye for modern fashion. B2B wholesale partner.",
    images: ["/images/hero/hero-main.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "₹₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}, ${siteConfig.address.line3}`,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "21.1442",
      longitude: "72.8532",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "19:30",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "sales",
      areaServed: "Worldwide",
      availableLanguage: ["en", "hi", "gu"],
    },
  };

  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${manrope.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#F7F3EC] text-[#181715] flex flex-col font-sans antialiased selection:bg-[#702C36] selection:text-[#F7F3EC]">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
