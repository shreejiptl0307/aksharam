"use client";

import { useState } from "react";
import { collectionsData, CollectionItem } from "@/data/collections";
import CollectionCard from "@/components/CollectionCard";
import QuickViewModal from "@/components/QuickViewModal";

const filterCategories = [
  { id: "all", label: "All Collections" },
  { id: "lehengas", label: "Lehengas" },
  { id: "sarees", label: "Sarees" },
];

export default function CollectionsFilterGrid() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedQuickView, setSelectedQuickView] = useState<CollectionItem | null>(null);

  const filteredItems = collectionsData.filter((item) => {
    if (activeFilter === "all") return true;
    return item.category === activeFilter;
  });

  return (
    <div>
      {/* Clean Minimal Text Filter Tabs */}
      <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-10 md:mb-14 border-b border-[#E4E2DD] pb-4">
        {filterCategories.map((cat) => {
          const isActive = activeFilter === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveFilter(cat.id)}
              className={`text-xs uppercase tracking-[0.15em] transition-colors duration-250 cursor-pointer pb-1 ${
                isActive
                  ? "text-[#171717] font-medium border-b border-[#171717]"
                  : "text-[#66635F] hover:text-[#171717]"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Filtered Grid with Soft 300ms Crossfade */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 md:gap-y-14 transition-opacity duration-300">
        {filteredItems.map((item) => (
          <div key={item.id} className="animate-in fade-in duration-300">
            <CollectionCard
              item={item}
              showDescription={true}
              onQuickView={(clicked) => setSelectedQuickView(clicked)}
            />
          </div>
        ))}
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        item={selectedQuickView}
        isOpen={selectedQuickView !== null}
        onClose={() => setSelectedQuickView(null)}
      />
    </div>
  );
}
