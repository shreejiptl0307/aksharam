import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import Collections from "@/components/Collections";
import FeaturedCollection from "@/components/FeaturedCollection";
import Craftsmanship from "@/components/Craftsmanship";
import EditorialBreak from "@/components/EditorialBreak";
import WhyAksharam from "@/components/WhyAksharam";
import Wholesale from "@/components/Wholesale";
import Marquee from "@/components/Marquee";
import Sustainability from "@/components/Sustainability";
import Customisation from "@/components/Customisation";
import Lookbook from "@/components/Lookbook";
import Gallery from "@/components/Gallery";
import ContactCTA from "@/components/ContactCTA";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      {/* 01. Cinematic Fashion Hero */}
      <Hero />

      {/* 02. Brand Introduction & Narrative */}
      <BrandStory />

      {/* 03. Collections Editorial Masonry Grid */}
      <Collections />

      {/* 04. Featured Collection Editorial: The Shisha Edit */}
      <FeaturedCollection />

      {/* 05. The Art of Aksharam - Craftsmanship */}
      <Craftsmanship />

      {/* 06. Fashion Quote / Full-Bleed Parallax Statement */}
      <EditorialBreak />

      {/* 07. Why Aksharam - 4 Editorial Columns */}
      <WhyAksharam />

      {/* 08. Wholesale / B2B Section */}
      <Wholesale />

      {/* 09. Moving Typography Marquee */}
      <Marquee />

      {/* 10. Considered Fashion - Sustainability */}
      <Sustainability />

      {/* 11. Custom Atelier Services */}
      <Customisation />

      {/* 12. Editorial Lookbook with Interactive Lightbox */}
      <Lookbook />

      {/* 13. Inside Aksharam - Studio Diary */}
      <Gallery />

      {/* 14. Editorial Lead-Generation Call to Action */}
      <ContactCTA />

      {/* 15. Contact Hub & B2B Enquiry Form */}
      <ContactSection />
    </>
  );
}
