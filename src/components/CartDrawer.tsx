"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { X, Plus, Minus, Trash2, ArrowRight, ShoppingBag } from "lucide-react";

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalPieces,
    totalDesigns,
    setIsReviewOpen,
  } = useCart();

  if (!isCartOpen) return null;

  const handleProceedToReview = () => {
    setIsCartOpen(false);
    setIsReviewOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-4 sm:pl-10">
        <div className="w-screen max-w-md bg-white border-l border-[#EAE5DC] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="px-5 sm:px-6 py-4 sm:py-5 bg-[#FAF7F2] border-b border-[#EAE5DC] flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <ShoppingBag className="w-5 h-5 text-[#7D1D2B]" />
              <div>
                <h2 className="font-serif text-lg font-medium text-[#1C1917]">
                  Wholesale Cart
                </h2>
                <p className="text-xs text-[#78716C]">
                  {totalDesigns} {totalDesigns === 1 ? "Design" : "Designs"} •{" "}
                  <strong className="text-[#7D1D2B] font-semibold">
                    {totalPieces} {totalPieces === 1 ? "Piece" : "Pieces"}
                  </strong>
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              aria-label="Close cart"
              className="p-1.5 text-[#57534E] hover:text-[#1C1917] hover:bg-[#EAE5DC] rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#FAF7F2] border border-[#EAE5DC] flex items-center justify-center text-[#A8A29E] mb-4">
                  <ShoppingBag className="w-8 h-8 stroke-[1.2]" />
                </div>
                <h3 className="font-serif text-lg text-[#1C1917] font-medium">
                  Your Wholesale Cart is Empty
                </h3>
                <p className="mt-1 text-xs text-[#78716C] max-w-xs leading-relaxed">
                  Browse our real bridal and festive lehenga designs to select quantities and create your wholesale order request.
                </p>
                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  className="mt-6 py-2.5 px-5 bg-[#7D1D2B] text-white text-xs uppercase tracking-widest font-medium hover:bg-[#58121C] transition-colors"
                >
                  Explore Catalogue
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex space-x-4 p-3 bg-[#FAF7F2]/60 border border-[#EAE5DC] relative group"
                >
                  {/* Thumbnail with exact Tag */}
                  <div className="relative w-20 h-24 shrink-0 overflow-hidden bg-white border border-[#DDD7CC]">
                    <Image
                      src={item.product.image}
                      alt={item.product.code}
                      fill
                      className="object-cover object-top"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between py-0.5">
                    <div>
                      <span className="inline-block px-1.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-[#1C1917] text-white">
                        {item.product.code}
                      </span>
                      <h4 className="font-serif text-sm text-[#1C1917] font-medium mt-1 line-clamp-1">
                        {item.product.name}
                      </h4>
                      <p className="text-[11px] text-[#78716C]">
                        {item.product.category} • {item.product.color}
                      </p>
                    </div>

                    {/* Quantity Stepper & Remove */}
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#EAE5DC]/80">
                      <div className="flex items-center border border-[#D6CEC1] bg-white">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          aria-label="Decrease quantity"
                          className="w-6 h-6 flex items-center justify-center text-[#57534E] hover:bg-[#F2EBE1]"
                        >
                          <Minus className="w-2.5 h-2.5" />
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => {
                            const val = parseInt(e.target.value, 10);
                            updateQuantity(
                              item.product.id,
                              isNaN(val) || val < 1 ? 1 : val
                            );
                          }}
                          className="w-8 h-6 text-center text-xs font-bold text-[#1C1917] focus:outline-hidden"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          aria-label="Increase quantity"
                          className="w-6 h-6 flex items-center justify-center text-[#57534E] hover:bg-[#F2EBE1]"
                        >
                          <Plus className="w-2.5 h-2.5" />
                        </button>
                      </div>

                      <div className="flex items-center space-x-3">
                        <span className="text-xs font-semibold text-[#7D1D2B]">
                          {item.quantity} pcs
                        </span>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.product.id)}
                          aria-label="Remove design"
                          className="text-[#A8A29E] hover:text-[#7D1D2B] transition-colors p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer (NO PRICES) */}
          {cart.length > 0 && (
            <div className="p-6 bg-[#FAF7F2] border-t border-[#EAE5DC] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#EAE5DC]">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#78716C] font-medium block">
                    Total Order Quantity
                  </span>
                  <span className="text-xs text-[#A8A29E]">
                    {totalDesigns} unique design codes
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-serif text-2xl font-bold text-[#7D1D2B] block">
                    {totalPieces} Pieces
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-[#78716C]">
                    Zero Price Display
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleProceedToReview}
                className="w-full py-3.5 px-6 bg-[#7D1D2B] text-white hover:bg-[#58121C] text-xs uppercase tracking-widest font-semibold transition-colors flex items-center justify-center space-x-2 shadow-sm"
              >
                <span>Proceed to Order Review</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between text-xs text-[#78716C]">
                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  className="hover:text-[#1C1917] transition-colors"
                >
                  Continue Browsing
                </button>
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-[#A8A29E] hover:text-[#7D1D2B] transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
