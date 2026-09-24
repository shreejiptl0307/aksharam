import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import Collections from "@/components/Collections";
import FeaturedCollection from "@/components/FeaturedCollection";
import AboutSection from "@/components/AboutSection";
import ImageBreak from "@/components/ImageBreak";
import CraftSection from "@/components/CraftSection";
import WholesaleSection from "@/components/WholesaleSection";
import LookbookGrid from "@/components/LookbookGrid";
import CustomisationSection from "@/components/CustomisationSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandStory />
      <Collections />
      <FeaturedCollection />
      <AboutSection />
      <ImageBreak />
      <CraftSection />
      <WholesaleSection />
      <LookbookGrid />
      <CustomisationSection />
      <ContactSection />
    </>
  );
}
