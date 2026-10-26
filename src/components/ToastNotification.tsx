"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Check, ShoppingBag, X } from "lucide-react";

export default function ToastNotification() {
  const { toast, dismissToast, setIsCartOpen } = useCart();

  if (!toast) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 max-w-sm w-full bg-white border border-[#C5A880] shadow-2xl p-4 flex items-center space-x-3.5 animate-in slide-in-from-bottom-5 duration-300">
      <div className="relative w-12 h-16 shrink-0 overflow-hidden bg-[#FAF7F2] border border-[#DDD7CC]">
        <Image
          src={toast.image}
          alt={toast.productCode}
          fill
          className="object-cover object-top"
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center space-x-1.5 text-[11px] font-semibold text-[#1E5D38] uppercase tracking-wider">
          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>Added to Order</span>
        </div>
        <p className="font-mono text-xs font-bold text-[#1C1917] truncate mt-0.5">
          {toast.productCode}
        </p>
        <p className="text-[11px] text-[#78716C] truncate">
          +{toast.quantity} {toast.quantity === 1 ? "Piece" : "Pieces"}
        </p>
      </div>

      <div className="flex flex-col items-end space-y-1.5 shrink-0">
        <button
          type="button"
          onClick={dismissToast}
          aria-label="Dismiss toast"
          className="text-[#A8A29E] hover:text-[#1C1917] p-0.5"
        >
          <X className="w-3.5 h-3.5" />
        </button>
        <button
          type="button"
          onClick={() => {
            dismissToast();
            setIsCartOpen(true);
          }}
          className="py-1 px-2.5 bg-[#7D1D2B] text-white text-[10px] uppercase tracking-widest font-semibold hover:bg-[#58121C] transition-colors"
        >
          View Cart
        </button>
      </div>
    </div>
  );
}
