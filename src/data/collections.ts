export interface CollectionItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  coverImage: string;
  description: string;
  fabrics?: string;
  silhouettes?: string;
}

export const collectionsData: CollectionItem[] = [
  {
    id: "01",
    slug: "shisha-lehengas",
    number: "01",
    title: "Shisha Lehengas",
    coverImage: "/images/collections/collection-lehenga.svg",
    description: "Detailed hand-locked mirror embroidery across fluid celebratory silhouettes.",
    fabrics: "Georgette, Raw Silk, Organza",
    silhouettes: "Flared lehenga, A-line cut, Tiered skirt",
  },
  {
    id: "02",
    slug: "sarees",
    number: "02",
    title: "Sarees",
    coverImage: "/images/collections/collection-saree.svg",
    description: "Draped opulence with fine border detailing and modern textures.",
    fabrics: "Tissue Silk, Crêpe, Chiffon",
    silhouettes: "Classic drape, Concept pre-stitched",
  },
  {
    id: "03",
    slug: "dresses",
    number: "03",
    title: "Dresses",
    coverImage: "/images/collections/collection-dresses.svg",
    description: "Contemporary occasion gowns and tiered fusion silhouettes.",
    fabrics: "Pleated Georgette, Lurex Chiffon",
    silhouettes: "Empire gown, Tiered maxi",
  },
  {
    id: "04",
    slug: "bridesmaid",
    number: "04",
    title: "Bridesmaid",
    coverImage: "/images/collections/collection-bridesmaid.svg",
    description: "Curated palettes and coordinated festive ensembles.",
    fabrics: "Silk Chanderi, Georgette",
    silhouettes: "Sharara set, Anarkali, Crop top & skirt",
  },
  {
    id: "05",
    slug: "coords",
    number: "05",
    title: "Co-ords",
    coverImage: "/images/collections/collection-coords.svg",
    description: "Elevated daily separates in breathable natural and silk-blend textiles.",
    fabrics: "Linen-cotton blend, Modal Satin",
    silhouettes: "Tunic with trousers, Kurta with culottes",
  },
  {
    id: "06",
    slug: "contemporary-ethnic",
    number: "06",
    title: "Contemporary Ethnic",
    coverImage: "/images/collections/collection-contemporary.svg",
    description: "Structured capes, asymmetric kurtas, and modern silhouettes.",
    fabrics: "Raw Silk, Heavy Georgette",
    silhouettes: "Cape set, Asymmetric tunic",
  },
];

export const craftPoints = [
  {
    num: "01",
    title: "Craftsmanship",
    desc: "Thoughtful detailing and careful finishing across every collection.",
  },
  {
    num: "02",
    title: "Quality",
    desc: "A focus on material, construction and consistency.",
  },
  {
    num: "03",
    title: "Design",
    desc: "Contemporary silhouettes informed by Indian fashion and craft.",
  },
];

export const lookbookImages = [
  {
    id: 1,
    src: "/images/lookbook/lookbook-01.svg",
    alt: "Shisha Lehenga - Look 01",
  },
  {
    id: 2,
    src: "/images/lookbook/lookbook-02.svg",
    alt: "Heritage Saree - Look 02",
  },
  {
    id: 3,
    src: "/images/lookbook/lookbook-03.svg",
    alt: "Occasion Dress - Look 03",
  },
  {
    id: 4,
    src: "/images/lookbook/lookbook-04.svg",
    alt: "Bridesmaid Set - Look 04",
  },
  {
    id: 5,
    src: "/images/lookbook/lookbook-05.svg",
    alt: "Everyday Co-ord - Look 05",
  },
  {
    id: 6,
    src: "/images/lookbook/lookbook-06.svg",
    alt: "Contemporary Ethnic - Look 06",
  },
];
