import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Marquee from "@/components/Marquee";
import ContactCTA from "@/components/ContactCTA";
import { collectionsData } from "@/data/collections";
import { getWhatsAppUrl } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Collections & Line Sheets | Aksharam Ethnic LLP",
  description:
    "Explore Aksharam Ethnic LLP's signature wholesale collections: Shisha Lehengas, Heritage Sarees, Occasion Dresses, Bridesmaid Edits, Everyday Co-ords, and Contemporary Silhouettes.",
};

export default function CollectionsPage() {
  return (
    <>
      <PageHeader
        label="Haute Ethnic Capsules"
        title="Our Curated"
        italicTitle="Collections."
        description="Designed for celebrations, festive occasions, and contemporary daywear. Engineered for luxury boutiques, multi-designer retailers, and global wholesale clients."
        breadcrumbs={[{ label: "Collections" }]}
      />

      <Marquee />

      {/* Main Collections Grid */}
      <section className="py-24 md:py-32 bg-[#F7F3EC] text-[#181715]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-24 md:space-y-36">
            {collectionsData.map((item, index) => {
              const isEven = index % 2 === 1;

              return (
                <div
                  key={item.id}
                  id={item.slug}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
                >
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-6 relative ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <Link
                      href={`/collections/${item.slug}`}
                      className="block group relative overflow-hidden bg-[#181715] border border-[#181715]/10 shadow-xl"
                    >
                      <div className="relative w-full aspect-[4/5] overflow-hidden">
                        <Image
                          src={item.coverImage}
                          alt={item.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />

                        {/* Top Category Badge */}
                        <div className="absolute top-6 left-6 bg-[#181715]/80 backdrop-blur-xs text-[#F7F3EC] px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] border border-white/10">
                          {item.category}
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Text Details Column */}
                  <div
                    className={`lg:col-span-6 flex flex-col justify-center ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-xl font-editorial text-[#702C36] font-normal">
                        {item.number}
                      </span>
                      <span className="w-8 h-[1px] bg-[#702C36]/30" />
                      <span className="text-[11px] tracking-[0.25em] uppercase font-sans text-[#702C36] font-semibold">
                        {item.category}
                      </span>
                    </div>

                    <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-[#181715] mb-4">
                      {item.title}
                    </h2>

                    <p className="text-sm font-sans uppercase tracking-[0.15em] text-[#702C36] mb-6">
                      {item.subtitle}
                    </p>

                    <p className="text-base text-[#57524B] font-light leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Specifications List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 pb-8 border-y border-[#181715]/10 my-4 text-xs">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-[#702C36] font-semibold block mb-1">
                          Primary Fabrics:
                        </span>
                        <p className="text-[#57524B] font-light">
                          {item.fabrics.join(", ")}
                        </p>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-[#702C36] font-semibold block mb-1">
                          Ideal Retailers:
                        </span>
                        <p className="text-[#57524B] font-light">
                          {item.idealFor.join(", ")}
                        </p>
                      </div>
                    </div>

                    {/* Dual Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                      <Link
                        href={`/collections/${item.slug}`}
                        className="inline-flex items-center justify-center space-x-2 px-7 py-3.5 bg-[#181715] text-[#F7F3EC] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#702C36] transition-all duration-300 group"
                      >
                        <span>View Lookbook & Specs</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>

                      <a
                        href={getWhatsAppUrl(
                          `Hello Aksharam, I'm interested in wholesale catalogue and pricing for ${item.title}.`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 border border-[#181715]/20 text-[#181715] text-xs uppercase tracking-[0.2em] font-medium hover:border-[#702C36] hover:text-[#702C36] transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Request Line Sheet</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContactCTA />
    </>
  );
}
