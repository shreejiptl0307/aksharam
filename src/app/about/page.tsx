import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CraftSection from "@/components/CraftSection";
import CustomisationSection from "@/components/CustomisationSection";
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
        description="Aksharam Ethnic LLP creates contemporary ethnic fashion for retailers, boutiques and modern wardrobes."
      />

      {/* Main Story */}
      <section className="py-16 md:py-24 px-6 sm:px-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-2xl sm:text-3xl font-light text-[#171717] tracking-tight leading-snug">
              Indian craftsmanship, shaped for contemporary fashion.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 text-base text-[#66635F] font-light leading-relaxed max-w-2xl">
            <p>
              Based in Surat, Gujarat, {siteConfig.companyName} combines traditional
              craftsmanship disciplines with modern silhouettes to produce
              distinctive collections for boutiques and fashion retailers.
            </p>
            <p>
              Our collections span lehengas, sarees, dresses, bridesmaid styles,
              co-ords and contemporary ethnic wear. Each piece is designed with
              attention to detailing, fabric selection and consistent production
              standards.
            </p>
            <p>
              We operate as a dedicated wholesale and manufacturing partner,
              working closely with our clients to deliver reliable supply,
              customisation opportunities and long-term commercial relationships.
            </p>
          </div>
        </div>

        {/* Clean Photography */}
        <div className="mt-16 md:mt-24 relative w-full aspect-[16/9] overflow-hidden bg-[#ECEBE7]">
          <Image
            src="/images/about/about-atelier.svg"
            alt="Aksharam Atelier Surat"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Craftsmanship Section */}
      <CraftSection />

      {/* Customisation Note */}
      <CustomisationSection />
    </>
  );
}
