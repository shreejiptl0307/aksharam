import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Craftsmanship from "@/components/Craftsmanship";
import Sustainability from "@/components/Sustainability";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "About Our Story & Craftsmanship | Aksharam Ethnic LLP",
  description:
    "Learn about Aksharam Ethnic LLP, our Surat manufacturing atelier, our dedication to Indian craftsmanship, and our B2B wholesale partnership approach.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="Our Heritage & Philosophy"
        title="Where Craftsmanship Meets"
        italicTitle="Contemporary Design."
        description="Aksharam Ethnic LLP combines authentic Indian embroidery traditions with contemporary silhouettes to create distinctive collections for modern retailers and boutiques."
        breadcrumbs={[{ label: "About" }]}
      />

      {/* Brand Introduction Narrative */}
      <section className="py-24 md:py-32 bg-[#F7F3EC] text-[#181715]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <div className="flex items-center space-x-3 mb-4">
                <span className="w-8 h-[1px] bg-[#702C36]" />
                <span className="text-[11px] tracking-[0.3em] uppercase font-sans text-[#702C36] font-semibold">
                  Rooted in Surat
                </span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl font-normal leading-[1.15] text-[#181715] mb-6">
                Born in India&apos;s Textile Capital.
              </h2>
              <div className="space-y-4 text-base text-[#57524B] font-light leading-relaxed">
                <p>
                  Established at the Laxmi Narayan Industrial Park in Surat,
                  Gujarat, Aksharam Ethnic LLP operates at the heart of India&apos;s
                  most vibrant textile and apparel manufacturing ecosystem.
                </p>
                <p>
                  Our atelier brings together generations of hand-embroidery
                  masters, pattern makers, and modern apparel engineers. Rather
                  than following transient fast-fashion cycles, we craft timeless
                  collections that celebrate the richness of shisha mirror-work,
                  zari, resham, and fine drape textiles.
                </p>
                <p>
                  We are built from the ground up as a dedicated wholesale and
                  manufacturing partner, understanding the nuanced requirements of
                  boutique owners, multi-designer curators, and fashion retailers.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#181715]/10 flex items-center space-x-8">
                <div>
                  <p className="font-editorial text-2xl text-[#702C36]">Surat</p>
                  <p className="text-[10px] uppercase tracking-widest text-[#7E786E]">
                    Gujarat, India
                  </p>
                </div>
                <div className="w-[1px] h-8 bg-[#181715]/15" />
                <div>
                  <p className="font-editorial text-2xl text-[#702C36]">B2B</p>
                  <p className="text-[10px] uppercase tracking-widest text-[#7E786E]">
                    Wholesale Focus
                  </p>
                </div>
                <div className="w-[1px] h-8 bg-[#181715]/15" />
                <div>
                  <p className="font-editorial text-2xl text-[#702C36]">Atelier</p>
                  <p className="text-[10px] uppercase tracking-widest text-[#7E786E]">
                    In-House QA
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative w-full aspect-[4/5] overflow-hidden border border-[#181715]/10 shadow-xl">
                <Image
                  src="/images/about/about-atelier.svg"
                  alt="Aksharam Surat Atelier and Manufacturing"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Deep Dive */}
      <Craftsmanship />

      {/* Atelier Core Values */}
      <section className="py-24 bg-[#EFE7DA] text-[#181715]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-[1px] bg-[#702C36]" />
              <span className="text-[11px] tracking-[0.3em] uppercase font-sans text-[#702C36] font-semibold">
                Our Standards
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl font-normal text-[#181715]">
              The Four Cornerstones of Our Production.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Material Selection",
                desc: "Sourcing premium raw silks, pure georgettes, gossamer organzas, and breathable linen-cotton blends tested for longevity.",
              },
              {
                title: "Precision Mirror Locking",
                desc: "Every shisha element is secured with hand-stitched frame boundaries ensuring mirrors stay intact through wear and travel.",
              },
              {
                title: "Graded Tailoring",
                desc: "Meticulous fit grading across XS to 3XL with generous seam margins allowing easy boutique adjustments.",
              },
              {
                title: "Direct B2B Communication",
                desc: "Transparent production updates and direct trade desk support for seamless seasonal re-orders.",
              },
            ].map((corner, i) => (
              <div
                key={corner.title}
                className="p-8 bg-[#F7F3EC] border border-[#181715]/10 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-sans tracking-[0.3em] text-[#702C36] font-semibold">
                    0{i + 1}
                  </span>
                  <h3 className="font-editorial text-2xl font-normal text-[#181715] mt-4 mb-3">
                    {corner.title}
                  </h3>
                  <p className="text-sm text-[#57524B] font-light leading-relaxed">
                    {corner.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#181715]/10 flex items-center text-[10px] uppercase tracking-widest text-[#702C36]">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
                  <span>Aksharam Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <Sustainability />

      {/* CTA */}
      <ContactCTA />
    </>
  );
}
