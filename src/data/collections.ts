export interface CollectionItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  subtitle: string;
  shortDescription: string;
  description: string;
  coverImage: string;
  featuredImage?: string;
  galleryImages: string[];
  featured: boolean;
  aspectRatio: "portrait" | "tall" | "wide" | "square";
  gridSpan: string;
  keyFeatures: string[];
  silhouettes: string[];
  fabrics: string[];
  occasions: string[];
  idealFor: string[];
  wholesaleHighlights: {
    title: string;
    description: string;
  }[];
}

export const collectionsData: CollectionItem[] = [
  {
    id: "01",
    slug: "shisha-lehengas",
    number: "01",
    title: "Shisha Lehengas",
    category: "Signature Edit",
    subtitle: "Traditional artistry reimagined for contemporary celebrations.",
    shortDescription:
      "Handcrafted mirror-work on cascading silhouettes with artisanal embroidery and opulent finishes.",
    description:
      "Our signature Shisha Lehenga collection balances heritage mirror-work embroidery with weightless modern volume. Meticulously constructed using layered georgettes, raw silks, and gossamer organza, each ensemble features hand-locked shisha mirrors that catch ambient light with quiet luxury.",
    coverImage: "/images/collections/collection-lehenga.svg",
    featuredImage: "/images/collections/featured-shisha.svg",
    galleryImages: [
      "/images/lookbook/lookbook-01.svg",
      "/images/craft/craft-detail-02.svg",
      "/images/gallery/gallery-02.svg",
    ],
    featured: true,
    aspectRatio: "tall",
    gridSpan: "col-span-12 md:col-span-7 row-span-2",
    keyFeatures: [
      "Precision hand-locked shisha mirror work",
      "Structured micro-can-can for natural fluid volume",
      "Contemporary blouse cuts with versatile necklines",
      "Customisable bridal & bridesmaid colorways",
    ],
    silhouettes: [
      "Circular flared lehenga with matching dupatta",
      "Fluted A-line silhouette with scalloped hem",
      "Tiered organza lehenga with structured bustier",
    ],
    fabrics: ["Pure Georgette", "Raw Silk", "Organza Silk", "Tissue Net"],
    occasions: ["Sangeet Ceremonies", "Reception Evenings", "Festive Celebrations"],
    idealFor: [
      "Luxury Bridal Boutiques",
      "Multi-Designer Showrooms",
      "Destination Wedding Specialists",
    ],
    wholesaleHighlights: [
      {
        title: "Boutique-Ready Consistency",
        description: "Standardized fit grades and meticulous quality checks on every mirror setting.",
      },
      {
        title: "Custom Palette Matching",
        description: "Available in custom color stories to match seasonal boutique curation.",
      },
    ],
  },
  {
    id: "02",
    slug: "sarees",
    number: "02",
    title: "Heritage Sarees",
    category: "Draped Opulence",
    subtitle: "Timeless drape silhouettes with architectural borders and modern palettes.",
    shortDescription:
      "Revisiting heirloom drapes through contemporary lightness, fine zari borders, and modern textures.",
    description:
      "Revisiting heirloom drapes through contemporary lightness. Our saree collections feature handloom-inspired textures, subtle zari borders, delicate scalloped edges, and modern drape structures suited for festive and evening wardrobes.",
    coverImage: "/images/collections/collection-saree.svg",
    galleryImages: [
      "/images/lookbook/lookbook-02.svg",
      "/images/craft/craft-detail-01.svg",
      "/images/gallery/gallery-04.svg",
    ],
    featured: true,
    aspectRatio: "portrait",
    gridSpan: "col-span-12 md:col-span-5",
    keyFeatures: [
      "Pre-draped concepts for effortless wear",
      "Hand-guided zari and resham border work",
      "Featherweight drapes that retain crisp pleats",
      "Coordinated designer unstitched blouses",
    ],
    silhouettes: [
      "Classic 6-yard festive drape",
      "Concept pre-stitched cocktail drape",
      "Cape-attached contemporary saree",
    ],
    fabrics: ["Tissue Silk", "Crêpe de Chine", "Chiffon", "Modal Satin"],
    occasions: ["Cocktail Receptions", "Diwali & Festivals", "Wedding Guests"],
    idealFor: ["Ethnic Fashion Stores", "Heritage Boutiques", "Global Export Retail"],
    wholesaleHighlights: [
      {
        title: "High Retail Velocity",
        description: "Versatile price-points and appealing visual drape for boutique displays.",
      },
      {
        title: "Blouse Coordination",
        description: "Includes matched or contrast unstitched/semi-stitched blouse fabrics.",
      },
    ],
  },
  {
    id: "03",
    slug: "dresses",
    number: "03",
    title: "Occasion Dresses",
    category: "Fusion Silhouettes",
    subtitle: "Floor-length gowns, tiered cuts, and fusion festive silhouettes.",
    shortDescription:
      "Fluid floor-length gowns and tiered silhouettes with understated ethnic accents.",
    description:
      "Fluid occasion dresses crafted for sangeet nights, cocktail receptions, and destination celebrations. Featuring subtle micro-pleating, understated mirror accents, and contemporary necklines that appeal to the modern global Indian woman.",
    coverImage: "/images/collections/collection-dresses.svg",
    galleryImages: [
      "/images/lookbook/lookbook-03.svg",
      "/images/lookbook/lookbook-06.svg",
      "/images/gallery/gallery-01.svg",
    ],
    featured: true,
    aspectRatio: "portrait",
    gridSpan: "col-span-12 md:col-span-4",
    keyFeatures: [
      "Comfort-engineered corset bodices",
      "Tiered flair cuts with natural drape",
      "Understated festive embroidery",
      "Rich jewel tones and soft neutrals",
    ],
    silhouettes: [
      "Empire waist flared gown",
      "Tiered maxi dress with cape",
      "Asymmetric hemline fusion dress",
    ],
    fabrics: ["Pleated Georgette", "Crêpe", "Lurex Chiffon", "Silk Organza"],
    occasions: ["Destination Weddings", "Sangeet After-Parties", "Gala Dinners"],
    idealFor: ["Fusion Fashion Boutiques", "Urban Retail Chains", "Destination Boutiques"],
    wholesaleHighlights: [
      {
        title: "Modern Appeal",
        description: "Bridges the gap between traditional Indian ethnic and contemporary western eveningwear.",
      },
      {
        title: "Size Inclusivity",
        description: "Patterns graded across XS to 3XL with generous alteration allowances.",
      },
    ],
  },
  {
    id: "04",
    slug: "bridesmaid-edit",
    number: "04",
    title: "Bridesmaid Edit",
    category: "Coordinated Festive",
    subtitle: "Harmonious group palettes and celebratory movement-friendly cuts.",
    shortDescription:
      "Curated sets for bridal party coordination in pastels, jewel tones, and metallic accents.",
    description:
      "Curated specifically for bridal party coordination and festive groups. Designed in complementary pastel, jewel, and neutral tones, allowing bridal parties to look unified yet individual.",
    coverImage: "/images/collections/collection-bridesmaid.svg",
    galleryImages: [
      "/images/lookbook/lookbook-04.svg",
      "/images/gallery/gallery-06.svg",
      "/images/lookbook/lookbook-08.svg",
    ],
    featured: true,
    aspectRatio: "tall",
    gridSpan: "col-span-12 md:col-span-4",
    keyFeatures: [
      "Harmonious bridal party color stories",
      "Lightweight, celebration-friendly weights",
      "Mix-and-match separates and dupattas",
      "Volume-friendly sizing options",
    ],
    silhouettes: [
      "Flared sharara with short peplum tunic",
      "Crop top and lightweight pleated skirt",
      "Paneled Anarkali with dupatta",
    ],
    fabrics: ["Silk Chanderi", "Georgette", "Soft Organza", "Mulberry Silk"],
    occasions: ["Mehendi & Haldi", "Bridesmaid Coordination", "Intimate Weddings"],
    idealFor: ["Wedding Specialist Stores", "Bridal Stylist Networks", "High-Volume Boutiques"],
    wholesaleHighlights: [
      {
        title: "Group Order Support",
        description: "Batch production for matching multi-piece bridesmaid orders across sizes.",
      },
      {
        title: "Palette Uniformity",
        description: "Strict dye-lot control ensuring color consistency across full wedding parties.",
      },
    ],
  },
  {
    id: "05",
    slug: "everyday-coords",
    number: "05",
    title: "Everyday Co-ords",
    category: "Contemporary Separates",
    subtitle: "Elevated daily separates in breathable natural and silk-blend textiles.",
    shortDescription:
      "Versatile two-piece and three-piece sets engineered for contemporary daywear and intimate gatherings.",
    description:
      "Versatile two-piece and three-piece sets engineered for contemporary daywear, intimate gatherings, and modern work-to-evening dressing. Crisp cuts meet understated ethnic accents.",
    coverImage: "/images/collections/collection-coords.svg",
    galleryImages: [
      "/images/lookbook/lookbook-08.svg",
      "/images/lookbook/lookbook-04.svg",
      "/images/gallery/gallery-03.svg",
    ],
    featured: true,
    aspectRatio: "square",
    gridSpan: "col-span-12 md:col-span-4",
    keyFeatures: [
      "Relaxed tailored cuts for all-day comfort",
      "Breathable, hand-feel rich weaves",
      "Subtle threadwork and tonal embroidery",
      "Effortless mix-and-match styling",
    ],
    silhouettes: [
      "Tunic with straight-fit cigarette trousers",
      "Short kurta with pleated culottes",
      "Kimono wrap jacket with inner slip and pants",
    ],
    fabrics: ["Linen-Cotton Blends", "Mulberry Slub", "Modal Satin", "Soft Rayon"],
    occasions: ["Workwear to Evening", "Intimate Dinners", "Resort & Travel"],
    idealFor: ["Contemporary Fashion Retail", "Resort Boutiques", "Online Fashion Curators"],
    wholesaleHighlights: [
      {
        title: "Fast Turnover",
        description: "High repeat customer purchase cycle due to versatile daily wearability.",
      },
      {
        title: "Low Maintenance Care",
        description: "Durable fabrics tested for shrinkage, color fastness, and effortless upkeep.",
      },
    ],
  },
  {
    id: "06",
    slug: "contemporary-ethnic",
    number: "06",
    title: "Contemporary Ethnic",
    category: "Modern silhouettes",
    subtitle: "Modern silhouettes honoring timeless Indian craftsmanship and architectural tailoring.",
    shortDescription:
      "Structured jackets, asymmetric kurtas, draped dhotis, and cape sets for the modern fashion market.",
    description:
      "A bold intersection of structured jackets, asymmetric kurtas, draped dhotis, and cape sets designed for the forward-thinking ethnic wear market.",
    coverImage: "/images/collections/collection-contemporary.svg",
    galleryImages: [
      "/images/lookbook/lookbook-05.svg",
      "/images/lookbook/lookbook-07.svg",
      "/images/gallery/gallery-05.svg",
    ],
    featured: true,
    aspectRatio: "tall",
    gridSpan: "col-span-12 md:col-span-12",
    keyFeatures: [
      "Architectural outerwear capes & duster jackets",
      "Asymmetric drape lines and engineered hemlines",
      "Modular three-piece layering",
      "Refined monochromatic and earthy palettes",
    ],
    silhouettes: [
      "Embroidered cape over structured slip dress",
      "Asymmetric high-low tunic with dhoti pant",
      "Belted waist jacket with wide-leg palazzo",
    ],
    fabrics: ["Raw Silk", "Brocade Accents", "Heavy Georgette", "Chanderi"],
    occasions: ["Festive Receptions", "Art & Fashion Galas", "Modern Festivities"],
    idealFor: ["Concept Boutiques", "High-End Designer Curators", "Global Fashion Exporters"],
    wholesaleHighlights: [
      {
        title: "Distinctive Runway Appeal",
        description: "Curated statement pieces that anchor window displays and editorial lookbooks.",
      },
      {
        title: "Premium Margins",
        description: "High perceived value supporting strong boutique markups and brand positioning.",
      },
    ],
  },
];

export const craftsmanshipPillars = [
  {
    number: "01",
    title: "Thoughtful Craftsmanship",
    subtitle: "Intricate Detailing & Construction",
    description:
      "Attention to detailing, construction, and hand-finishing throughout every collection. From precision mirror setting to delicate hem edging, each garment is executed with artisanal patience.",
    image: "/images/craft/craft-detail-01.svg",
    tag: "ARTISANAL HERITAGE",
  },
  {
    number: "02",
    title: "Quality First",
    subtitle: "Production Consistency & Integrity",
    description:
      "Rigorous quality checks and careful production standards help maintain consistency across our garments. Fabric durability, colorfastness, and seam integrity are verified at every manufacturing phase.",
    image: "/images/craft/craft-detail-02.svg",
    tag: "RIGOROUS QA",
  },
  {
    number: "03",
    title: "Contemporary Design",
    subtitle: "Modern Silhouettes for Global Markets",
    description:
      "Traditional inspiration is translated into silhouettes designed for today's fashion market. We balance celebratory opulence with wearable lightness and movement-friendly tailoring.",
    image: "/images/craft/craft-detail-04.svg",
    tag: "MODERN SILHOUETTES",
  },
];

export const whyAksharamPoints = [
  {
    key: "CRAFT",
    title: "CRAFT",
    subtitle: "Artisanal Integrity",
    description:
      "Collections shaped through thoughtful detailing and skilled craftsmanship.",
    icon: "Sparkles",
  },
  {
    key: "QUALITY",
    title: "QUALITY",
    subtitle: "Premium Sourcing",
    description:
      "Careful material selection and quality-focused production.",
    icon: "ShieldCheck",
  },
  {
    key: "DESIGN",
    title: "DESIGN",
    subtitle: "Indian Heritage × Modernity",
    description:
      "Styles influenced by contemporary trends while retaining an Indian identity.",
    icon: "Compass",
  },
  {
    key: "PARTNERSHIP",
    title: "PARTNERSHIP",
    subtitle: "B2B Relationship Focus",
    description:
      "A customer-first approach built around retailers, boutiques and long-term relationships.",
    icon: "Handshake",
  },
];

export const wholesaleBenefits = [
  {
    title: "Wholesale Collections",
    description:
      "Access comprehensive seasonal line sheets featuring lehengas, sarees, dresses, and co-ords built for boutique retail.",
    tag: "01",
  },
  {
    title: "Fashion-Forward Designs",
    description:
      "Trend-responsive collections that resonate with modern consumers seeking contemporary ethnic fashion.",
    tag: "02",
  },
  {
    title: "Customisation Opportunities",
    description:
      "Collaborate on custom palettes, sizing ranges, and volume adaptations tailored to your market demographic.",
    tag: "03",
  },
  {
    title: "Direct Business Support",
    description:
      "Enjoy dedicated trade assistance, transparent production timelines, and direct WhatsApp communication.",
    tag: "04",
  },
];

export const lookbookItems = [
  {
    id: 1,
    title: "Look 01 — Crimson Mirror Lehenga",
    subtitle: "Festive Capsule • Hand-locked Shisha Work",
    image: "/images/lookbook/lookbook-01.svg",
    ratio: "aspect-[3/4]",
    caption: "Raw silk lehenga with hand-embellished mirror embroidery.",
  },
  {
    id: 2,
    title: "Look 02 — Sunlit Ochre Saree",
    subtitle: "Tissue Silk • Antique Zari Border",
    image: "/images/lookbook/lookbook-02.svg",
    ratio: "aspect-[4/5]",
    caption: "Featherweight tissue drape paired with a structured bustier.",
  },
  {
    id: 3,
    title: "Look 03 — Ivory Flora Gown",
    subtitle: "Occasion Dress • Micro-pleated Organza",
    image: "/images/lookbook/lookbook-03.svg",
    ratio: "aspect-[4/3]",
    caption: "Sculptural tiered gown designed for destination celebrations.",
  },
  {
    id: 4,
    title: "Look 04 — Sage Bridesmaid Co-ord",
    subtitle: "Bridesmaid Edit • Silk Chanderi",
    image: "/images/lookbook/lookbook-04.svg",
    ratio: "aspect-[3/4]",
    caption: "Harmonious bridesmaid ensemble with subtle resham accents.",
  },
  {
    id: 5,
    title: "Look 05 — Noir Shisha Tunic",
    subtitle: "Contemporary Ethnic • Statement Silhouette",
    image: "/images/lookbook/lookbook-05.svg",
    ratio: "aspect-[4/5]",
    caption: "Architectural tunic with mirror highlights on matte crepe.",
  },
  {
    id: 6,
    title: "Look 06 — Rosegold Anarkali",
    subtitle: "Festive Silhouette • Gota Patti & Sequin",
    image: "/images/lookbook/lookbook-06.svg",
    ratio: "aspect-[4/3]",
    caption: "Floor-length flared ensemble with tonal detailing.",
  },
  {
    id: 7,
    title: "Look 07 — Indigo Draped Couture",
    subtitle: "Pre-stitched Architectural Drape",
    image: "/images/lookbook/lookbook-07.svg",
    ratio: "aspect-[3/4]",
    caption: "Modern evening drape engineered with ease-of-wear.",
  },
  {
    id: 8,
    title: "Look 08 — Dusky Peach Co-ord Set",
    subtitle: "Everyday Co-ords • Linen & Silk Blend",
    image: "/images/lookbook/lookbook-08.svg",
    ratio: "aspect-[4/5]",
    caption: "Versatile daily separates with tonal thread embroidery.",
  },
];

export const galleryItems = [
  {
    id: 1,
    title: "Atelier Hand-setting",
    category: "STUDIO DIARY",
    image: "/images/gallery/gallery-01.svg",
  },
  {
    id: 2,
    title: "Crimson Velvet Campaign",
    category: "RUNWAY",
    image: "/images/gallery/gallery-02.svg",
  },
  {
    id: 3,
    title: "Zari Border Exploration",
    category: "ARCHIVE",
    image: "/images/gallery/gallery-03.svg",
  },
  {
    id: 4,
    title: "Scalloped Organza Saree",
    category: "LOOKBOOK",
    image: "/images/gallery/gallery-04.svg",
  },
  {
    id: 5,
    title: "Surat Manufacturing Facility",
    category: "PRODUCTION",
    image: "/images/gallery/gallery-05.svg",
  },
  {
    id: 6,
    title: "Bridesmaid Color Swatches",
    category: "COLOR STUDY",
    image: "/images/gallery/gallery-06.svg",
  },
];
