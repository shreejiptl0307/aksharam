"use client";

import { useState } from "react";
import Link from "next/link";
import { collectionsData, CollectionItem } from "@/data/collections";
import CollectionCard from "@/components/CollectionCard";
import QuickViewModal from "@/components/QuickViewModal";
import ScrollReveal from "@/components/ScrollReveal";

interface CollectionsProps {
  limit?: number;
}

export default function Collections({ limit = 3 }: CollectionsProps) {
  const [selectedQuickView, setSelectedQuickView] = useState<CollectionItem | null>(null);
  const items = limit ? collectionsData.slice(0, limit) : collectionsData;

  return (
    <section id="collections" className="py-12 sm:py-16 md:py-20 lg:py-24 px-5 sm:px-8 lg:px-16 max-w-[1440px] mx-auto">
      {/* Header */}
      <ScrollReveal>
        <div className="flex items-baseline justify-between mb-6 sm:mb-8 md:mb-10 border-b border-[#E4E2DD] pb-3 sm:pb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-[#171717] tracking-tight">
            Collections
          </h2>
          <Link
            href="/collections"
            className="group inline-flex items-center text-xs uppercase tracking-[0.15em] text-[#66635F] hover:text-[#171717] transition-colors py-2"
          >
            <span>View all</span>
            <span className="inline-block transition-transform duration-250 ease-out group-hover:translate-x-1 ml-1">
              →
            </span>
          </Link>
        </div>
      </ScrollReveal>

      {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-8 sm:gap-y-10 md:gap-y-12">
        {items.map((item, index) => (
          <ScrollReveal key={item.id} delay={index * 80}>
            <CollectionCard
              item={item}
              onQuickView={(clickedItem) => setSelectedQuickView(clickedItem)}
            />
          </ScrollReveal>
        ))}
      </div>

      {/* Minimal Editorial Quick View Modal */}
      <QuickViewModal
        item={selectedQuickView}
        isOpen={selectedQuickView !== null}
        onClose={() => setSelectedQuickView(null)}
      />
    </section>
  );
}
