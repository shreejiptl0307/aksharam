import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";
import { getWhatsAppUrl } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Wholesale | Aksharam Ethnic LLP",
  description:
    "Partner with Aksharam Ethnic LLP for contemporary Indian ethnic fashion wholesale. Discover collections for your boutique or retail business.",
};

export default function WholesalePage() {
  return (
    <>
      <PageHeader
        label="Wholesale"
        title="For Boutiques & Retailers"
        description="Discover Aksharam collections for your store and speak directly with our team about catalogues, availability and wholesale requirements."
      />

      {/* Main Content */}
      <section className="py-16 md:py-24 px-6 sm:px-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-light text-[#171717] tracking-tight">
              B2B Partnerships & Supply
            </h2>
            <div className="space-y-4 text-base text-[#66635F] font-light leading-relaxed">
              <p>
                Aksharam Ethnic LLP partners with multi-designer boutiques,
                ethnic-wear retailers, independent stores and fashion businesses
                looking for distinctive collections and dependable trade relationships.
              </p>
              <p>
                Our manufacturing base in Surat, Gujarat enables us to maintain
                strict quality control, flexible order volumes and customisation
                options across all product categories.
              </p>
            </div>

            <div className="pt-4">
              <a
                href={getWhatsAppUrl(
                  "Hello Aksharam, I'm interested in your wholesale collections. Please share more information about your latest catalogue and wholesale requirements."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-7 py-3.5 bg-[#171717] text-[#FAFAF8] text-xs uppercase tracking-[0.15em] font-medium rounded-[2px] hover:bg-black transition-colors"
              >
                Start a Wholesale Conversation →
              </a>
            </div>
          </div>

          {/* Simple Clean Overview Points */}
          <div className="lg:col-span-6 bg-[#F3F2EE] p-8 md:p-12 space-y-6">
            <h3 className="text-lg font-medium text-[#171717] tracking-tight">
              Wholesale Capabilities
            </h3>
            <ul className="space-y-4 text-sm text-[#66635F] font-light divide-y divide-[#E4E2DD]">
              <li className="pt-3">
                <span className="font-medium text-[#171717] block mb-1">
                  Wholesale Collections
                </span>
                Seasonal line sheets spanning lehengas, sarees, dresses, bridesmaid edits and co-ords.
              </li>
              <li className="pt-3">
                <span className="font-medium text-[#171717] block mb-1">
                  Fashion-Forward Designs
                </span>
                Contemporary silhouettes designed to meet current market trends.
              </li>
              <li className="pt-3">
                <span className="font-medium text-[#171717] block mb-1">
                  Customisation
                </span>
                Explore custom colorways, size runs and volume adaptations for your store.
              </li>
              <li className="pt-3">
                <span className="font-medium text-[#171717] block mb-1">
                  Direct Trade Support
                </span>
                Direct communication with our team in Surat for orders and catalogue requests.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
