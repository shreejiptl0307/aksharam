"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { siteConfig } from "@/data/siteConfig";
import ProductCard from "@/components/ProductCard";
import {
  Plus,
  Minus,
  ShoppingBag,
  MessageCircle,
  Check,
  ShieldCheck,
  Truck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface Props {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({
  product,
  relatedProducts,
}: Props) {
  const { addToCart, setIsCartOpen } = useCart();
  const [quantity, setQuantity] = useState<number | string>(1);
  const [selectedImage, setSelectedImage] = useState<string>(product.image);
  const [isAdded, setIsAdded] = useState(false);

  const parsedQuantity = Math.max(1, parseInt(String(quantity), 10) || 1);

  const handleIncrement = () => setQuantity(parsedQuantity + 1);
  const handleDecrement = () => setQuantity(Math.max(1, parsedQuantity - 1));

  const handleAddToCart = () => {
    addToCart(product, parsedQuantity);
    setQuantity(parsedQuantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleWhatsAppInquiry = () => {
    const origin =
      typeof window !== "undefined" ? window.location.origin : siteConfig.url;
    const fullImg = product.image.startsWith("http")
      ? product.image
      : `${origin}${product.image}`;

    const text = [
      `INQUIRY FOR DESIGN — AKSHARAM TEXTILES`,
      ``,
      `Product Code: ${product.code}`,
      `Product Name: ${product.name}`,
      `Category: ${product.category}`,
      `Fabric: ${product.fabric} | Color: ${product.color}`,
      `Requested Quantity: ${parsedQuantity} pieces`,
      `Product Image: ${fullImg}`,
      ``,
      `Please confirm stock availability, wholesale booking, and dispatch schedule.`,
    ].join("\n");

    const url = `https://api.whatsapp.com/send?phone=${siteConfig.whatsapp.number}&text=${encodeURIComponent(
      text
    )}`;
    window.open(url, "_blank");
  };

  const galleryImages =
    product.gallery && product.gallery.length > 0
      ? product.gallery
      : [product.image];

  return (
    <div>
      {/* Main Product Card Showcase */}
      <div className="bg-white border border-[#EAE5DC] shadow-sm overflow-hidden flex flex-col lg:flex-row mb-16">
        {/* Left Column: Image & Gallery */}
        <div className="w-full lg:w-7/12 p-6 sm:p-10 bg-[#FAF7F2] border-b lg:border-b-0 lg:border-r border-[#EAE5DC] flex flex-col justify-between">
          <div className="relative aspect-[3/4] w-full max-w-lg mx-auto overflow-hidden bg-white border border-[#E2DDD3] shadow-xs">
            <Image
              src={selectedImage}
              alt={`${product.name} - ${product.code}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />

            {/* Official Tag Badge Overlay */}
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-flex items-center px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-[#1C1917]/95 text-white backdrop-blur-xs border border-white/20 shadow-md">
                {product.code}
              </span>
            </div>

            <div className="absolute top-4 right-4 z-10">
              <span className="inline-flex items-center px-2.5 py-1 text-[11px] font-medium uppercase tracking-widest bg-white/95 text-[#7D1D2B] border border-[#EAE5DC]">
                {product.category}
              </span>
            </div>
          </div>

          {/* Multiple Thumbnails */}
          {galleryImages.length > 1 && (
            <div className="flex justify-center space-x-3 mt-6">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImage(img)}
                  className={`relative w-20 h-24 border overflow-hidden transition-all ${
                    selectedImage === img
                      ? "border-[#7D1D2B] ring-2 ring-[#7D1D2B]"
                      : "border-[#D6CEC1] opacity-75 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    className="object-cover object-top"
                  />
                </button>
              ))}
            </div>
          )}

          <p className="mt-4 text-xs text-center text-[#78716C]">
            Authentic Surat factory photograph with official manufacturer identifier tag
          </p>
        </div>

        {/* Right Column: Wholesale Specifications & Ordering */}
        <div className="w-full lg:w-5/12 p-6 sm:p-10 flex flex-col justify-between bg-white">
          <div>
            <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#7D1D2B] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>
                {product.category} • Design #{product.designNo}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#1C1917] leading-tight">
              {product.name}
            </h1>

            {/* Official Code Banner */}
            <div className="mt-4 p-3 bg-[#FAF7F2] border border-[#EAE5DC] flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#78716C] block">
                  Product Identifier Code
                </span>
                <span className="font-mono text-base font-bold text-[#1C1917]">
                  {product.code}
                </span>
              </div>
              <span className="px-2.5 py-1 text-[11px] font-medium bg-[#1E5D38]/10 text-[#1E5D38] border border-[#1E5D38]/20">
                Direct Mill Supply
              </span>
            </div>

            {/* Garment Specifications */}
            <div className="mt-6 border-y border-[#F2EBE1] py-5 space-y-3.5 text-xs sm:text-sm">
              <div className="flex justify-between py-1 border-b border-[#FAF7F2]">
                <span className="text-[#78716C] uppercase tracking-wider text-xs">
                  Fabric Construction
                </span>
                <span className="font-semibold text-[#1C1917]">
                  {product.fabric}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#FAF7F2]">
                <span className="text-[#78716C] uppercase tracking-wider text-xs">
                  Colorway
                </span>
                <span className="font-semibold text-[#1C1917]">
                  {product.color}
                </span>
              </div>
              <div className="flex flex-col py-1">
                <span className="text-[#78716C] uppercase tracking-wider text-xs mb-1">
                  Embroidery & Artistry
                </span>
                <span className="text-[#1C1917] leading-relaxed">
                  {product.work}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="mt-5">
              <h3 className="text-xs uppercase tracking-wider text-[#78716C] font-semibold mb-2">
                Garment & Silhouette Overview
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] font-light leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>

          {/* Wholesale Quantity & Action Buttons (NO PRICES) */}
          <div className="mt-8 pt-6 border-t border-[#F2EBE1] space-y-5">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#1C1917]">
                  Wholesale Quantity (Pieces):
                </span>
                <span className="text-xs text-[#78716C]">
                  {parsedQuantity} {parsedQuantity === 1 ? "Piece" : "Pieces"} Selected
                </span>
              </div>

              {/* Quick Presets */}
              <div className="flex items-center space-x-2 mb-3">
                {[1, 2, 5, 10, 20].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setQuantity(preset)}
                    className={`flex-1 py-1.5 text-xs font-semibold border transition-colors ${
                      parsedQuantity === preset
                        ? "bg-[#7D1D2B] text-white border-[#7D1D2B]"
                        : "bg-[#FAF7F2] text-[#44403C] border-[#D6CEC1] hover:bg-[#ECE6DC]"
                    }`}
                  >
                    {preset} {preset === 1 ? "pc" : "pcs"}
                  </button>
                ))}
              </div>

              {/* Stepper */}
              <div className="flex items-center border border-[#D6CEC1] bg-[#FAF7F2]">
                <button
                  type="button"
                  onClick={handleDecrement}
                  aria-label="Decrease quantity"
                  className="w-12 h-12 flex items-center justify-center text-[#57534E] hover:bg-[#ECE6DC]"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={quantity}
                  onFocus={(e) => e.target.select()}
                  onChange={(e) => {
                    const raw = e.target.value;
                    if (raw === "") {
                      setQuantity("");
                      return;
                    }
                    const clean = raw.replace(/\D/g, "");
                    setQuantity(clean === "" ? "" : parseInt(clean, 10));
                  }}
                  onBlur={() => {
                    if (quantity === "" || Number(quantity) < 1) {
                      setQuantity(1);
                    }
                  }}
                  className="flex-grow h-12 text-center font-bold text-base bg-transparent text-[#1C1917] focus:outline-hidden focus:bg-white"
                  aria-label="Quantity"
                />
                <button
                  type="button"
                  onClick={handleIncrement}
                  aria-label="Increase quantity"
                  className="w-12 h-12 flex items-center justify-center text-[#57534E] hover:bg-[#ECE6DC]"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-2.5">
              <button
                type="button"
                onClick={handleAddToCart}
                className={`w-full py-3.5 px-6 text-xs uppercase tracking-widest font-semibold transition-all flex items-center justify-center space-x-2.5 border ${
                  isAdded
                    ? "bg-[#1E5D38] text-white border-[#1E5D38]"
                    : "bg-[#7D1D2B] text-white border-[#7D1D2B] hover:bg-[#58121C]"
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added {parsedQuantity} Pieces to Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add {parsedQuantity} Pieces to Wholesale Cart</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleWhatsAppInquiry}
                className="w-full py-3.5 px-6 bg-[#25D366] text-white hover:bg-[#1EBE5D] text-xs uppercase tracking-widest font-semibold transition-colors flex items-center justify-center space-x-2.5 border border-[#25D366]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Inquire This Design on WhatsApp</span>
              </button>
            </div>

            {/* Cart link */}
            <div className="flex items-center justify-between text-xs text-[#78716C] pt-2">
              <div className="flex items-center space-x-3">
                <span className="flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#7D1D2B]" />
                  <span>Mill Certified</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Truck className="w-3.5 h-3.5 text-[#7D1D2B]" />
                  <span>Express Logistics</span>
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="text-[#7D1D2B] font-semibold hover:underline flex items-center space-x-1"
              >
                <span>View Cart Drawer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Designs Section */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#EAE5DC]">
            <h2 className="font-serif text-2xl font-medium text-[#1C1917]">
              Other Wholesale Designs
            </h2>
            <Link
              href="/catalogue"
              className="text-xs uppercase tracking-wider text-[#7D1D2B] font-semibold hover:underline flex items-center space-x-1"
            >
              <span>View Full Catalogue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
