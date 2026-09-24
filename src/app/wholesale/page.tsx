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
      <section className="py-14 md:py-20 px-6 sm:px-10 lg:px-16 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-6 space-y-5">
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

            <div className="pt-3">
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

          {/* Clean Overview Box */}
          <div className="lg:col-span-6 bg-[#F3F2EE] p-8 md:p-10 space-y-5">
            <h3 className="text-base font-medium text-[#171717] tracking-tight">
              Wholesale Capabilities
            </h3>
            <ul className="space-y-3.5 text-sm text-[#66635F] font-light divide-y divide-[#E4E2DD]">
              <li className="pt-2.5">
                <span className="font-medium text-[#171717] block mb-0.5">
                  Wholesale Collections
                </span>
                Seasonal line sheets spanning bridal lehengas, festive lehengas and handcrafted sarees.
              </li>
              <li className="pt-2.5">
                <span className="font-medium text-[#171717] block mb-0.5">
                  Fashion-Forward Designs
                </span>
                Contemporary silhouettes designed to meet current market trends.
              </li>
              <li className="pt-2.5">
                <span className="font-medium text-[#171717] block mb-0.5">
                  Customisation
                </span>
                Explore custom colorways, size runs and volume adaptations for your store.
              </li>
              <li className="pt-2.5">
                <span className="font-medium text-[#171717] block mb-0.5">
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
