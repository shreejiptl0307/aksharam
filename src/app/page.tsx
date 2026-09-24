import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import Collections from "@/components/Collections";
import ImageBreak from "@/components/ImageBreak";
import FeaturedCollection from "@/components/FeaturedCollection";
import EditorialMoment from "@/components/EditorialMoment";
import ExploreTheLook from "@/components/ExploreTheLook";
import CraftSection from "@/components/CraftSection";
import LookbookGrid from "@/components/LookbookGrid";
import WholesaleSection from "@/components/WholesaleSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Text + Landscape Campaign Image with Smooth Load Reveal */}
      <Hero />

      {/* 2. Short Brand Breathing Statement */}
      <BrandStory />

      {/* 3. Collections (3 Portrait Images with Hover/Tap Crossfade) */}
      <Collections limit={3} />

      {/* 4. Landscape Silent Image Break */}
      <ImageBreak />

      {/* 5. Featured Collection (Image + Text) */}
      <FeaturedCollection />

      {/* 6. Portrait Editorial Composition with Image Pair Depth */}
      <EditorialMoment />

      {/* 7. Explore the Look (Interactive Garment Hotspots) */}
      <ExploreTheLook />

      {/* 8. Craftsmanship (Text + Garment/Detail Reveal + 3 Columns) */}
      <CraftSection />

      {/* 9. Lookbook (Interactive Lightbox Viewer + Controlled Grid) */}
      <LookbookGrid />

      {/* 10. Wholesale (Text + Subtle Product Photo) */}
      <WholesaleSection />

      {/* 11. Contact (Address + Plain Text Links) */}
      <ContactSection />
    </>
  );
}
