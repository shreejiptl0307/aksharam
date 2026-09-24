import fs from 'fs';
import path from 'path';

const images = [
  // Hero
  {
    path: 'public/images/hero/hero-main.jpg',
    width: 2400,
    height: 1600,
    title: 'AKSHARAM CAMPAIGN 2025/26',
    subtitle: 'Crafted in India • Designed to be Remembered',
    theme: 'hero',
    category: 'HERO CAMPAIGN'
  },
  {
    path: 'public/images/hero/hero-secondary.jpg',
    width: 1600,
    height: 2000,
    title: 'THE ROYAL SHISHA EDIT',
    subtitle: 'Handcrafted Heritage Details',
    theme: 'burgundy',
    category: 'CAMPAIGN EDITORIAL'
  },

  // About
  {
    path: 'public/images/about/about-brand.jpg',
    width: 1400,
    height: 1800,
    title: 'CRAFT & HERITAGE',
    subtitle: 'Where Indian Craftsmanship Meets Contemporary Expression',
    theme: 'cream',
    category: 'OUR STORY'
  },
  {
    path: 'public/images/about/about-detail.jpg',
    width: 1000,
    height: 1200,
    title: 'ARTISANAL DETAIL',
    subtitle: 'Precision Weaves & Hand Finishes',
    theme: 'gold',
    category: 'STUDIO CRAFT'
  },
  {
    path: 'public/images/about/about-atelier.jpg',
    width: 1600,
    height: 1000,
    title: 'SURAT ATELIER',
    subtitle: 'Laxmi Narayan Industrial Park Manufacturing Hub',
    theme: 'charcoal',
    category: 'ATELIER & PRODUCTION'
  },

  // Collections
  {
    path: 'public/images/collections/collection-lehenga.jpg',
    width: 1600,
    height: 2000,
    title: 'SHISHA LEHENGAS',
    subtitle: 'Hand-set Mirrors, Georgette & Organza Silhouettes',
    theme: 'burgundy',
    category: 'COLLECTION 01'
  },
  {
    path: 'public/images/collections/collection-saree.jpg',
    width: 1600,
    height: 2200,
    title: 'HERITAGE SAREES',
    subtitle: 'Draped Opulence & Contemporary Borders',
    theme: 'gold',
    category: 'COLLECTION 02'
  },
  {
    path: 'public/images/collections/collection-dresses.jpg',
    width: 1600,
    height: 2000,
    title: 'FASHION DRESSES',
    subtitle: 'Fusion Silhouettes for Evening Celebrations',
    theme: 'cream',
    category: 'COLLECTION 03'
  },
  {
    path: 'public/images/collections/collection-bridesmaid.jpg',
    width: 1600,
    height: 2000,
    title: 'BRIDESMAID EDIT',
    subtitle: 'Coordinated Ensembles & Pastel Palettes',
    theme: 'burgundy',
    category: 'COLLECTION 04'
  },
  {
    path: 'public/images/collections/collection-coords.jpg',
    width: 1600,
    height: 1800,
    title: 'EVERYDAY CO-ORDS',
    subtitle: 'Contemporary Separates in Breathable Cottons & Silks',
    theme: 'cream',
    category: 'COLLECTION 05'
  },
  {
    path: 'public/images/collections/collection-contemporary.jpg',
    width: 1600,
    height: 2200,
    title: 'CONTEMPORARY ETHNIC',
    subtitle: 'Modern Kurtas, Capes & Asymmetric Tunics',
    theme: 'charcoal',
    category: 'COLLECTION 06'
  },
  {
    path: 'public/images/collections/featured-shisha.jpg',
    width: 2000,
    height: 1400,
    title: 'THE SHISHA EDITORIAL',
    subtitle: 'Reflective Mirrored Artistry on Raw Silk & Organza',
    theme: 'burgundy',
    category: 'FEATURED EDITORIAL'
  },

  // Craft
  {
    path: 'public/images/craft/craft-detail-01.jpg',
    width: 1600,
    height: 1200,
    title: 'HAND EMBROIDERY',
    subtitle: 'Zari, Resham & Needlework Detail',
    theme: 'gold',
    category: 'CRAFT 01'
  },
  {
    path: 'public/images/craft/craft-detail-02.jpg',
    width: 1600,
    height: 1200,
    title: 'SHISHA MIRROR ART',
    subtitle: 'Traditional Frame Hand-Locking',
    theme: 'charcoal',
    category: 'CRAFT 02'
  },
  {
    path: 'public/images/craft/craft-detail-03.jpg',
    width: 1600,
    height: 1200,
    title: 'TEXTILE SOURCING',
    subtitle: 'Pure Silks, Chiffons & Sustainable Blends',
    theme: 'cream',
    category: 'CRAFT 03'
  },
  {
    path: 'public/images/craft/craft-detail-04.jpg',
    width: 1600,
    height: 1200,
    title: 'GARMENT TAILORING',
    subtitle: 'Couture Finishing & Structure',
    theme: 'burgundy',
    category: 'CRAFT 04'
  },

  // Quote Break / Full-bleed Parallax
  {
    path: 'public/images/hero/quote-break.jpg',
    width: 2400,
    height: 1400,
    title: 'TRADITION EVOLVES. STYLE REMAINS TIMELESS.',
    subtitle: 'Aksharam Haute Ethnic Portfolio',
    theme: 'charcoal',
    category: 'FASHION STATEMENT'
  },

  // Sustainability & Customisation
  {
    path: 'public/images/about/sustainability.jpg',
    width: 1600,
    height: 1200,
    title: 'CONSIDERED FASHION',
    subtitle: 'Conscious Sourcing & Waste-Reduction Tailoring',
    theme: 'cream',
    category: 'SUSTAINABILITY'
  },
  {
    path: 'public/images/about/customisation.jpg',
    width: 1600,
    height: 2000,
    title: 'CUSTOM ATELIER SERVICES',
    subtitle: 'Bespoke Colorways, Sizing & Volume Adaptation',
    theme: 'burgundy',
    category: 'CUSTOMISATION'
  },

  // Lookbook
  {
    path: 'public/images/lookbook/lookbook-01.jpg',
    width: 1400,
    height: 1800,
    title: 'LOOK 01 — CRIMSON MIRROR LEHENGA',
    subtitle: 'Festive Bridal Capsule',
    theme: 'burgundy',
    category: 'LOOKBOOK VOL. 1'
  },
  {
    path: 'public/images/lookbook/lookbook-02.jpg',
    width: 1200,
    height: 1600,
    title: 'LOOK 02 — SUNLIT OCHRE SAREE',
    subtitle: 'Handloom Tissue Weave',
    theme: 'gold',
    category: 'LOOKBOOK VOL. 1'
  },
  {
    path: 'public/images/lookbook/lookbook-03.jpg',
    width: 1600,
    height: 1200,
    title: 'LOOK 03 — IVORY FLORA GOWN',
    subtitle: 'Micro-pleated Organza',
    theme: 'cream',
    category: 'LOOKBOOK VOL. 1'
  },
  {
    path: 'public/images/lookbook/lookbook-04.jpg',
    width: 1400,
    height: 1800,
    title: 'LOOK 04 — SAGE BRIDESMAID CO-ORD',
    subtitle: 'Minimalist Festive Layering',
    theme: 'cream',
    category: 'LOOKBOOK VOL. 1'
  },
  {
    path: 'public/images/lookbook/lookbook-05.jpg',
    width: 1200,
    height: 1600,
    title: 'LOOK 05 — NOIR SHISHA TUNIC',
    subtitle: 'Contemporary Evening Silhouette',
    theme: 'charcoal',
    category: 'LOOKBOOK VOL. 1'
  },
  {
    path: 'public/images/lookbook/lookbook-06.jpg',
    width: 1600,
    height: 1200,
    title: 'LOOK 06 — ROSEGOLD ANARKALI',
    subtitle: 'Gota Patti & Sequin Accents',
    theme: 'gold',
    category: 'LOOKBOOK VOL. 1'
  },
  {
    path: 'public/images/lookbook/lookbook-07.jpg',
    width: 1400,
    height: 1800,
    title: 'LOOK 07 — INDIGO DRAPED COUTURE',
    subtitle: 'Pre-stitched Architectural Drapes',
    theme: 'charcoal',
    category: 'LOOKBOOK VOL. 1'
  },
  {
    path: 'public/images/lookbook/lookbook-08.jpg',
    width: 1200,
    height: 1600,
    title: 'LOOK 08 — DUSKY PEACH CO-ORD SET',
    subtitle: 'Daily-to-Occasion Separates',
    theme: 'cream',
    category: 'LOOKBOOK VOL. 1'
  },

  // Gallery
  {
    path: 'public/images/gallery/gallery-01.jpg',
    width: 1200,
    height: 1200,
    title: 'ATELIER MOMENT',
    subtitle: 'Hand-setting Shisha Mirrors',
    theme: 'charcoal',
    category: 'STUDIO DIARY'
  },
  {
    path: 'public/images/gallery/gallery-02.jpg',
    width: 1200,
    height: 1200,
    title: 'RUNWAY EDIT',
    subtitle: 'Crimson Velvet Ensemble',
    theme: 'burgundy',
    category: 'CAMPAIGN'
  },
  {
    path: 'public/images/gallery/gallery-03.jpg',
    width: 1200,
    height: 1200,
    title: 'TEXTILE ARCHIVE',
    subtitle: 'Gold Zari Border Exploration',
    theme: 'gold',
    category: 'TEXTILE ARCHIVE'
  },
  {
    path: 'public/images/gallery/gallery-04.jpg',
    width: 1200,
    height: 1200,
    title: 'DRAPED ELEGANCE',
    subtitle: 'Organza Saree with Scalloped Edges',
    theme: 'cream',
    category: 'LOOKBOOK PREVIEW'
  },
  {
    path: 'public/images/gallery/gallery-05.jpg',
    width: 1200,
    height: 1200,
    title: 'SURAT PRODUCTION',
    subtitle: 'Wholesale Batch Quality Inspection',
    theme: 'charcoal',
    category: 'B2B PRODUCTION'
  },
  {
    path: 'public/images/gallery/gallery-06.jpg',
    width: 1200,
    height: 1200,
    title: 'FESTIVE HARMONY',
    subtitle: 'Bridesmaid Palette Swatches',
    theme: 'burgundy',
    category: 'COLOR STUDY'
  }
];

function generateSVG(img) {
  const { width, height, title, subtitle, theme, category } = img;

  let bg1, bg2, accentColor, textColor, subtextColor, gridStroke;

  switch (theme) {
    case 'burgundy':
      bg1 = '#381318';
      bg2 = '#1F0B0E';
      accentColor = '#B79A67';
      textColor = '#F7F3EC';
      subtextColor = '#D8CBC4';
      gridStroke = 'rgba(183, 154, 103, 0.15)';
      break;
    case 'gold':
      bg1 = '#26221B';
      bg2 = '#161410';
      accentColor = '#B79A67';
      textColor = '#F7F3EC';
      subtextColor = '#CDB68D';
      gridStroke = 'rgba(183, 154, 103, 0.2)';
      break;
    case 'charcoal':
      bg1 = '#1F1E1B';
      bg2 = '#11100E';
      accentColor = '#B79A67';
      textColor = '#F7F3EC';
      subtextColor = '#A39C93';
      gridStroke = 'rgba(247, 243, 236, 0.08)';
      break;
    case 'hero':
      bg1 = '#2A1F1D';
      bg2 = '#151312';
      accentColor = '#B79A67';
      textColor = '#F7F3EC';
      subtextColor = '#D6CCC2';
      gridStroke = 'rgba(183, 154, 103, 0.18)';
      break;
    case 'cream':
    default:
      bg1 = '#2D2823';
      bg2 = '#181614';
      accentColor = '#B79A67';
      textColor = '#F7F3EC';
      subtextColor = '#BDB3A6';
      gridStroke = 'rgba(239, 231, 218, 0.12)';
      break;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <radialGradient id="grad" cx="50%" cy="40%" r="70%" fx="40%" fy="30%">
      <stop offset="0%" stop-color="${bg1}" />
      <stop offset="100%" stop-color="${bg2}" />
    </radialGradient>
    <linearGradient id="goldShimmer" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D9C5A0"/>
      <stop offset="50%" stop-color="#B79A67"/>
      <stop offset="100%" stop-color="#8F7242"/>
    </linearGradient>
    <pattern id="luxPattern" width="80" height="80" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 80 40 L 40 80 L 0 40 Z" fill="none" stroke="${gridStroke}" stroke-width="0.8"/>
      <circle cx="40" cy="40" r="1.5" fill="${accentColor}" opacity="0.3"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="url(#grad)" />
  <rect width="100%" height="100%" fill="url(#luxPattern)" opacity="0.85" />

  <!-- Outer Editorial Borders -->
  <rect x="40" y="40" width="${width - 80}" height="${height - 80}" fill="none" stroke="${accentColor}" stroke-width="1" opacity="0.35"/>
  <rect x="52" y="52" width="${width - 104}" height="${height - 104}" fill="none" stroke="${accentColor}" stroke-width="0.5" opacity="0.2"/>

  <!-- Corner Ornaments -->
  <path d="M 32 60 L 32 32 L 60 32" fill="none" stroke="url(#goldShimmer)" stroke-width="2"/>
  <path d="M ${width - 60} 32 L ${width - 32} 32 L ${width - 32} 60" fill="none" stroke="url(#goldShimmer)" stroke-width="2"/>
  <path d="M 32 ${height - 60} L 32 ${height - 32} L 60 ${height - 32}" fill="none" stroke="url(#goldShimmer)" stroke-width="2"/>
  <path d="M ${width - 60} ${height - 32} L ${width - 32} ${height - 32} L ${width - 32} ${height - 60}" fill="none" stroke="url(#goldShimmer)" stroke-width="2"/>

  <!-- Center Luxury Motif -->
  <g transform="translate(${width / 2}, ${height / 2 - 40})">
    <circle r="70" fill="none" stroke="${accentColor}" stroke-width="1" opacity="0.4"/>
    <circle r="50" fill="none" stroke="${accentColor}" stroke-width="0.75" stroke-dasharray="4,4" opacity="0.5"/>
    <polygon points="0,-40 38,0 0,40 -38,0" fill="none" stroke="url(#goldShimmer)" stroke-width="1.2" opacity="0.7"/>
    <text y="8" font-family="'Times New Roman', Georgia, serif" font-size="28" fill="url(#goldShimmer)" text-anchor="middle" font-weight="300" letter-spacing="4">A</text>
  </g>

  <!-- Category Pill -->
  <g transform="translate(${width / 2}, ${height / 2 + 50})">
    <rect x="-130" y="-16" width="260" height="32" rx="0" fill="rgba(0,0,0,0.4)" stroke="${accentColor}" stroke-width="0.75" opacity="0.8"/>
    <text y="5" font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="${accentColor}" text-anchor="middle" font-weight="600" letter-spacing="3.5">${category}</text>
  </g>

  <!-- Main Title -->
  <text x="${width / 2}" y="${height / 2 + 115}" font-family="'Times New Roman', Georgia, serif" font-size="${Math.min(width * 0.038, 44)}" fill="${textColor}" text-anchor="middle" font-weight="400" letter-spacing="2">
    ${title}
  </text>

  <!-- Subtitle -->
  <text x="${width / 2}" y="${height / 2 + 155}" font-family="system-ui, -apple-system, sans-serif" font-size="${Math.min(width * 0.016, 17)}" fill="${subtextColor}" text-anchor="middle" font-weight="300" letter-spacing="1.5">
    ${subtitle}
  </text>

  <!-- Footer Specs & Brand watermark -->
  <text x="70" y="${height - 65}" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="${subtextColor}" opacity="0.8" letter-spacing="2">
    AKSHARAM ETHNIC LLP
  </text>
  <text x="${width - 70}" y="${height - 65}" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="${accentColor}" text-anchor="end" opacity="0.8" letter-spacing="1.5">
    ${width} × ${height}px [REPLACE WITH PHOTOGRAPHY]
  </text>
</svg>`;
}

for (const img of images) {
  const dir = path.dirname(img.path);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const svgContent = generateSVG(img);
  // Write as SVG and also with original path name (which can be served as SVG content or SVG file)
  // In Next.js we can write directly to svg or use svg with .svg extension
  const svgPath = img.path.replace(/\.jpg$/, '.svg');
  fs.writeFileSync(svgPath, svgContent);
  // Also write to .jpg file as SVG text or image so both paths work seamlessly
  fs.writeFileSync(img.path, svgContent);
  console.log(`Generated: ${img.path} and ${svgPath}`);
}

console.log('All image placeholders successfully created!');
