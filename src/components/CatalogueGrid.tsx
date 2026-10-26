"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Product } from "@/types";
import { getStoredProducts } from "@/utils/storage";
import ProductCard from "@/components/ProductCard";
import ProductDetailModal from "@/components/ProductDetailModal";
import { Search, SlidersHorizontal, Sparkles, X } from "lucide-react";

interface CatalogueGridProps {
  initialCategory?: string;
  limit?: number;
}

export default function CatalogueGrid({
  initialCategory,
  limit,
}: CatalogueGridProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(
    initialCategory || "All"
  );
  const [selectedColor, setSelectedColor] = useState<string>("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Sync products from local persistent storage
  const reloadProducts = () => {
    const list = getStoredProducts();
    // Only show published products in reseller catalogue
    setProducts(list.filter((p) => p.isPublished));
  };

  useEffect(() => {
    reloadProducts();
    const handleUpdate = () => reloadProducts();
    window.addEventListener("aksharam_products_updated", handleUpdate);
    return () =>
      window.removeEventListener("aksharam_products_updated", handleUpdate);
  }, []);

  // Sync prop changes
  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  const categories = useMemo(() => {
    return ["All", "Bridal Silk", "Festive Silk", "Tissue"];
  }, []);

  const colors = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => {
      if (p.color) set.add(p.color);
    });
    return ["All", ...Array.from(set)];
  }, [products]);

  // Filtered and searched products
  const filteredProducts = useMemo(() => {
    let result = products;

    // Category filter
    if (selectedCategory && selectedCategory !== "All") {
      result = result.filter(
        (p) =>
          p.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
          selectedCategory.toLowerCase().includes(p.category.toLowerCase())
      );
    }

    // Color filter
    if (selectedColor && selectedColor !== "All") {
      result = result.filter(
        (p) => p.color.toLowerCase() === selectedColor.toLowerCase()
      );
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter((p) => {
        return (
          p.code.toLowerCase().includes(q) ||
          p.designNo.toLowerCase().includes(q) ||
          p.name.toLowerCase().includes(q) ||
          p.color.toLowerCase().includes(q) ||
          p.fabric.toLowerCase().includes(q) ||
          p.work.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
        );
      });
    }

    if (limit && limit > 0) {
      return result.slice(0, limit);
    }

    return result;
  }, [products, selectedCategory, selectedColor, searchQuery, limit]);

  return (
    <div className="w-full">
      {/* Search and Filter Controls: Optimized for Mobile & Desktop */}
      <div className="mb-6 sm:mb-8 space-y-3 sm:space-y-4">
        <div className="flex flex-row gap-2 sm:gap-3 items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#A8A29E] absolute left-3 top-3 sm:top-3.5" />
            <input
              type="text"
              placeholder="Search code (e.g. 39750, 40270, 4152), fabric, color..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 sm:py-2.5 bg-white border border-[#D6CEC1] text-xs sm:text-sm text-[#1C1917] placeholder-[#A8A29E] rounded-sm focus:outline-hidden focus:border-[#7D1D2B] shadow-2xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-2.5 text-xs text-[#78716C] hover:text-[#1C1917] p-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Color Dropdown */}
          <div className="shrink-0">
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="py-2 sm:py-2.5 px-2.5 sm:px-3 bg-white border border-[#D6CEC1] text-xs font-medium text-[#1C1917] rounded-sm focus:outline-hidden focus:border-[#7D1D2B] shadow-2xs"
            >
              {colors.map((c) => (
                <option key={c} value={c}>
                  {c === "All" ? "All Colors" : c}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Filter Pills: Smooth Horizontal Swipe */}
        <div className="flex items-center justify-between border-b border-[#EAE5DC] pb-2.5 overflow-x-auto no-scrollbar gap-2">
          <div className="flex items-center space-x-1.5 sm:space-x-2 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`py-1.5 px-3 sm:px-4 text-[11px] sm:text-xs uppercase tracking-wider font-semibold transition-all whitespace-nowrap rounded-sm border ${
                  selectedCategory === cat
                    ? "bg-[#7D1D2B] text-white border-[#7D1D2B] shadow-xs"
                    : "bg-white text-[#57534E] border-[#EAE5DC] hover:border-[#C5A880] hover:text-[#1C1917]"
                }`}
              >
                {cat === "All" ? "All Designs" : cat}
              </button>
            ))}
          </div>

          <div className="hidden sm:flex items-center space-x-1.5 text-xs text-[#78716C] shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>
              <strong>{filteredProducts.length}</strong> designs
            </span>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="py-12 sm:py-16 text-center bg-white border border-[#EAE5DC] p-6 sm:p-8 rounded-lg shadow-2xs">
          <SlidersHorizontal className="w-10 h-10 text-[#A8A29E] mx-auto mb-3" />
          <h3 className="font-serif text-lg text-[#1C1917] font-medium">
            No Designs Match Your Criteria
          </h3>
          <p className="mt-1 text-xs text-[#78716C] max-w-sm mx-auto">
            Try adjusting your search query or reset category filters to view our full collection of bridal and festive lehengas.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
              setSelectedColor("All");
            }}
            className="mt-4 py-2 px-4 bg-[#7D1D2B] text-white text-xs uppercase tracking-widest font-medium hover:bg-[#58121C] rounded-sm"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-7">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => setSelectedProduct(p)}
            />
          ))}
        </div>
      )}

      {/* Quick View Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
