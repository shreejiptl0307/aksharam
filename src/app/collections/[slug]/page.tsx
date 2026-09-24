import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import CustomisationSection from "@/components/CustomisationSection";
import { collectionsData } from "@/data/collections";
import { getWhatsAppUrl } from "@/data/siteConfig";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return collectionsData.map((col) => ({
    slug: col.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const collection = collectionsData.find((col) => col.slug === slug);

  if (!collection) {
    return {
      title: "Collection Not Found | Aksharam Ethnic LLP",
    };
  }

  return {
    title: `${collection.title} | Aksharam Ethnic LLP`,
    description: collection.description,
  };
}

export default async function CollectionDetailPage({ params }: Props) {
  const { slug } = await params;
  const collectionIndex = collectionsData.findIndex((col) => col.slug === slug);

  if (collectionIndex === -1) {
    notFound();
  }

  const collection = collectionsData[collectionIndex];
  const prevCollection =
    collectionsData[(collectionIndex - 1 + collectionsData.length) % collectionsData.length];
  const nextCollection =
    collectionsData[(collectionIndex + 1) % collectionsData.length];

  return (
    <>
      <PageHeader
        label={`Collection ${collection.number}`}
        title={collection.title}
        description={collection.description}
      />

      <section className="py-10 sm:py-14 md:py-20 px-5 sm:px-8 lg:px-16 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-14 items-start">
          {/* Main Large Photography */}
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#ECEBE7]">
              <Image
                src={collection.coverImage}
                alt={collection.title}
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 58vw"
                className="object-cover object-top transition-transform duration-500 ease-out hover:scale-[1.01]"
              />
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 sm:space-y-8 lg:pl-2">
            <div className="space-y-5 sm:space-y-6">
              <h2
                style={{ fontSize: "clamp(1.25rem, 3vw, 1.75rem)" }}
                className="font-light text-[#171717] tracking-tight"
              >
                Collection Overview
              </h2>
              <p className="text-sm sm:text-base text-[#66635F] font-light leading-relaxed">
                {collection.description}
              </p>

              {collection.fabrics && (
                <div className="pt-4 border-t border-[#E4E2DD]">
                  <p className="text-xs uppercase tracking-widest text-[#171717] font-medium mb-1">
                    Fabrics & Materials
                  </p>
                  <p className="text-xs sm:text-sm text-[#66635F] font-light">
                    {collection.fabrics}
                  </p>
                </div>
              )}

              {collection.silhouettes && (
                <div className="pt-4 border-t border-[#E4E2DD]">
                  <p className="text-xs uppercase tracking-widest text-[#171717] font-medium mb-1">
                    Silhouettes
                  </p>
                  <p className="text-xs sm:text-sm text-[#66635F] font-light">
                    {collection.silhouettes}
                  </p>
                </div>
              )}
            </div>

            {/* Wholesale CTA */}
            <div className="pt-5 sm:pt-6 border-t border-[#E4E2DD] space-y-3">
              <a
                href={getWhatsAppUrl(
                  `Hello Aksharam, I'm interested in wholesale information and line sheets for ${collection.title}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full min-h-[48px] py-3.5 text-center bg-[#171717] text-[#FAFAF8] text-xs uppercase tracking-[0.15em] font-medium rounded-[2px] hover:bg-black transition-colors"
              >
                Wholesale Enquiry for {collection.title}
              </a>

              <Link
                href="/collections"
                className="inline-flex items-center justify-center w-full min-h-[44px] text-center text-xs uppercase tracking-[0.15em] text-[#66635F] hover:text-[#171717] transition-colors py-2"
              >
                ← Back to all collections
              </Link>
            </div>
          </div>
        </div>

        {/* Collection Nav */}
        <div className="mt-12 sm:mt-16 pt-5 sm:pt-6 border-t border-[#E4E2DD] flex items-center justify-between text-xs uppercase tracking-[0.15em] text-[#66635F]">
          <Link
            href={`/collections/${prevCollection.slug}`}
            className="hover:text-[#171717] transition-colors min-h-[44px] inline-flex items-center py-2"
          >
            ← {prevCollection.title}
          </Link>
          <Link
            href={`/collections/${nextCollection.slug}`}
            className="hover:text-[#171717] transition-colors min-h-[44px] inline-flex items-center py-2"
          >
            {nextCollection.title} →
          </Link>
        </div>
      </section>

      <CustomisationSection />
    </>
  );
}
