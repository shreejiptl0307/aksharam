"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { siteConfig } from "@/data/siteConfig";
import { X, Plus, Minus, ShoppingBag, MessageCircle, Check, ArrowRight } from "lucide-react";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductDetailModal({
  product,
  onClose,
}: ProductDetailModalProps) {
  const { addToCart, setIsCartOpen } = useCart();
  const [quantity, setQuantity] = useState<number | string>(1);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [isAdded, setIsAdded] = useState(false);

  const parsedQuantity = Math.max(1, parseInt(String(quantity), 10) || 1);

  // Sync state when product opens
  React.useEffect(() => {
    if (product) {
      setQuantity(1);
      setSelectedImage(product.image);
      setIsAdded(false);
    }
  }, [product]);

  if (!product) return null;

  const handleIncrement = () => setQuantity(parsedQuantity + 1);
  const handleDecrement = () => setQuantity(Math.max(1, parsedQuantity - 1));

  const handleAddToCart = () => {
    addToCart(product, parsedQuantity);
    setQuantity(parsedQuantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleDirectWhatsApp = () => {
    const origin = typeof window !== "undefined" ? window.location.origin : siteConfig.url;
    const fullImg = product.image.startsWith("http") ? product.image : `${origin}${product.image}`;
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
      `Please confirm availability, wholesale booking, and dispatch timeline.`,
    ].join("\n");

    const url = `https://api.whatsapp.com/send?phone=${siteConfig.whatsapp.number}&text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const galleryImages = product.gallery && product.gallery.length > 0
    ? product.gallery
    : [product.image];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-4xl border border-[#EAE5DC] shadow-2xl overflow-hidden flex flex-col md:flex-row my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close product modal"
          className="absolute top-4 right-4 z-30 w-9 h-9 bg-white/90 backdrop-blur-xs border border-[#EAE5DC] rounded-full flex items-center justify-center text-[#1C1917] hover:bg-[#7D1D2B] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Image Gallery */}
        <div className="w-full md:w-1/2 bg-[#FAF7F2] p-4 sm:p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#EAE5DC]">
          <div className="relative aspect-[3/4] w-full overflow-hidden border border-[#E8E2D7] bg-white shadow-xs">
            <Image
              src={selectedImage || product.image}
              alt={`${product.name} - ${product.code}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-cover object-top"
            />

            {/* Tag Badge */}
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-[#1C1917]/90 text-white backdrop-blur-xs border border-white/20">
                {product.code}
              </span>
            </div>
          </div>

          {/* Multiple thumbnails if available */}
          {galleryImages.length > 1 && (
            <div className="flex space-x-2 mt-4 overflow-x-auto pb-1">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImage(img)}
                  className={`relative w-16 h-20 shrink-0 border overflow-hidden ${
                    selectedImage === img
                      ? "border-[#7D1D2B] ring-1 ring-[#7D1D2B]"
                      : "border-[#DDD7CC] opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    fill
                    className="object-cover object-top"
                  />
                </button>
              ))}
            </div>
          )}

          <p className="mt-3 text-[11px] text-center text-[#78716C]">
            Original factory photograph with official manufacturer design tag
          </p>
        </div>

        {/* Right Column: Specifications & Wholesale Ordering */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between bg-white overflow-y-auto max-h-[85vh]">
          <div>
            <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#7D1D2B] font-medium mb-1">
              <span>{product.category}</span>
              <span>•</span>
              <span>Design #{product.designNo}</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1917] leading-tight">
              {product.name}
            </h2>

            <div className="mt-3 py-2 px-3 bg-[#FAF7F2] border border-[#EAE5DC] flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-[#78716C] font-medium">
                Official Design Tag
              </span>
              <span className="font-mono text-sm font-bold text-[#1C1917]">
                {product.code}
              </span>
            </div>

            {/* Specifications Matrix */}
            <div className="mt-4 grid grid-cols-2 gap-3 text-xs border-y border-[#F2EBE1] py-4">
              <div>
                <span className="block text-[#78716C] uppercase tracking-wider text-[10px]">
                  Fabric
                </span>
                <span className="font-medium text-[#1C1917] mt-0.5 block">
                  {product.fabric}
                </span>
              </div>
              <div>
                <span className="block text-[#78716C] uppercase tracking-wider text-[10px]">
                  Colorway
                </span>
                <span className="font-medium text-[#1C1917] mt-0.5 block">
                  {product.color}
                </span>
              </div>
              <div className="col-span-2">
                <span className="block text-[#78716C] uppercase tracking-wider text-[10px]">
                  Embroidery & Artistry
                </span>
                <span className="font-medium text-[#1C1917] mt-0.5 block">
                  {product.work}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="mt-4">
              <h4 className="text-xs uppercase tracking-wider text-[#78716C] font-medium mb-1.5">
                Garment Description
              </h4>
              <p className="text-xs sm:text-sm text-[#44403C] font-light leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>

          {/* Wholesale Quantity & Actions (NO PRICES) */}
          <div className="mt-6 pt-5 border-t border-[#F2EBE1] space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-wider font-medium text-[#1C1917]">
                  Select Wholesale Quantity:
                </span>
                <span className="text-xs text-[#78716C]">
                  {parsedQuantity} {parsedQuantity === 1 ? "Piece" : "Pieces"} Selected
                </span>
              </div>

              {/* Quick Preset Buttons */}
              <div className="flex items-center space-x-1.5 mb-3">
                {[1, 2, 5, 10, 20].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setQuantity(preset)}
                    className={`flex-1 py-1 text-xs font-medium border transition-colors ${
                      parsedQuantity === preset
                        ? "bg-[#7D1D2B] text-white border-[#7D1D2B]"
                        : "bg-[#FAF7F2] text-[#44403C] border-[#D6CEC1] hover:bg-[#ECE6DC]"
                    }`}
                  >
                    {preset} {preset === 1 ? "pc" : "pcs"}
                  </button>
                ))}
              </div>

              {/* Precise Stepper */}
              <div className="flex items-center border border-[#D6CEC1] bg-[#FAF7F2]">
                <button
                  type="button"
                  onClick={handleDecrement}
                  aria-label="Decrease piece count"
                  className="w-10 h-10 flex items-center justify-center text-[#44403C] hover:bg-[#ECE6DC]"
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
                  className="flex-grow h-10 text-center font-bold text-sm bg-transparent text-[#1C1917] focus:outline-hidden focus:bg-white"
                  aria-label="Quantity"
                />
                <button
                  type="button"
                  onClick={handleIncrement}
                  aria-label="Increase piece count"
                  className="w-10 h-10 flex items-center justify-center text-[#44403C] hover:bg-[#ECE6DC]"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5">
              <button
                type="button"
                onClick={handleAddToCart}
                className={`flex-1 py-3 px-4 text-xs uppercase tracking-widest font-medium transition-all duration-200 flex items-center justify-center space-x-2 border ${
                  isAdded
                    ? "bg-[#1E5D38] text-white border-[#1E5D38]"
                    : "bg-[#7D1D2B] text-white border-[#7D1D2B] hover:bg-[#58121C]"
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add {parsedQuantity} Pieces to Cart</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleDirectWhatsApp}
                className="flex-1 py-3 px-4 bg-[#25D366] text-white hover:bg-[#1EBE5D] text-xs uppercase tracking-widest font-medium transition-colors flex items-center justify-center space-x-2 border border-[#25D366]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire on WhatsApp</span>
              </button>
            </div>

            <div className="flex items-center justify-between pt-2 text-[11px] text-[#78716C]">
              <span>Direct Mill Supply • Surat, Gujarat</span>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  setIsCartOpen(true);
                }}
                className="text-[#7D1D2B] font-medium hover:underline flex items-center space-x-1"
              >
                <span>Open Cart</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
