"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { Plus, Minus, ShoppingBag, Eye, Check } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState<number>(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleIncrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  return (
    <div className="group relative flex flex-col bg-white border border-[#EAE5DC] rounded-lg overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300">
      {/* Product Image Container */}
      <div
        className="relative aspect-[3/4] w-full overflow-hidden bg-[#FAF7F2] cursor-pointer"
        onClick={() => onQuickView && onQuickView(product)}
      >
        <Image
          src={product.image}
          alt={`${product.name} - ${product.code}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Top Tag Banner: Exact Identifier from Manufacturer */}
        <div className="absolute top-2.5 left-2.5 z-10 max-w-[65%]">
          <span className="inline-flex items-center px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase bg-[#1C1917]/95 backdrop-blur-xs text-[#FAF7F2] border border-white/20 shadow-xs truncate">
            {product.code}
          </span>
        </div>

        {/* Category Pill on top right */}
        <div className="absolute top-2.5 right-2.5 z-10">
          <span className="inline-flex items-center px-2 py-0.5 text-[9px] sm:text-[10px] uppercase tracking-widest font-semibold bg-[#FAF7F2]/95 backdrop-blur-xs text-[#7D1D2B] border border-[#EAE5DC]">
            {product.category}
          </span>
        </div>

        {/* Quick View Button: Visible on Mobile via subtle icon pill, and desktop hover */}
        <div className="absolute inset-x-3 bottom-3 z-20 hidden sm:block opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onQuickView && onQuickView(product);
            }}
            className="w-full py-2 px-3 bg-white/95 backdrop-blur-xs text-[#1C1917] text-xs uppercase tracking-wider font-semibold border border-[#EAE5DC] flex items-center justify-center space-x-1.5 shadow-sm hover:bg-[#7D1D2B] hover:text-white hover:border-[#7D1D2B] transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View Details</span>
          </button>
        </div>

        {/* Mobile Quick View Chip */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onQuickView && onQuickView(product);
          }}
          className="sm:hidden absolute bottom-2.5 right-2.5 z-20 py-1 px-2 bg-white/90 backdrop-blur-xs text-[#1C1917] text-[10px] uppercase tracking-wider font-medium border border-[#EAE5DC] flex items-center space-x-1 shadow-2xs"
        >
          <Eye className="w-3 h-3" />
          <span>Quick View</span>
        </button>
      </div>

      {/* Product Details Section */}
      <div className="p-3.5 sm:p-5 flex flex-col flex-grow justify-between bg-white">
        <div>
          {/* Subtle Fabric & Color row */}
          <div className="flex items-center space-x-1.5 text-[10px] sm:text-[11px] text-[#78716C] tracking-wider uppercase mb-1">
            <span>{product.fabric}</span>
            <span>•</span>
            <span>{product.color}</span>
          </div>

          {/* Product Title */}
          <h3 className="font-serif text-base sm:text-lg text-[#1C1917] font-semibold leading-snug line-clamp-1 group-hover:text-[#7D1D2B] transition-colors">
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </h3>

          {/* Short Craft/Work Note */}
          <p className="mt-1 text-xs text-[#57534E] line-clamp-2 font-light leading-relaxed">
            {product.work}
          </p>
        </div>

        {/* Action Controls: Quantity Selector + Add to Cart (NO PRICES) */}
        <div className="mt-3.5 pt-3 border-t border-[#F2EBE1] flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#78716C] font-semibold">
              Wholesale Qty:
            </span>

            {/* Stepper with Min 1 */}
            <div className="flex items-center border border-[#D6CEC1] bg-[#FAF7F2] rounded-sm">
              <button
                type="button"
                onClick={handleDecrement}
                aria-label="Decrease wholesale quantity"
                className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-[#57534E] hover:text-[#1C1917] hover:bg-[#ECE6DC] transition-colors"
              >
                <Minus className="w-3 h-3" />
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => {
                  const val = parseInt(e.target.value, 10);
                  setQuantity(isNaN(val) || val < 1 ? 1 : val);
                }}
                className="w-9 h-7 sm:w-10 sm:h-8 text-center text-xs font-bold bg-transparent text-[#1C1917] focus:outline-hidden"
              />
              <button
                type="button"
                onClick={handleIncrement}
                aria-label="Increase wholesale quantity"
                className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-[#57534E] hover:text-[#1C1917] hover:bg-[#ECE6DC] transition-colors"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            type="button"
            onClick={handleAddToCart}
            className={`w-full py-2.5 px-3 text-xs uppercase tracking-wider font-semibold transition-all duration-200 flex items-center justify-center space-x-1.5 rounded-sm border ${
              isAdded
                ? "bg-[#1E5D38] text-white border-[#1E5D38]"
                : "bg-[#7D1D2B] text-white border-[#7D1D2B] hover:bg-[#58121C] hover:border-[#58121C]"
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added {quantity} Pieces ✓</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add {quantity} {quantity === 1 ? "Piece" : "Pieces"}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
