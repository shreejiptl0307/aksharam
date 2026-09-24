import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CustomisationSection from "@/components/CustomisationSection";
import { collectionsData } from "@/data/collections";
import { getWhatsAppUrl } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Collections | Aksharam Ethnic LLP",
  description:
    "Explore Aksharam Ethnic LLP's signature ethnic collections: Shisha Lehengas, Sarees, Dresses, Bridesmaid, Co-ords, and Contemporary Ethnic wear.",
};

export default function CollectionsPage() {
  return (
    <>
      <PageHeader
        label="Catalogues"
        title="Collections"
        description="Contemporary ethnic wear designed for boutiques, retailers and modern wardrobes."
      />

      {/* Grid */}
      <section className="py-16 md:py-24 px-6 sm:px-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 md:gap-y-18">
          {collectionsData.map((item) => (
            <Link
              key={item.id}
              href={`/collections/${item.slug}`}
              className="group block"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#ECEBE7] mb-4">
                <Image
                  src={item.coverImage}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
              </div>

              <div className="flex items-baseline justify-between mb-1">
                <h2 className="text-base font-medium text-[#171717] tracking-tight">
                  {item.title}
                </h2>
                <span className="text-xs text-[#66635F] group-hover:text-[#171717] transition-colors">
                  View →
                </span>
              </div>
              <p className="text-xs text-[#66635F] font-light line-clamp-2">
                {item.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Wholesale Contact Link */}
        <div className="mt-20 pt-10 border-t border-[#E4E2DD] flex flex-col sm:flex-row items-baseline justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-[#171717]">
              Interested in line sheets and trade pricing?
            </p>
            <p className="text-xs text-[#66635F] mt-0.5">
              Speak directly with our team for seasonal catalogues.
            </p>
          </div>
          <a
            href={getWhatsAppUrl(
              "Hello Aksharam, I would like to request line sheets and catalogue details for all collections."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.15em] font-medium text-[#171717] hover:opacity-70 transition-opacity"
          >
            Request Catalogue on WhatsApp →
          </a>
        </div>
      </section>

      <CustomisationSection />
    </>
  );
}
