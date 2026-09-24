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
    <section id="collections" className="py-16 md:py-24 px-6 sm:px-10 lg:px-16 max-w-[1440px] mx-auto">
      {/* Header */}
      <ScrollReveal>
        <div className="flex items-baseline justify-between mb-8 md:mb-12 border-b border-[#E4E2DD] pb-4">
          <h2 className="text-2xl sm:text-3xl font-light text-[#171717] tracking-tight">
            Collections
          </h2>
          <Link
            href="/collections"
            className="group inline-flex items-center text-xs uppercase tracking-[0.15em] text-[#66635F] hover:text-[#171717] transition-colors"
          >
            <span>View all</span>
            <span className="inline-block transition-transform duration-250 ease-out group-hover:translate-x-1 ml-1">
              →
            </span>
          </Link>
        </div>
      </ScrollReveal>

      {/* 3-Column Photography Grid with Staggered Entry */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 md:gap-y-12">
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
