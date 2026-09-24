export interface CollectionImage {
  src: string;
  label: string;
  alt: string;
}

export interface CollectionItem {
  id: string;
  slug: string;
  number: string;
  category: "lehengas" | "sarees";
  title: string;
  coverImage: string;
  hoverImage: string;
  alt: string;
  hoverAlt?: string;
  description: string;
  fabrics?: string;
  silhouettes?: string;
  mobileAspect?: string;
  desktopAspect?: string;
  mobilePosition?: string;
  desktopPosition?: string;
  gallery: CollectionImage[];
  craftsmanshipNote?: string;
  customisationNote?: string;
}

export const collectionsData: CollectionItem[] = [
  {
    id: "01",
    slug: "shisha-lehengas",
    number: "01",
    category: "lehengas",
    title: "Shisha Lehengas",
    coverImage: "/images/collections/collection-lehenga.jpg",
    hoverImage: "/images/collections/featured-shisha.jpg",
    alt: "Model wearing embroidered purple Shisha mirrorwork bridal lehenga",
    hoverAlt: "Detail of embellished Shisha mirrorwork lehenga ensemble",
    mobileAspect: "aspect-[4/5]",
    desktopAspect: "md:aspect-[4/5]",
    mobilePosition: "object-top",
    desktopPosition: "md:object-top",
    description: "Detailed hand-locked mirror embroidery across fluid celebratory lehenga silhouettes.",
    fabrics: "Georgette, Raw Silk, Organza",
    silhouettes: "Flared lehenga, A-line cut, Tiered skirt with structured blouse and dupatta",
    craftsmanshipNote: "Finished with hand-locked shisha mirror embroidery and fine zardozi border detailing.",
    customisationNote: "Custom colorways and sizing specifications available for trade and boutique orders.",
    gallery: [
      {
        src: "/images/collections/collection-lehenga.jpg",
        label: "Front",
        alt: "Front view of Shisha lehenga ensemble in deep purple",
      },
      {
        src: "/images/craft/craft-detail-01.jpg",
        label: "Detail",
        alt: "Macro craftsmanship detail of mirrorwork and embroidery",
      },
      {
        src: "/images/collections/featured-shisha.jpg",
        label: "Alternate",
        alt: "Alternate angle of festive embellished lehenga silhouette",
      },
    ],
  },
  {
    id: "02",
    slug: "handcrafted-sarees",
    number: "02",
    category: "sarees",
    title: "Handcrafted Sarees",
    coverImage: "/images/collections/collection-saree.jpg",
    hoverImage: "/images/lookbook/lookbook-03.jpg",
    alt: "Model draped in handcrafted saree with contrast velvet blouse and border",
    hoverAlt: "Alternate drape in mint green festive tissue silk saree",
    mobileAspect: "aspect-[4/5]",
    desktopAspect: "md:aspect-[4/5]",
    mobilePosition: "object-top",
    desktopPosition: "md:object-top",
    description: "Draped opulence with fine border detailing, artisanal pallu finishes and modern textures.",
    fabrics: "Tissue Silk, Pure Crêpe, Chiffon",
    silhouettes: "Classic 6-yard drape, Concept pre-stitched saree",
    craftsmanshipNote: "Woven borders and delicate surface textures tailored for celebratory occasions.",
    customisationNote: "Boutique line sheets and bespoke drape adaptations available on inquiry.",
    gallery: [
      {
        src: "/images/collections/collection-saree.jpg",
        label: "Front",
        alt: "Draped handcrafted saree silhouette",
      },
      {
        src: "/images/lookbook/lookbook-03.jpg",
        label: "Alternate",
        alt: "Mint green festive drape look",
      },
      {
        src: "/images/about/about-atelier.jpg",
        label: "Atelier",
        alt: "Atelier finishing and drape preparation",
      },
    ],
  },
  {
    id: "03",
    slug: "bridal-lehengas",
    number: "03",
    category: "lehengas",
    title: "Bridal Lehengas",
    coverImage: "/images/lookbook/lookbook-01.jpg",
    hoverImage: "/images/lookbook/lookbook-05.jpg",
    alt: "Model wearing deep purple crush silk bridal lehenga with heavy zardozi",
    hoverAlt: "Dusty blue embroidered bridal festive silhouette",
    mobileAspect: "aspect-[4/5]",
    desktopAspect: "md:aspect-[4/5]",
    mobilePosition: "object-top",
    desktopPosition: "md:object-top",
    description: "Grand bridal lehengas featuring traditional zardozi, zari threadwork and voluminous flares.",
    fabrics: "Raw Silk, Heavy Georgette, Crush Silk",
    silhouettes: "Multi-panel flared lehenga, Double dupatta styling",
    craftsmanshipNote: "Intricate metallic thread embroidery and hand-set embellishments.",
    customisationNote: "Bespoke bridal color adjustments and boutique size runs available.",
    gallery: [
      {
        src: "/images/lookbook/lookbook-01.jpg",
        label: "Front",
        alt: "Deep purple crush silk bridal lehenga",
      },
      {
        src: "/images/lookbook/lookbook-05.jpg",
        label: "Alternate",
        alt: "Dusty blue embroidered bridal lehenga ensemble",
      },
      {
        src: "/images/craft/craft-detail-01.jpg",
        label: "Detail",
        alt: "Zardozi and border detail",
      },
    ],
  },
  {
    id: "04",
    slug: "tissue-sarees",
    number: "04",
    category: "sarees",
    title: "Tissue & Silk Sarees",
    coverImage: "/images/lookbook/lookbook-03.jpg",
    hoverImage: "/images/lookbook/lookbook-06.jpg",
    alt: "Model wearing mint green tissue silk saree",
    hoverAlt: "Rust orange handcrafted festive tissue drape",
    mobileAspect: "aspect-[4/5]",
    desktopAspect: "md:aspect-[4/5]",
    mobilePosition: "object-top",
    desktopPosition: "md:object-top",
    description: "Luminous tissue drapes and festive sarees with fine borders and contemporary drapes.",
    fabrics: "Metallic Tissue, Chanderi Silk, Organza",
    silhouettes: "Classic festive drape with handcrafted blouse",
    craftsmanshipNote: "Fine hand-finished borders with delicate zari and resham motifs.",
    customisationNote: "Wholesale catalogue packs available for retail boutiques.",
    gallery: [
      {
        src: "/images/lookbook/lookbook-03.jpg",
        label: "Front",
        alt: "Mint green tissue silk saree",
      },
      {
        src: "/images/lookbook/lookbook-06.jpg",
        label: "Alternate",
        alt: "Rust orange festive tissue drape",
      },
      {
        src: "/images/craft/craft-detail-01.jpg",
        label: "Detail",
        alt: "Border detailing close-up",
      },
    ],
  },
  {
    id: "05",
    slug: "bridesmaid-lehengas",
    number: "05",
    category: "lehengas",
    title: "Bridesmaid Lehengas",
    coverImage: "/images/collections/collection-bridesmaid.jpg",
    hoverImage: "/images/lookbook/lookbook-04.jpg",
    alt: "Model in lavender tissue bridesmaid lehenga set",
    hoverAlt: "Mustard festive bridesmaid ensemble with delicate zari",
    mobileAspect: "aspect-[4/5]",
    desktopAspect: "md:aspect-[4/5]",
    mobilePosition: "object-top",
    desktopPosition: "md:object-top",
    description: "Lightweight, celebratory lehengas in pastel and vibrant festive palettes.",
    fabrics: "Silk Chanderi, Georgette, Organza",
    silhouettes: "A-line lehenga skirt, Crop top blouse & dupatta",
    craftsmanshipNote: "Harmonious festive tones with lightweight celebratory embroidery.",
    customisationNote: "Group order coordination and boutique palette customisation available.",
    gallery: [
      {
        src: "/images/collections/collection-bridesmaid.jpg",
        label: "Front",
        alt: "Lavender tissue celebratory bridesmaid lehenga",
      },
      {
        src: "/images/lookbook/lookbook-04.jpg",
        label: "Alternate",
        alt: "Mustard festive bridesmaid lehenga look",
      },
      {
        src: "/images/craft/craft-detail-01.jpg",
        label: "Detail",
        alt: "Textured embroidery detailing",
      },
    ],
  },
  {
    id: "06",
    slug: "celebration-lehengas",
    number: "06",
    category: "lehengas",
    title: "Celebration Lehengas",
    coverImage: "/images/lookbook/lookbook-02.jpg",
    hoverImage: "/images/collections/collection-contemporary.jpg",
    alt: "Model wearing sunlit yellow festive tissue lehenga with gold borders",
    hoverAlt: "Contemporary celebratory lehenga silhouette",
    mobileAspect: "aspect-[4/5]",
    desktopAspect: "md:aspect-[4/5]",
    mobilePosition: "object-top",
    desktopPosition: "md:object-top",
    description: "Sunlit occasion lehengas combining contemporary styling with traditional craftsmanship.",
    fabrics: "Tissue Silk, Lurex Chiffon, Georgette",
    silhouettes: "Tiered flared lehenga with hand-finished dupatta",
    craftsmanshipNote: "Fluid multi-tiered panels designed for contemporary celebration movement.",
    customisationNote: "Available in custom sizing runs for retail stockists.",
    gallery: [
      {
        src: "/images/lookbook/lookbook-02.jpg",
        label: "Front",
        alt: "Sunlit yellow celebration lehenga",
      },
      {
        src: "/images/collections/collection-contemporary.jpg",
        label: "Alternate",
        alt: "Contemporary celebration silhouette",
      },
      {
        src: "/images/craft/craft-detail-01.jpg",
        label: "Detail",
        alt: "Zari and border detail",
      },
    ],
  },
];

export const craftPoints = [
  {
    num: "01",
    title: "Craftsmanship",
    desc: "Thoughtful detailing and careful finishing across every lehenga and saree.",
  },
  {
    num: "02",
    title: "Quality",
    desc: "A focus on fabric selection, structure, drape and consistency.",
  },
  {
    num: "03",
    title: "Design",
    desc: "Contemporary silhouettes informed by authentic Indian bridal and festive fashion.",
  },
];

export const lookbookImages = [
  {
    id: 1,
    lookNumber: "LOOK 01",
    src: "/images/lookbook/lookbook-01.jpg",
    alt: "Model wearing deep purple crush silk bridal lehenga",
    caption: "Deep Purple Crush Silk Bridal Lehenga with Zardozi Work",
  },
  {
    id: 2,
    lookNumber: "LOOK 02",
    src: "/images/lookbook/lookbook-02.jpg",
    alt: "Model wearing sunlit yellow tissue lehenga set",
    caption: "Sunlit Yellow Festive Tissue Silk Lehenga Set",
  },
  {
    id: 3,
    lookNumber: "LOOK 03",
    src: "/images/lookbook/lookbook-03.jpg",
    alt: "Model draped in mint green handcrafted tissue saree",
    caption: "Mint Green Handcrafted Tissue Silk Saree",
  },
  {
    id: 4,
    lookNumber: "LOOK 04",
    src: "/images/lookbook/lookbook-04.jpg",
    alt: "Model wearing mustard festive bridesmaid lehenga",
    caption: "Mustard Festive Bridesmaid Lehenga with Delicate Border",
  },
  {
    id: 5,
    lookNumber: "LOOK 05",
    src: "/images/lookbook/lookbook-05.jpg",
    alt: "Model wearing dusty blue embroidered festive lehenga",
    caption: "Dusty Blue Mirrorwork & Zardozi Lehenga Silhouette",
  },
  {
    id: 6,
    lookNumber: "LOOK 06",
    src: "/images/lookbook/lookbook-06.jpg",
    alt: "Model draped in rust orange tissue festive saree",
    caption: "Rust Orange Handwoven Festive Tissue Saree",
  },
];
