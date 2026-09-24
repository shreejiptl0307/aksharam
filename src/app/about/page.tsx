import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CraftSection from "@/components/CraftSection";
import CustomisationSection from "@/components/CustomisationSection";
import ScrollReveal from "@/components/ScrollReveal";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "About | Aksharam Ethnic LLP",
  description:
    "Learn about Aksharam Ethnic LLP, our Surat manufacturing atelier, our focus on craftsmanship, quality and long-term wholesale relationships.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About"
        title="Our Story"
        description="Aksharam Ethnic LLP designs and manufactures handcrafted lehengas and festive sarees for boutiques, retailers and modern celebrations."
      />

      {/* Main Narrative with Sticky Text on Desktop */}
      <section className="py-10 sm:py-14 md:py-20 px-5 sm:px-8 lg:px-16 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-start">
          {/* Sticky Left Column on Desktop */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-4 sm:space-y-6">
            <ScrollReveal>
              <p className="text-xs uppercase tracking-[0.2em] text-[#66635F]">
                Heritage & Atelier
              </p>
              <h2
                style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.375rem)" }}
                className="font-light text-[#171717] tracking-tight leading-snug mt-1"
              >
                Indian craftsmanship, shaped for modern celebrations.
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-[#66635F] font-light leading-relaxed pt-2">
                <p>
                  Based in Surat, Gujarat, {siteConfig.companyName} combines traditional
                  craftsmanship disciplines with contemporary styling to produce
                  distinctive bridal and festive lehengas and handcrafted sarees.
                </p>
                <p>
                  Our atelier specializes exclusively in lehengas and sarees, with rigorous
                  attention to fabric selection, zardozi embroidery, mirrorwork and drape
                  consistency.
                </p>
                <p>
                  We operate as a dedicated wholesale and manufacturing partner,
                  working closely with our clients to deliver reliable trade supply,
                  customisation opportunities and long-term commercial relationships.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Scrolling Photography Stream on Right Column */}
          <div className="lg:col-span-7 space-y-8 md:space-y-12">
            {/* Image 1: Atelier / Production */}
            <ScrollReveal duration={800}>
              <div className="relative w-full aspect-[4/5] sm:aspect-[4/3] overflow-hidden bg-[#ECEBE7]">
                <Image
                  src="/images/about/about-atelier.jpg"
                  alt="Aksharam Atelier Surat craftsmanship and production"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.01]"
                />
              </div>
              <p className="text-xs text-[#66635F] font-light mt-2.5">
                Surat Atelier • Pattern cutting and assembly
              </p>
            </ScrollReveal>

            {/* Image 2: Embroidery Detail */}
            <ScrollReveal delay={80} duration={800}>
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#ECEBE7]">
                <Image
                  src="/images/craft/craft-detail-01.jpg"
                  alt="Handcrafted zardozi and mirror embroidery close-up"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.01]"
                />
              </div>
              <p className="text-xs text-[#66635F] font-light mt-2.5">
                Handcrafted zardozi and shisha mirror detailing
              </p>
            </ScrollReveal>

            {/* Image 3: Finished Garment Look */}
            <ScrollReveal delay={120} duration={800}>
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#ECEBE7]">
                <Image
                  src="/images/lookbook/lookbook-01.jpg"
                  alt="Finished Aksharam bridal lehenga ensemble"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.01]"
                />
              </div>
              <p className="text-xs text-[#66635F] font-light mt-2.5">
                Finished bridal ensemble • Deep purple crush silk
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <CraftSection />

      {/* Customisation Note */}
      <CustomisationSection />
    </>
  );
}
