export const siteConfig = {
  name: "AKSHARAM",
  companyName: "AKSHARAM ETHNIC LLP",
  tagline: "Crafted in India. Designed to be Remembered.",
  secondaryTagline: "Inspired by Fashion. Defined by Craft.",
  description:
    "Aksharam Ethnic LLP creates distinctive contemporary Indian ethnic fashion for retailers, boutiques, and wholesale partners worldwide. Explore our signature Shisha Lehengas, Sarees, Dresses, Bridesmaid Edits, Co-ords, and Contemporary Silhouettes.",
  url: "https://aksharam.co",
  canonicalUrl: "https://aksharam.co",
  phone: "+91 78018 23811",
  phoneRaw: "917801823811",
  email: "aksharamethnic@gmail.com",
  address: {
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
  whatsapp: {
    number: "917801823811",
    defaultMessage:
      "Hello Aksharam, I'm interested in your wholesale collections. I'd like to know more about your latest catalogue, pricing and order requirements.",
    customisationMessage:
      "Hello Aksharam, I would like to discuss customisation opportunities and custom production for my boutique/retail store.",
    catalogueMessage:
      "Hello Aksharam, please share the latest seasonal lookbook and wholesale line sheets.",
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Collections", href: "/collections" },
    { label: "Craftsmanship", href: "/#craftsmanship" },
    { label: "Wholesale", href: "/wholesale" },
    { label: "Contact", href: "/contact" },
  ],
  footerLinks: [
    { label: "Home", href: "/" },
    { label: "About Our Story", href: "/about" },
    { label: "Collections", href: "/collections" },
    { label: "Wholesale & B2B", href: "/wholesale" },
    { label: "Contact & Studio", href: "/contact" },
  ],
  categoriesMarquee: [
    "SHISHA LEHENGAS",
    "HERITAGE SAREES",
    "OCCASION DRESSES",
    "BRIDESMAID EDIT",
    "EVERYDAY CO-ORDS",
    "CONTEMPORARY ETHNIC",
    "HAND EMBROIDERY",
    "ATELIER CRAFT",
  ],
};

export function getWhatsAppUrl(customMessage?: string): string {
  const msg = encodeURIComponent(
    customMessage || siteConfig.whatsapp.defaultMessage
  );
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${msg}`;
}
