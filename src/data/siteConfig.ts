export const siteConfig = {
  name: "AKSHARAM TEXTILES",
  companyName: "AKSHARAM TEXTILES",
  portalSubtitle: "B2B Wholesale Portal & Direct Manufacturer Supply",
  tagline: "Manufacturer & Wholesale Supplier of Luxury Indian Ethnic Wear",
  subtagline: "Exclusive bridal silk, festive silk, and tissue lehengas supplied directly to boutiques, retailers, and resellers worldwide.",
  statementHeadline: "Direct Mill Craftsmanship & Wholesale Excellence from Surat",
  statementBody:
    "Aksharam Textiles designs and manufactures premier handcrafted lehengas for high-volume resellers and boutique stockists. We provide direct factory production, verified design codes, and prompt wholesale dispatches.",
  url: "https://aksharamtextiles.com",
  canonicalUrl: "https://aksharamtextiles.com",
  brandColors: {
    burgundy: "#7D1D2B", // Deep restrained burgundy
    burgundyDark: "#58121C",
    gold: "#C5A880", // Refined warm gold
    ivory: "#FAF7F2", // Luxury warm ivory
    beige: "#F2EBE1",
    charcoal: "#1C1917", // Rich dark charcoal
    cardBg: "#FFFFFF",
    border: "#EAE5DC",
  },
  phone: "+91 9998283811",
  phoneRaw: "919998283811",
  whatsapp: {
    number: "919998283811",
    displayNumber: "+91 9998283811",
    cleanNumber: "9998283811",
  },
  email: "orders@aksharamtextiles.com",
  address: {
    facility: "Aksharam Textiles Mill Unit",
    line1: "First Floor, Plot No. D-134-135",
    line2: "Laxmi Narayan Industrial Park, Udhna Navsari Road",
    line3: "Near BRC Complex",
    city: "Surat",
    state: "Gujarat",
    pincode: "394210",
    country: "India",
    formatted:
      "First Floor, Plot No. D-134-135, Laxmi Narayan Industrial Park, Udhna Navsari Road, Near BRC Complex, Surat, Gujarat 394210, India",
  },
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=First+Floor+Plot+No+D-134-135+Laxmi+Narayan+Industrial+Park+Udhna+Navsari+Road+Near+BRC+Complex+Surat+Gujarat+394210+India",
  admin: {
    defaultPin: "aksharam2026",
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "All Catalogue", href: "/catalogue" },
    { label: "Bridal Silk", href: "/catalogue?category=Bridal+Silk" },
    { label: "Festive Silk", href: "/catalogue?category=Festive+Silk" },
    { label: "Tissue Lehengas", href: "/catalogue?category=Tissue" },
    { label: "Wholesale Terms", href: "/#wholesale-terms" },
    { label: "Admin Portal", href: "/admin" },
  ],
};

export function getWhatsAppClickUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=${siteConfig.whatsapp.number}&text=${encoded}`;
}

export function getWhatsAppUrl(customMessage?: string): string {
  const msg = encodeURIComponent(
    customMessage ||
      "Hello Aksharam Textiles, I am interested in your wholesale lehenga collections."
  );
  return `https://api.whatsapp.com/send?phone=${siteConfig.whatsapp.number}&text=${msg}`;
}
