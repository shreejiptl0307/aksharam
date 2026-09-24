import fs from 'fs';
import path from 'path';

const images = [
  // Hero
  {
    path: 'public/images/hero/hero-main.jpg',
    width: 2400,
    height: 1600,
    title: 'CAMPAIGN 2025/26',
    subtitle: 'Aksharam Ethnic Wear',
    theme: 'hero'
  },
  {
    path: 'public/images/hero/quote-break.jpg',
    width: 2400,
    height: 1350,
    title: 'EDITORIAL CAMPAIGN',
    subtitle: 'Full-bleed Photography',
    theme: 'minimal'
  },

  // About
  {
    path: 'public/images/about/about-brand.jpg',
    width: 1400,
    height: 1800,
    title: 'ATELIER SURAT',
    subtitle: 'Design & Craftsmanship',
    theme: 'neutral'
  },
  {
    path: 'public/images/about/about-atelier.jpg',
    width: 1600,
    height: 1100,
    title: 'PRODUCTION & CRAFT',
    subtitle: 'Laxmi Narayan Industrial Park, Surat',
    theme: 'neutral'
  },

  // Collections (Clean filenames requested by user)
  {
    path: 'public/images/collections/collection-lehenga.jpg',
    width: 1600,
    height: 2000,
    title: 'SHISHA LEHENGAS',
    subtitle: 'Collection 01',
    theme: 'studio'
  },
  {
    path: 'public/images/collections/collection-saree.jpg',
    width: 1600,
    height: 2000,
    title: 'SAREES',
    subtitle: 'Collection 02',
    theme: 'studio'
  },
  {
    path: 'public/images/collections/collection-dresses.jpg',
    width: 1600,
    height: 2000,
    title: 'DRESSES',
    subtitle: 'Collection 03',
    theme: 'studio'
  },
  {
    path: 'public/images/collections/collection-bridesmaid.jpg',
    width: 1600,
    height: 2000,
    title: 'BRIDESMAID',
    subtitle: 'Collection 04',
    theme: 'studio'
  },
  {
    path: 'public/images/collections/collection-coords.jpg',
    width: 1600,
    height: 2000,
    title: 'CO-ORDS',
    subtitle: 'Collection 05',
    theme: 'studio'
  },
  {
    path: 'public/images/collections/collection-contemporary.jpg',
    width: 1600,
    height: 2000,
    title: 'CONTEMPORARY ETHNIC',
    subtitle: 'Collection 06',
    theme: 'studio'
  },
  {
    path: 'public/images/collections/featured-shisha.jpg',
    width: 1800,
    height: 2200,
    title: 'THE SHISHA COLLECTION',
    subtitle: 'Featured Silhouette',
    theme: 'neutral'
  },

  // Craft
  {
    path: 'public/images/craft/craft-detail-01.jpg',
    width: 1600,
    height: 1200,
    title: 'CRAFT DETAIL',
    subtitle: 'Hand Embroidery & Texture',
    theme: 'neutral'
  },
  {
    path: 'public/images/craft/craft-detail-02.jpg',
    width: 1600,
    height: 1200,
    title: 'SHISHA DETAIL',
    subtitle: 'Mirror-work Framing',
    theme: 'neutral'
  },
  {
    path: 'public/images/craft/craft-detail-04.jpg',
    width: 1600,
    height: 1200,
    title: 'TAILORING',
    subtitle: 'Finishing & Construction',
    theme: 'neutral'
  },

  // Lookbook
  {
    path: 'public/images/lookbook/lookbook-01.jpg',
    width: 1400,
    height: 1800,
    title: 'LOOK 01',
    subtitle: 'Shisha Lehenga',
    theme: 'studio'
  },
  {
    path: 'public/images/lookbook/lookbook-02.jpg',
    width: 1400,
    height: 1800,
    title: 'LOOK 02',
    subtitle: 'Heritage Saree',
    theme: 'studio'
  },
  {
    path: 'public/images/lookbook/lookbook-03.jpg',
    width: 1400,
    height: 1800,
    title: 'LOOK 03',
    subtitle: 'Occasion Dress',
    theme: 'studio'
  },
  {
    path: 'public/images/lookbook/lookbook-04.jpg',
    width: 1400,
    height: 1800,
    title: 'LOOK 04',
    subtitle: 'Bridesmaid Set',
    theme: 'studio'
  },
  {
    path: 'public/images/lookbook/lookbook-05.jpg',
    width: 1400,
    height: 1800,
    title: 'LOOK 05',
    subtitle: 'Everyday Co-ord',
    theme: 'studio'
  },
  {
    path: 'public/images/lookbook/lookbook-06.jpg',
    width: 1400,
    height: 1800,
    title: 'LOOK 06',
    subtitle: 'Contemporary Silhouette',
    theme: 'studio'
  }
];

function generateMinimalSVG(img) {
  const { width, height, title, subtitle } = img;
  const bg = '#ECEBE7';
  const textColor = '#171717';
  const subtextColor = '#73706B';
  const borderColor = '#DCDAD4';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <!-- Flat Minimal Neutral Studio Background -->
  <rect width="100%" height="100%" fill="${bg}" />
  
  <!-- Subtle Framing Line -->
  <rect x="24" y="24" width="${width - 48}" height="${height - 48}" fill="none" stroke="${borderColor}" stroke-width="1" />

  <!-- Clean Editorial Typography -->
  <g transform="translate(${width / 2}, ${height / 2})">
    <text y="-8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="${Math.min(width * 0.024, 28)}" fill="${textColor}" text-anchor="middle" font-weight="500" letter-spacing="3">
      ${title}
    </text>
    <text y="24" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="${Math.min(width * 0.013, 14)}" fill="${subtextColor}" text-anchor="middle" font-weight="400" letter-spacing="2">
      ${subtitle}
    </text>
  </g>

  <!-- Technical Spec Footer -->
  <text x="44" y="${height - 40}" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="11" fill="${subtextColor}" font-weight="400" letter-spacing="1.5">
    AKSHARAM ETHNIC LLP
  </text>
  <text x="${width - 44}" y="${height - 40}" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="11" fill="${subtextColor}" text-anchor="end" font-weight="400" letter-spacing="1">
    ${width} × ${height}px [PHOTOGRAPHY PLACEHOLDER]
  </text>
</svg>`;
}

for (const img of images) {
  const dir = path.dirname(img.path);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const svgContent = generateMinimalSVG(img);
  const svgPath = img.path.replace(/\.jpg$/, '.svg');
  fs.writeFileSync(svgPath, svgContent);
  fs.writeFileSync(img.path, svgContent);
}

console.log('Clean minimal placeholders successfully generated!');
