"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { siteConfig } from "@/data/siteConfig";
import {
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  ShieldCheck,
  Truck,
  MessageCircle,
} from "lucide-react";

export default function CartPage() {
  const {
    cart,
    totalPieces,
    totalDesigns,
    updateQuantity,
    removeFromCart,
    clearCart,
    setIsReviewOpen,
  } = useCart();

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16">
        {/* Header */}
        <div className="border-b border-[#EAE5DC] pb-6 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#7D1D2B] font-semibold block mb-1">
              B2B Order Preparation
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#1C1917]">
              Wholesale Shopping Cart
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-[#78716C]">
              Review your selected designs, update piece quantities, and generate your direct WhatsApp order.
            </p>
          </div>

          <div className="text-right">
            <span className="text-xs uppercase tracking-wider text-[#78716C] block">
              Total Order Pieces
            </span>
            <span className="font-serif text-3xl font-bold text-[#7D1D2B]">
              {totalPieces} Pieces
            </span>
          </div>
        </div>

        {cart.length === 0 ? (
          <div className="py-20 text-center bg-white border border-[#EAE5DC] p-8 max-w-xl mx-auto shadow-xs">
            <div className="w-16 h-16 rounded-full bg-[#FAF7F2] border border-[#EAE5DC] flex items-center justify-center text-[#A8A29E] mx-auto mb-4">
              <ShoppingBag className="w-8 h-8 stroke-[1.2]" />
            </div>
            <h2 className="font-serif text-2xl text-[#1C1917] font-medium">
              Your Wholesale Cart is Empty
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#78716C] leading-relaxed">
              You haven&apos;t added any lehenga designs to your order yet. Browse our verified factory collection to select designs and piece counts.
            </p>
            <div className="mt-6 flex justify-center space-x-3">
              <Link
                href="/catalogue"
                className="py-3 px-6 bg-[#7D1D2B] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#58121C] transition-colors"
              >
                Browse Catalogue
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 8 Cols: Items Table */}
            <div className="lg:col-span-8 bg-white border border-[#EAE5DC] shadow-xs">
              <div className="px-6 py-4 bg-[#FAF7F2] border-b border-[#EAE5DC] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#1C1917]">
                <span>Product & Design Code</span>
                <span className="hidden sm:inline">Wholesale Quantity</span>
              </div>

              <div className="divide-y divide-[#EAE5DC]">
                {cart.map((item, idx) => (
                  <div
                    key={item.product.id}
                    className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-xs font-mono text-[#A8A29E] w-5">
                        #{idx + 1}
                      </span>
                      <div className="relative w-20 h-26 shrink-0 overflow-hidden bg-[#FAF7F2] border border-[#DDD7CC]">
                        <Image
                          src={item.product.image}
                          alt={item.product.code}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                      <div>
                        <span className="inline-block px-2 py-0.5 text-xs font-mono font-bold uppercase tracking-wider bg-[#1C1917] text-white mb-1">
                          {item.product.code}
                        </span>
                        <h3 className="font-serif text-base font-medium text-[#1C1917]">
                          <Link
                            href={`/products/${item.product.id}`}
                            className="hover:text-[#7D1D2B] transition-colors"
                          >
                            {item.product.name}
                          </Link>
                        </h3>
                        <p className="text-xs text-[#78716C] mt-0.5">
                          {item.product.category} • {item.product.color} • {item.product.fabric}
                        </p>
                      </div>
                    </div>

                    {/* Stepper & Controls */}
                    <div className="flex items-center justify-between sm:justify-end space-x-4 pl-9 sm:pl-0">
                      <div className="flex items-center border border-[#D6CEC1] bg-[#FAF7F2]">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          aria-label="Decrease piece count"
                          className="w-8 h-8 flex items-center justify-center text-[#57534E] hover:bg-[#ECE6DC]"
                        >
                          <Minus className="w-3 h-3" />
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
                          className="w-12 h-8 text-center text-xs font-bold text-[#1C1917] focus:outline-hidden"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          aria-label="Increase piece count"
                          className="w-8 h-8 flex items-center justify-center text-[#57534E] hover:bg-[#ECE6DC]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-sm font-bold text-[#7D1D2B] min-w-[70px] text-right">
                        {item.quantity} pcs
                      </span>

                      <button
                        type="button"
                        onClick={() => removeFromCart(item.product.id)}
                        aria-label="Remove item"
                        className="text-[#A8A29E] hover:text-[#7D1D2B] p-1.5 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-[#FAF7F2] border-t border-[#EAE5DC] flex items-center justify-between text-xs text-[#78716C]">
                <Link
                  href="/catalogue"
                  className="hover:text-[#1C1917] font-medium"
                >
                  ← Continue Adding Designs
                </Link>
                <button
                  type="button"
                  onClick={clearCart}
                  className="hover:text-[#7D1D2B] text-[#A8A29E]"
                >
                  Clear Entire Cart
                </button>
              </div>
            </div>

            {/* Right 4 Cols: Order Summary Sidebar (NO PRICES) */}
            <div className="lg:col-span-4 bg-white border border-[#EAE5DC] shadow-xs p-6 space-y-6">
              <h2 className="font-serif text-xl font-medium text-[#1C1917] pb-3 border-b border-[#EAE5DC]">
                Consignment Summary
              </h2>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between text-[#78716C]">
                  <span>Total Selected Designs</span>
                  <span className="font-semibold text-[#1C1917]">
                    {totalDesigns} Designs
                  </span>
                </div>
                <div className="flex justify-between text-[#78716C]">
                  <span>Pricing Structure</span>
                  <span className="font-semibold text-[#7D1D2B]">
                    Direct Factory Rates
                  </span>
                </div>
                <div className="flex justify-between text-[#78716C]">
                  <span>Minimum Lot Policy</span>
                  <span className="font-semibold text-[#1C1917]">
                    Flexible (from 1 pc)
                  </span>
                </div>

                <div className="pt-4 border-t border-[#EAE5DC] flex items-baseline justify-between">
                  <span className="font-serif text-base font-bold text-[#1C1917]">
                    Total Quantity
                  </span>
                  <span className="font-serif text-2xl font-bold text-[#7D1D2B]">
                    {totalPieces} Pieces
                  </span>
                </div>
              </div>

              {/* Zero Price Transparency Badge */}
              <div className="p-3 bg-[#FAF7F2] border border-[#EAE5DC] text-[11px] text-[#78716C] leading-relaxed">
                <strong className="text-[#1C1917] block mb-0.5">
                  Direct Factory Submission
                </strong>
                Submitting your order transmits your complete piece counts to our WhatsApp production desk (+91 9998283811). Our team confirms ready stock and shares wholesale invoice promptly.
              </div>

              {/* Primary Action Button */}
              <button
                type="button"
                onClick={() => setIsReviewOpen(true)}
                className="w-full py-4 px-6 bg-[#7D1D2B] hover:bg-[#58121C] text-white text-xs uppercase tracking-widest font-bold transition-colors flex items-center justify-center space-x-2 shadow-sm"
              >
                <span>Proceed to Order Review</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-2 border-t border-[#F2EBE1] space-y-2 text-xs text-[#78716C]">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-[#7D1D2B]" />
                  <span>Surat Mill Quality Certification</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="w-4 h-4 text-[#7D1D2B]" />
                  <span>Secure Pan-India & Global Dispatch</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
