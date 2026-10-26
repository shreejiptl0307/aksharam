"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Product, ProductCategory } from "@/types";
import { getStoredProducts } from "@/utils/storage";
import ProductCard from "@/components/ProductCard";
import ProductDetailModal from "@/components/ProductDetailModal";
import { Search, Filter, RefreshCw, SlidersHorizontal, Sparkles } from "lucide-react";

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
      {/* Search and Filter Controls */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#A8A29E] absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search by Design Code (e.g. 39750, 40270, 4152), fabric or color..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#D6CEC1] text-xs sm:text-sm text-[#1C1917] placeholder-[#A8A29E] focus:outline-hidden focus:border-[#7D1D2B] shadow-2xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-3 text-xs text-[#78716C] hover:text-[#1C1917]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Color Selector */}
          <div className="flex items-center space-x-2">
            <span className="text-[11px] uppercase tracking-wider text-[#78716C] font-semibold whitespace-nowrap">
              Color:
            </span>
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="py-2 px-3 bg-white border border-[#D6CEC1] text-xs text-[#1C1917] focus:outline-hidden focus:border-[#7D1D2B]"
            >
              {colors.map((c) => (
                <option key={c} value={c}>
                  {c === "All" ? "All Colors" : c}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="flex items-center justify-between border-b border-[#EAE5DC] pb-3 overflow-x-auto">
          <div className="flex items-center space-x-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`py-1.5 px-4 text-xs uppercase tracking-widest font-medium transition-all whitespace-nowrap border ${
                  selectedCategory === cat
                    ? "bg-[#7D1D2B] text-white border-[#7D1D2B]"
                    : "bg-white text-[#57534E] border-[#EAE5DC] hover:border-[#C5A880] hover:text-[#1C1917]"
                }`}
              >
                {cat === "All" ? "All Designs" : cat}
              </button>
            ))}
          </div>

          <div className="hidden sm:flex items-center space-x-1.5 text-xs text-[#78716C]">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>
              Showing <strong>{filteredProducts.length}</strong> factory designs
            </span>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="py-16 text-center bg-white border border-[#EAE5DC] p-8">
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
            className="mt-4 py-2 px-4 bg-[#7D1D2B] text-white text-xs uppercase tracking-widest font-medium hover:bg-[#58121C]"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
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
