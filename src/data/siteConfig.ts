export const siteConfig = {
  name: "AKSHARAM",
  companyName: "AKSHARAM ETHNIC LLP",
  tagline: "Handcrafted Lehengas & Sarees",
  subtagline: "Designer lehengas and handcrafted sarees for boutiques, retailers and modern wardrobes.",
  statementHeadline: "Indian craftsmanship, shaped for contemporary celebrations.",
  statementBody:
    "Aksharam Ethnic LLP designs and manufactures handcrafted lehengas and festive sarees for retailers and boutiques, combining thoughtful detailing, authentic craftsmanship and reliable supply.",
  url: "https://aksharam.co",
  canonicalUrl: "https://aksharam.co",
  brandRed: "#DB2D1C",
  logo: {
    src: "/brand/aksharam-logo-transparent.png",
    masterSrc: "/brand/aksharam-logo-master.png",
    alt: "Aksharam Ethnic LLP Logo",
    width: 962,
    height: 259,
  },
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
      "Hello Aksharam, I'm interested in your lehenga and saree collections. Please share more information about your latest catalogue and wholesale requirements.",
    customisationMessage:
      "Hello Aksharam, I would like to discuss lehenga and saree customisation requirements for my boutique.",
  },
  instagram: {
    handle: "@krishree_",
    username: "krishree_",
    url: "https://www.instagram.com/krishree_/",
  },
  navLinks: [
    { label: "Collections", href: "/collections" },
    { label: "About", href: "/about" },
    { label: "Wholesale", href: "/wholesale" },
    { label: "Contact", href: "/contact" },
  ],
};

export function getWhatsAppUrl(customMessage?: string): string {
  const msg = encodeURIComponent(
    customMessage || siteConfig.whatsapp.defaultMessage
  );
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${msg}`;
}
