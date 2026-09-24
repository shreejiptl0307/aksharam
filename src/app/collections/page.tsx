import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CustomisationSection from "@/components/CustomisationSection";
import CollectionsFilterGrid from "@/components/CollectionsFilterGrid";
import { getWhatsAppUrl } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Collections | Aksharam Ethnic LLP",
  description:
    "Explore Aksharam Ethnic LLP's signature handcrafted lehengas and festive sarees designed for boutiques, retailers and modern wardrobes.",
};

export default function CollectionsPage() {
  return (
    <>
      <PageHeader
        label="Catalogues"
        title="Collections"
        description="Handcrafted lehengas and festive sarees designed for boutiques, retailers and celebration wardrobes."
      />

      {/* Grid with Clean Category Filters */}
      <section className="py-14 md:py-20 px-6 sm:px-10 lg:px-16 max-w-[1440px] mx-auto">
        <CollectionsFilterGrid />

        {/* Wholesale Contact Link */}
        <div className="mt-16 pt-8 border-t border-[#E4E2DD] flex flex-col sm:flex-row items-baseline justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-[#171717]">
              Interested in line sheets and trade pricing?
            </p>
            <p className="text-xs text-[#66635F] mt-0.5 font-light">
              Speak directly with our team for seasonal catalogues.
            </p>
          </div>
          <a
            href={getWhatsAppUrl(
              "Hello Aksharam, I would like to request line sheets and catalogue details for all collections."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center space-x-1 text-xs uppercase tracking-[0.15em] font-medium text-[#171717] hover:opacity-70 transition-opacity"
          >
            <span>Request Catalogue on WhatsApp</span>
            <span className="inline-block transition-transform duration-250 ease-out group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </section>

      <CustomisationSection />
    </>
  );
}
