import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MessageCircle, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactCTA from "@/components/ContactCTA";
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
    description: `${collection.subtitle} - ${collection.shortDescription}`,
    openGraph: {
      title: `${collection.title} | Aksharam Ethnic LLP`,
      description: collection.description,
      images: [collection.coverImage],
    },
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
        label={`Collection ${collection.number} • ${collection.category}`}
        title={collection.title}
        description={collection.subtitle}
        breadcrumbs={[
          { label: "Collections", href: "/collections" },
          { label: collection.title },
        ]}
      />

      {/* Main Showcase Section */}
      <section className="py-20 md:py-32 bg-[#F7F3EC] text-[#181715]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Main Hero Image */}
            <div className="lg:col-span-7">
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#181715] border border-[#181715]/10 shadow-2xl">
                <Image
                  src={collection.coverImage}
                  alt={collection.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>

              {/* Gallery thumbnails */}
              {collection.galleryImages && collection.galleryImages.length > 0 && (
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {collection.galleryImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-square overflow-hidden bg-[#181715] border border-[#181715]/10"
                    >
                      <Image
                        src={img}
                        alt={`${collection.title} Detail ${idx + 1}`}
                        fill
                        sizes="(max-width: 1024px) 33vw, 20vw"
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Technical & Wholesale Information */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="w-8 h-[1px] bg-[#702C36]" />
                  <span className="text-[11px] tracking-[0.3em] uppercase font-sans text-[#702C36] font-semibold">
                    Atelier Overview
                  </span>
                </div>

                <h2 className="font-editorial text-3xl sm:text-4xl text-[#181715] mb-6">
                  Design & Craftsmanship Notes
                </h2>

                <p className="text-base text-[#57524B] font-light leading-relaxed mb-8">
                  {collection.description}
                </p>

                {/* Key Features */}
                <div className="mb-8">
                  <h3 className="text-xs uppercase tracking-[0.25em] text-[#181715] font-semibold mb-4">
                    Key Silhouette & Embellishment Highlights
                  </h3>
                  <ul className="space-y-3">
                    {collection.keyFeatures.map((feat, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm text-[#57524B] font-light"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#702C36] shrink-0 mr-3 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specs Box */}
                <div className="p-6 bg-[#EFE7DA] border border-[#181715]/10 space-y-4 mb-8 text-xs">
                  <div>
                    <span className="font-semibold text-[#181715] uppercase tracking-wider block mb-1">
                      Fabrics & Textures:
                    </span>
                    <span className="text-[#57524B]">
                      {collection.fabrics.join(" • ")}
                    </span>
                  </div>

                  <div>
                    <span className="font-semibold text-[#181715] uppercase tracking-wider block mb-1">
                      Silhouettes Available:
                    </span>
                    <span className="text-[#57524B]">
                      {collection.silhouettes.join(" • ")}
                    </span>
                  </div>

                  <div>
                    <span className="font-semibold text-[#181715] uppercase tracking-wider block mb-1">
                      Occasions:
                    </span>
                    <span className="text-[#57524B]">
                      {collection.occasions.join(" • ")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Wholesale Conversion Actions */}
              <div className="pt-6 border-t border-[#181715]/10 space-y-4">
                <a
                  href={getWhatsAppUrl(
                    `Hello Aksharam, I would like to enquire about wholesale ordering, line sheets and pricing for your ${collection.title} collection.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 py-4 bg-[#702C36] text-[#F7F3EC] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#B79A67] transition-all duration-300 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center py-3.5 border border-[#181715]/20 text-[#181715] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#181715] hover:text-[#F7F3EC] transition-colors"
                >
                  Request Official Trade Catalog
                </Link>
              </div>
            </div>
          </div>

          {/* Wholesale Highlights Grid */}
          <div className="mt-24 pt-16 border-t border-[#181715]/10">
            <h3 className="font-editorial text-3xl text-[#181715] mb-8 text-center">
              Wholesale & Boutique Benefits for this Collection
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {collection.wholesaleHighlights.map((hl, idx) => (
                <div
                  key={idx}
                  className="p-8 bg-[#EFE7DA] border border-[#181715]/10"
                >
                  <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-[#702C36] font-semibold">
                    B2B Advantage 0{idx + 1}
                  </span>
                  <h4 className="font-editorial text-2xl text-[#181715] mt-2 mb-3">
                    {hl.title}
                  </h4>
                  <p className="text-sm text-[#57524B] font-light leading-relaxed">
                    {hl.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Collection Pagination / Navigation */}
          <div className="mt-20 pt-12 border-t border-[#181715]/10 flex items-center justify-between">
            <Link
              href={`/collections/${prevCollection.slug}`}
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#57524B] hover:text-[#702C36] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Prev: {prevCollection.title}</span>
            </Link>

            <Link
              href="/collections"
              className="text-xs uppercase tracking-[0.2em] text-[#702C36] font-semibold hover:underline hidden sm:inline-block"
            >
              All Collections
            </Link>

            <Link
              href={`/collections/${nextCollection.slug}`}
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#57524B] hover:text-[#702C36] transition-colors"
            >
              <span>Next: {nextCollection.title}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContactCTA />
    </>
  );
}
